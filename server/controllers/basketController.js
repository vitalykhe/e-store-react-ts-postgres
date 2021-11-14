const { BasketDevice } = require("../models/models");
const { Basket } = require("../models/models");
const ApiError = require("../error/apiError");
const { noExtendLeft } = require("sequelize/types/lib/operators");

class BasketController {
  async createBasket(req, res) {
    try {
      const { deviceId, userId } = req.query;
      const basketId = await Basket.create({ userId });
      const basketDevice = await BasketDevice.create({ basketId, deviceId });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async putDevice(req, res) {
    try {
      const { deviceId, basketId, qty } = req.body;
      const basketId = await Basket.create({ userId });
      const basketDevice = await BasketDevice.create({ basketId, deviceId });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getBasket(req, res) {
    try {
      const { basketId } = req.query;
      const basketDevice = await BasketDevice.findAll({
          where: { basketId }
      });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BasketController();
