const { Product } = require('../../../models');
module.exports = async (req, res) => {
    const product = await Product.findAll();
    if (!product) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: product
    });

}