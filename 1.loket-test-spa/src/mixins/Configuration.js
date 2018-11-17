export default {
  data () {
    return {
      api_url: 'https://swapi.co/api'
    }
  },
  methods: {
    urlApi () {
      return this.api_url
    },
    getIdOnUrlString (dataUrl, dataCategory) {
      let urlString = dataUrl
      let url = new URL(urlString)
      let pathName = url.pathname
      
      let number
      if (dataCategory === 'Film') { number = pathName.replace('/api/films/', '') }
      if (dataCategory === 'People') { number = pathName.replace('/api/people/', '') }
      if (dataCategory === 'Planet') { number = pathName.replace('/api/planets/', '') }
      if (dataCategory === 'Species') { number = pathName.replace('/api/species/', '') }
      if (dataCategory === 'Starship') { number = pathName.replace('/api/starships/', '') }
      if (dataCategory === 'Vehicle') { number = pathName.replace('/api/vehicles/', '') }
      
      let id = number.replace('/', '')
      return id
    },
    getDataFromListUrlFilm (data) {
      let arrayFilm = []
      let xhrFilms = data
      for (let i = 0; i < xhrFilms.length; i++) {
        let id = this.getIdOnUrlString(xhrFilms[i], 'Film')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films/${id}/`)
          .then(
            response => {
              arrayFilm.push(response)
            }
          )
      }
      return arrayFilm
    },
    getDataFromListUrlPeople (data) {
      let arrayPeople = []
      let xhrPeople = data
      for (let i = 0; i < xhrPeople.length; i++) {
        let id = this.getIdOnUrlString(xhrPeople[i], 'People')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/${id}/`)
          .then(
            response => {
              arrayPeople.push(response)
            }
          )
      }
      return arrayPeople
    },
    getDataFromListUrlPlanets (data) {
      let arrayPlanet = []
      let xhrPlanet = data
      for (let i = 0; i < xhrPlanet.length; i++) {
        let id = this.getIdOnUrlString(xhrPlanet[i], 'Planet')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/${id}/`)
          .then(
            response => {
              arrayPlanet.push(response)
            }
          )
      }
      return arrayPlanet
    },
    getDataFromListUrlSpecies (data) {
      let arraySpecies = []
      let xhrSpecies = data
      for (let i = 0; i < xhrSpecies.length; i++) {
        let id = this.getIdOnUrlString(xhrSpecies[i], 'Species')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/${id}/`)
          .then(
            response => {
              arraySpecies.push(response)
            }
          )
      }
      return arraySpecies
    },
    getDataFromListUrlVehicle (data) {
      let arrayVehicle = []
      let xhrVehicles = data
      for (let i = 0; i < xhrVehicles.length; i++) {
        let id = this.getIdOnUrlString(xhrVehicles[i], 'Vehicle')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/${id}/`)
          .then(
            response => {
              arrayVehicle.push(response)
            }
          )
      }
      return arrayVehicle
    },
    getDataFromListUrlStarships (data) {
      let arrayStarships = []
      let xhrStarships = data
      for (let i = 0; i < xhrStarships.length; i++) {
        let id = this.getIdOnUrlString(xhrStarships[i], 'Starship')
        this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/${id}/`)
          .then(
            response => {
              arrayStarships.push(response)
            }
          )
      }
      return arrayStarships
    }
  }
}