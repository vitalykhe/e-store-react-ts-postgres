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
          img_url: fileName
        });
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }

    return res.json(device)
  }
  async getAll(req, res) {
    const allDevices = await Device.findAll();
    return res.json(allDevices);
  }
  async getOne(req, res) {}
}

module.exports = new DeviceController();
