import { makeAutoObservable } from "mobx";
import { Device, Type, Brand } from "../utils/types";

export default class DeviceStore {
  private _devices: Array<Device> | null;
  private _brands: Array<Brand> | null;
  private _types: Array<Type> | null;
  private _selectedType: Type | null;
  private _selectedBrand: Brand | null;


  constructor() {
    this._brands = [
      { id: 1, name: "LBY" },
      { id: 2, name: "Arlight" },
      { id: 3, name: "SWG" },
      { id: 4, name: "MIO" },
    ];

    this._types = [
      { id: 1, name: "LED strip" },
      { id: 2, name: "LED lens module" },
      { id: 3, name: "LED projector" },
      { id: 4, name: "LED grids" },
      { id: 5, name: "LED lamps" },
      { id: 6, name: "LED panels" },
    ];

    this._devices = [
      {
        id: 1,
        name: "First Device",
        img_url: "e23d43ad-4d09-4862-b910-ceb222e01775.jpg",
        description:
          "Double layer rolled copper FPC. High light efficacy 150LM/W",
        price: 2,
      },
      {
        id: 2,
        name: "Second Device",
        img_url: "e23d43ad-4d09-4862-b910-ceb222e01775.jpg",
        description:
          "Double layer rolled copper FPC. High light efficacy 150LM/W",
        price: 2,
      },
      {
        id: 3,
        name: "Third Device",
        img_url: "e23d43ad-4d09-4862-b910-ceb222e01775.jpg",
        description:
          "Double layer rolled copper FPC. High light efficacy 150LM/W",
        price: 2,
      },
      {
        id: 4,
        name: "Fourth Device",
        img_url: "e23d43ad-4d09-4862-b910-ceb222e01775.jpg",
        description:
          "Double layer rolled copper FPC. High light efficacy 150LM/W",
        price: 2,
      },
    ];

    this._selectedType = null
    this._selectedBrand = null

    makeAutoObservable(this);
  }
  getBrands() {
    return this._brands;
  }
  setBrands(brands: Array<Brand>|null) {
      this._brands = brands
  }
  getTypes() {
    return this._types;
  }
  setTypes(types: Array<Type>|null) {
      this._types = types
  }
  getDevices() {
    return this._devices;
  }
  setDevices(devices: Array<Device>|null) {
      this._devices = devices
  }

  setSelectedType(type: Type) {
    this._selectedType = type
  }
  getSelectedType() {
    return this._selectedType
  }
  setSelectedBrand(brand: Brand) {
    this._selectedBrand = brand
  }
  getSelectedBrand() {
    return this._selectedBrand
  }

}
