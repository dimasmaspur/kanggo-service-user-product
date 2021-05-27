const { Product } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findByPk(id);

    if (!product) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await product.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}