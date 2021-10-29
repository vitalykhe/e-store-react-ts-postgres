import { $noAuthHost } from "./index";
import {Type, Brand} from '../utils/types'


export const createType = async (type: Type) => {
  const response = await $noAuthHost.post("api/type", type)
  const data = response.data as Type
  //Need type
  return data
};

export const fetchTypes = async () => {
    const response = await $noAuthHost.get("api/type")
    const data = response.data as Type[]
    return data
};

export const createBrand = async (brand: Brand) => {
  const response = await $noAuthHost.post("api/brand", brand)
  const data = response.data as Brand[]
  if(Array.isArray(data))
  //Need type
    return data
  else {
    console.error('recieved not array of type from server')
    console.log(data);
    return []
  }
};

export const fetchBrands = async () => {
    const response = await $noAuthHost.get("api/brand")
    const data = response.data as Brand[]
    if(Array.isArray(data))
  //Need type
    return data
  else {
    console.error('recieved not array of brand from server')
    console.log(data);
    return []
  }
};

