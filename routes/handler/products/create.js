const Validator = require('fastest-validator');
const v = new Validator();
const { Product } = require('../../../models');

module.exports = async (req, res, next) => {
    // validasi formnya
    const schema = {
        name: 'string|empty:false',
        category: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
      name  : req.body.name,
      price : req.body.price,
      category : req.body.category,
    };

    try {
        const product = await Product.create(data);

        return res.json({
            status: "success",
            data: {
                id: product.id,
                name  : product.name,
                price : product.price,
                category : product.category,
                created_at: product.createdAt,
                updated_at: product.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
