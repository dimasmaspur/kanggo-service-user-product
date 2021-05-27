const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req,res)=>{
    const schema = {
        name: 'string|empty:false',
        username: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:6',
        address:'string|empty:false',
        role:'string|empty:false',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status:'error',
            message: validate
        });
    }

    const user = await User.findOne({
        where:{ 
            email: req.body.email,  
            username: req.body.username,  
        }
    });

    if(user){
        return res.status(409).json({status:'error',message:'email or username already exist'});
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {
        password,
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        address:req.body.address,
        role:req.body.role
    };

    const createUser = await User.create(data);

    return res.json({
        status:'success',
        data:{
            id: createUser.id
        }
    });
}