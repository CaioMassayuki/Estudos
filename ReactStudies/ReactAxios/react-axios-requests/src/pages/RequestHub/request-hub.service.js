import { request } from '../config/http-requests'

// POST - Request na Auth que retorna o Token
<<<<<<< HEAD
export const getAccessToken = async (username, password) => {
  return await request({
    url: `http://10.0.5.178:8762/auth`,
    method: 'post',
    data: {
      username,
      password,
    },
  })
=======
export const handlePost = async (event, setHeader) => {
  const response = await request({
    url: `http://10.0.5.178:8762/auth`,
    method: 'post',
    data: {
      username: 'admin',
      password: 'admin',
    },
  })
  setHeader(response.headers.authorization)
>>>>>>> 7563e51317d232ec1513c78dbc8541403ad5a871
}

// GET - Request na Kirby para retornar arvore de diretorios do usuario(token)
export const handleGet = async (event, header, setPaths) => {
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/tree`,
    method: 'get',
    headers: { Authorization: header },
  })
  setPaths(response.data)
}

// GET - Request na Kirby para retornar o diretório/arquivo por queryString do usuario(token)
export const handleGetPath = async (event, header, path, setResponseNote) => {
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/note?path=${path}`,
    method: 'get',
    headers: { Authorization: header },
  })
  setResponseNote(response.data.content)
}

// POST - Request para criar/mudar um diretório/arquivo do usuario(token)
export const handlePostNote = async (event, header, note, directory) => {
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/note`,
    method: 'post',
    headers: { Authorization: header },
    data: {
      path: directory,
      content: note,
    },
  })
}