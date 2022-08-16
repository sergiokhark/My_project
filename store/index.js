export const state = () => ({
  users: []
})

export const getters = {
  allUsers: state => state.users
}

export const mutations = {
  SET_USERS: (state, users) => state.users = users
}

export const actions = {
  async getUsers(ctx) {
    const res = await fetch('https://run.mocky.io/v3/f2c2e2f8-0de4-446d-af5d-52895b8064f9')
    const users = await res.json()
    ctx.commit('SET_USERS', users)
  }
}