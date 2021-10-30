const { Device } = require("../models/models");
const ApiError = require("../error/apiError");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, description, price, typeId, brandId } = req.body;
      const { img_url } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img_url.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        description,
        price,
        typeId,
        brandId,
        img_url: fileName,
      });
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let  { limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;

    let devices;
    if (!brandId && !typeId) {
    devices = await Device.findAndCountAll({limit, offset});
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: {
          typeId,
        },
        limit,
        offset,
      });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: {
          brandId,
        },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: {
          brandId,
          typeId,
        },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params
    const device = await Device.findOne({ 
      where: {id},
      include: [{
        model: DeviceInfo
      }] 
    })
    return res.json(device);
  }
}

module.exports = new DeviceController();
