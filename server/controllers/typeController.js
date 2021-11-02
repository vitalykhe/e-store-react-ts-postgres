const { Type } = require("../models/models");
const ApiError = require("../error/apiError");
class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    res.json(type);
  }
  async getAll(req, res) {
      const allTypes = await Type.findAll()
      return res.json(allTypes)
  }
  async delete(req, res) {
    const { id } = req.params;
    await Type.destroy({where : { id }})
    const allTypes = await Type.findAll()
    return res.json(allTypes)
  }
}

module.exports = new TypeController();
