import axios from 'axios'

export const actions = {
  async getUsers() {
    const res = await fetch('https://run.mocky.io/v3/804e6fd9-f63a-444e-95c1-8a4b03f0ad71')
    const users = await res.json()
    return users
  },
  async getProducts() {
    const res = await fetch('https://run.mocky.io/v3/28bbba7c-8c46-496a-9415-6b0773058e41')
    const products = await res.json()
    return products.data
  },
  async createUser() {
    await axios.post('https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914')
  },
  async deleteUser() {
    await axios.delete('https://run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f')
  },
  async updateUser() {
    await axios.put('https://run.mocky.io/v3/4d9eea3e-bee2-4531-8665-091365446530')
  },
  async createProduct() {
    await axios.post('https://run.mocky.io/v3/6dc6cba2-b891-4a48-8ba0-242c86a47ca4')
  },
  async deleteProduct() {
    await axios.post('https://run.mocky.io/v3/47672866-0a4a-4327-b90b-6cb8f3e2c528')
  },
  async updateProduct() {
    await axios.post('https://run.mocky.io/v3/6697276c-9b58-4c00-8199-5d970294b567')
  },
}

