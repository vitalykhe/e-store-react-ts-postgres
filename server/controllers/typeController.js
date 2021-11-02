const { Type } = require("../models/models");
const ApiError = require("../error/apiError");
class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    res.json(type);
  }
  async getAll(req, res) {
    const allTypes = await Type.findAll();
    return res.json(allTypes);
  }
  async delete(req, res) {
    const { id } = req.params;
    await Type.destroy({ where: { id } });
    const allTypes = await Type.findAll();
    return res.json(allTypes);
  }

  async update(req, res) {
    const typesForUpdate = req.body
    // let transaction = models.sequelize.transaction();
    console.log(typesForUpdate)
    for(let i = 0; i < typesForUpdate.length; i++) {
      try {
        const updateResult = await Type.update({ name: typesForUpdate[i].name }, { where: { id: typesForUpdate[i].id } })
      } catch (error) {
        console.log(error.message);
        return res.json(error.message)
      }
    }
    return res.json('OK')
    
  }
}

module.exports = new TypeController();
