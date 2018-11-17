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
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.people.films = arrayFilm

          // CUSTOM SPECIES
          let arraySpecies = this.getDataFromListUrlSpecies(xhrRes.species)
          this.people.species = arraySpecies

          // CUSTOM VEHICLES
          let arrayVehicle = this.getDataFromListUrlVehicle(xhrRes.vehicles)
          this.people.vehicles = arrayVehicle

          // CUSTOM STARSHIPS
          let arrayStarships = this.getDataFromListUrlStarships(xhrRes.starships)
          this.people.starships = arrayStarships
        }
      )
  }
}
</script>
