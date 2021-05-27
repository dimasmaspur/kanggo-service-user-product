const { User } = require('../../../models');

module.exports = async (req, res)=>{

    const userIds =  req.query.user_ids || [];

    const sqlOptions = {
        attributes: ['id','name','email','username','address','role']
    }

    if(userIds.length){
        sqlOptions.where = {
            id: userIds
        };
    }

    const users = await User.findAll(sqlOptions);

    if(!users){
        return res.status(404).json({
            status:'error',
            message:'users not found'
        });
    }

    return res.json({
        status:'success',
        data:users
    });
}