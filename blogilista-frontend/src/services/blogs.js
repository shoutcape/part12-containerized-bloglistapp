import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getComments = async blogId => {
  const response = await axios.get(`${baseUrl}/${blogId}/comments`)
  return response.data
}

const createComment = async (data) => {
  const response = await axios.post(`${baseUrl}/${data.id}/comments`, {comment: data.comment})
  return response.data
}

const put = async updatedObject => {
  const config = {
    headers : { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject, config)
  return response.data
}

const deleteBlog = async (id) => {
  const config = {
    headers : { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

export default { getAll, getComments, createComment, setToken, create, put, deleteBlog }



