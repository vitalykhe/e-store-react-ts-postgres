const { Brand } = require('../models/models');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    res.json(brand);
  }
  async getAll(req, res) {
      const allBrands = Brand.findAll()
      return res.json(allBrands)
  }
}

module.exports = new BrandController();
