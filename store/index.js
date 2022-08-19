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
    const response = await axios.delete('https://run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f')
  },
  
  
}

