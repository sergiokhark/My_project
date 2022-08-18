import axios from 'axios'

export const actions = {
  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await response.json()
    return users
  },
  async createUser() {
    const response = await axios.post('https://run.mocky.io/v3/a366bb9a-819d-4fe0-8447-87eb3b526e76')
  },
  async deleteUser() {
    const response = await axios.delete('https://1run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f')
  },
  //async editUser() {
  //  const response = await axios.put('https://run.mocky.io/v3/20a1ce0f-bbf0-4ee2-88d5-8dbb4a78f166')
  //}
  
}

