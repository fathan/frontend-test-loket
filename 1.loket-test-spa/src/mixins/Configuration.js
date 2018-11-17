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
    }
  }
}