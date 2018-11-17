import axios from 'axios'

const state = {}
const getters = {}
const mutations = {}
const actions = {
  async getByUrlApi ({}, url) {
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return await axios.get(`${url}`, options)
      .then(
        response => {
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