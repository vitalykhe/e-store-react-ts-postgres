import { $noAuthHost } from "./index";
import { Type, Brand, Device, DevicesAPIResponse } from "../utils/types";

export const createType = async (type: Type) => {
  const response = await $noAuthHost.post("api/type", type);
  const data = response.data as Type;
  //Need type
  return data;
};

export const fetchTypes = async () => {
  const response = await $noAuthHost.get("api/type");
  const data = response.data as Type[];
  if (Array.isArray(data))
    return data;
  else {
    console.error("recieved not array of type from server");
    console.log(data);
    return [];
  }
};

export const createBrand = async (brand: Brand) => {
  const response = await $noAuthHost.post("api/brand", brand);
  const data = response.data as Brand;
  return data;
};

export const fetchBrands = async () => {
  const response = await $noAuthHost.get("api/brand");
  const data = response.data as Brand[];
  if (Array.isArray(data))
    //Need type
    return data;
  else {
    console.error("recieved not array of brand from server");
    console.log(data);
    return [];
  }
};

export const createDevice = async (device: Device) => {
  const response = await $noAuthHost.post("api/device", device);
  const data = response.data as Device[];
  if (Array.isArray(data))
    //Need type
    return data;
  else {
    console.error("recieved not array of device from server");
    console.log(data);
    return [];
  }
};

export const fetchDevices = async () => {
  const response = await $noAuthHost.get("api/device");
  const data = response.data as DevicesAPIResponse;
  if (Array.isArray(data.rows))
    //Need typedevice
    return data.rows;
  else {
    console.error("recieved not array of device from server");
    console.log(data);
    return [];
  }
};

export const fetchDevice = async (id: number) => {
  const response = await $noAuthHost.get("api/device/" + id);
  const data = response.data as Device;
  return data
};
