import { handleResponse, handleError} from './apiUtils'
const baseUrl = 'http://127.0.0.1:8000/api'
const token = localStorage.getItem('token')

export const postsPerPage = 10
export const randomColor = Math.floor(
  Math.random()*16777215).toString(16)

export function saveUser(user) {
  const body = new FormData()
  body.append('name', user.firstName)
  body.append('surname', user.lastName)
  body.append('email', user.email)
  body.append('password', user.password)

  return fetch(baseUrl + "/register", {
    method: "POST", // POST for create, PUT to update when id already exists.
    body: body
  })
    .then(handleResponse)
    .catch(handleError);
}

export function login(user) {
  const body = new FormData()
  body.append('email', user.email)
  body.append('password', user.password)
  return fetch(baseUrl + "/login", {
    method: "POST", // POST for create, PUT to update when id already exists.
    body: body
  })
    .then(handleResponse)
    .catch(handleError);
}

export function sendForgotPassword(user) {
  const body = new FormData()
  body.append('email', user.email)
  return fetch(baseUrl + "/forgot-password", {
    method: "POST", // POST for create, PUT to update when id already exists.
    body: body
  })
    .then(handleResponse)
    .catch(handleError);
}

export function verify_token(reset_token) {
  const body = new FormData()
  body.append('reset_token', reset_token)
  return fetch(baseUrl + "/verify-token", {
    method: "POST", // POST for create, PUT to update when id already exists.
    body: body
  })
    .then(handleResponse)
    .catch(handleError);
}

export function reset_password(user, reset_token) {
  const body = new FormData()
  console.log(user)
  body.append('new_password', user.new_password)
  body.append('confirm_password', user.confirm_password)

  return fetch(baseUrl + "/reset-password/" + reset_token, {
    method: "POST",
    body: body
  })
  .then(handleResponse)
  .catch(handleError)
}

export function get_messages() {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/messages`, {
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError)
}

export function logout() {
  return fetch(`${baseUrl}/logout`, {
    headers: {'Authorization': `token ${token}`}
  })
    .then(handleResponse)
    .catch(handleError)
}

export function detail_message(m_id) {
  return fetch(`${baseUrl}/messages/${m_id}`, {
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError)
}

export function post_message(data) {
  const body = new FormData()
  body.append('num_recepteur', data.numRecepteur)
  body.append('num_emetteur', data.numEmetteur)
  body.append('nom_emetteur', data.nomEmetteur)
  body.append('installation', data.installation)
  body.append('message', data.message)
  return fetch(baseUrl + "/message", {
    method: "POST",
    body: body,
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function put_message(data, m_id) {
  const body = new FormData()
  console.log(data)
  body.append('num_recepteur', data.numRecepteur)
  body.append('num_emetteur', data.numEmetteur)
  body.append('nom_emetteur', data.nomEmetteur)
  body.append('installation', data.installation)
  body.append('message', data.message)
  return fetch(`${baseUrl}/messages/${m_id}`, {
    method: "PUT",
    body: body,
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function delete_message(m_id) {
  return fetch(`${baseUrl}/messages/${m_id}`, {
    method: "DELETE",
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function get_info_recepteur() {
  return fetch(`${baseUrl}/accounts/me`, {
    method: "GET",
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function put_recepteur(data) {
  const body = new FormData()
  console.log(data)
  body.append('nom', data.nomUser)
  body.append('prenom', data.prenomUser)
  body.append('phone', data.phoneUser)
  return fetch(`${baseUrl}/accounts/change`, {
    method: "PUT",
    body: body,
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function export_message(dates) {
  const body = new FormData()
  body.append('date_debut', dates.debut)
  body.append('date_fin', dates.fin)
  return fetch(`${baseUrl}/messages/export`, {
    method: "PUT",
    body: body,
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}

export function get_messages_solr(keyword) {
  return fetch(`${baseUrl}/reports/?text=${keyword}`, {
    method: "GET",
    headers: {'Authorization': `token ${token}`}
  })
  .then(handleResponse)
  .catch(handleError) 
}