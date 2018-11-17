<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{people}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: {},
      films: [],
      species: [],
      vehicles: [],
      starships: []
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.people = xhrRes

          // CUSTOM FILMS
          let arrayFilm = []
          let xhrFilms = xhrRes.films
          for (let i = 0; i < xhrFilms.length; i++) {
            let id = this.getIdOnUrlString(xhrFilms[i], 'Film')
            this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films/${id}/`)
              .then(
                responseFilms => {
                  arrayFilm.push(responseFilms)
                }
              )
          }
          this.people.films = arrayFilm //Inject data to array films

          // CUSTOM SPECIES
          let arraySpecies = []
          let xhrSpecies = xhrRes.species
          for (let i = 0; i < xhrSpecies.length; i++) {
            let id = this.getIdOnUrlString(xhrSpecies[i], 'Species')
            this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/${id}/`)
              .then(
                responseSpecies => {
                  arraySpecies.push(responseSpecies)
                }
              )
          }
          this.people.species = arraySpecies //Inject data to array species

          // CUSTOM VEHICLES
          let arrayVehicle = []
          let xhrVehicles = xhrRes.vehicles
          for (let i = 0; i < xhrVehicles.length; i++) {
            let id = this.getIdOnUrlString(xhrVehicles[i], 'Vehicle')
            this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/${id}/`)
              .then(
                responseVehicles => {
                  arrayVehicle.push(responseVehicles)
                }
              )
          }
          this.people.vehicles = arrayVehicle //Inject data to array vehicles

          // CUSTOM STARSHIPS
          let arrayStarships = []
          let xhrStarships = xhrRes.starships
          for (let i = 0; i < xhrStarships.length; i++) {
            let id = this.getIdOnUrlString(xhrStarships[i], 'Starship')
            this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/${id}/`)
              .then(
                responseStarships => {
                  arrayStarships.push(responseStarships)
                }
              )
          }
          this.people.starships = arrayStarships //Inject data to array starships
        }
      )
  }
}
</script>
