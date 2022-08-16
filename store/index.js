export const actions = {
  async getUsers() {
    const response = await fetch('https://run.mocky.io/v3/f2c2e2f8-0de4-446d-af5d-52895b8064f9')
    const users = await response.json()
  }
}