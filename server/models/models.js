const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img_url: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  typeId: { type: DataTypes.INTEGER, allowNull: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false },
});
 

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  qty: { type: DataTypes.INTEGER }
});

const DeviceInfo = sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING  },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket);
Basket.belongsTo(User);


User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.belongsToMany(Brand, { through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})


module.exports = {
  User,
  Device,
  Basket,
  BasketDevice,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand,
  Brand
};
