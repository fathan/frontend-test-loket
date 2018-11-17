import axios from 'axios'

const state = {
  loader: false
}

const getters = {
  loader: state => { return state.loader }
}

const mutations = {
  'LOADER' (state, data) {
    state.loader = data
  }
}

const actions = {
  async getByUrlApi ({commit}, url) {
    commit('LOADER', true)
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return await axios.get(`${url}`, options)
      .then(
        response => {
          commit('LOADER', false)
          return response.data
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}