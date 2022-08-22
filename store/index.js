import axios from 'axios'

export const actions = {
  async getUsers() {
    const res = await fetch('https://run.mocky.io/v3/804e6fd9-f63a-444e-95c1-8a4b03f0ad71')
    const users = await res.json()
    return users
  },
  async createUser() {
    const res = await axios.post('https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914')
  },
  async deleteUser() {
    const res = await axios.delete('https://run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f')
  },
  async updateUser() {
    const res = await axios.put('https://run.mocky.io/v3/4d9eea3e-bee2-4531-8665-091365446530')
  }
}

