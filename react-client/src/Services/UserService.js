import * as api from './apiService.js';

const host = (api.settings.host = 'http://localhost:5000/api');

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function create(item) {
  return await api.post(host + '/users/create', item);
}

export async function edit(id, item) {
  return await api.put(host + '/users/' + id, item);
}

export async function deleteRequest(id) {
  return await api.del(host + '/users/' + id);
}

export async function getUsers() {
  return await api.get(host + '/users');
}

export async function getUserById(id) {
  return await api.get(host + '/users/' + id);
}
