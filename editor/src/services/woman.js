import axios from 'axios';

const baseURL =  `${process.env.REACT_APP_SERVER_ENDOPOINT}/api/woman`
const service = axios.create({ baseURL, withCredentials: true})

export const addWoman = async womanData => {
  await service.post('/add', womanData)
  return true
}

export const seeAllWomen = async () => {
  const { data } = await service.get('/')
  return data
}

export const seeWomanDetails = async womanId => {
  const { data } = await service.get(`/${womanId}`)
  return data
}

export const updateWoman = async (womanData, womanId) => {
  await service.put(`/update/${womanId}`, womanData)
  return true
}

export const deleteWoman = async womanId => {
  await service.delete(`/${womanId}`)
  return true
}