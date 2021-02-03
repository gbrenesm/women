import axios from 'axios';

const baseURL =  process.env.NODE_ENV === `production`? `/api/data` : "http://localhost:3000/api/data"
const service = axios.create({ baseURL, withCredentials: true});

export const addData = async (womanId, data) => {
  await service.post(`/add/${womanId}`, data)
  return true
}

export const seeAllData = async () => {
  const { data } = await service.get('/')
  return data
}

export const seeDataDetail = async dataId => {
  const { data } = await service.get(`/${dataId}`)
  return data
}

export const updateData = async (dataId, data) => {
  await service.put(`/update/${dataId}`, data)
  return true
}

export const deleteData = async dataId => {
  await service.delete(`/delete/${dataId}`)
  return true
}