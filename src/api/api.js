const BASE_URL = 'http://localhost:3000'

function wait (delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

function get (url) {
  const fullURL = BASE_URL + url

  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json())
}

function post (url, data) {
  const fullURL = BASE_URL + url

  return fetch(fullURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

function put (url, data) {
  const fullURL = BASE_URL + url

  return fetch(fullURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

function del (url) {
  const fullURL = BASE_URL + url

  return fetch(fullURL, {
    method: 'DELETE'
  })
}

export const getUsers = () => get('/users')

export const getUser = userId => get(`/users/${userId}`)

export const createUser = user => post('/users', user)

export const updateUser = (userId, updatedUser) =>
  put(`/users/${userId}`, updatedUser)

export const deleteUser = userId => del(`/users/${userId}`)

export const getTodos = () => get('/todos');

export const updateTodo = (todoId, updatedTodo) =>
  put(`/todos/${todoId}`, updatedTodo);

export const deleteTodo = todoId => del(`/todos/${todoId}`);