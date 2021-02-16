import axios from 'axios';

const baseURL =  `${process.env.REACT_APP_SERVER_ENDOPOINT}/api/record`
const service = axios.create({ baseURL, withCredentials: true})


export const addRecord = async (womanId, recordData) => {
  await service.post(`/add/${womanId}`, recordData)
  return true
}

export const updateRecord = async (recordId, recordData) => {
  await service.put(`/update/${recordId}`, recordData)
  return true
}

export const deleteRecord = async recordId => {
  await service.delete(`/${recordId}`)
  return true
}
