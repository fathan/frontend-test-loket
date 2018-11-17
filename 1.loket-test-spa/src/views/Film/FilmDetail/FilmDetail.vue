<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{film}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      film: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.film = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.characters)
          this.film.characters = arrayPeople

          // CUSTOM PLANETS
          let arrayPlanet = this.getDataFromListUrlPlanets(xhrRes.planets)
          this.film.characters = arrayPlanet

          // CUSTOM STARSHIPS
          let arrayStarships = this.getDataFromListUrlStarships(xhrRes.starships)
          this.film.starships = arrayStarships

          // CUSTOM VEHICLES
          let arrayVehicle = this.getDataFromListUrlVehicle(xhrRes.vehicles)
          this.film.vehicles = arrayVehicle

          // CUSTOM SPECIES
          let arraySpecies = this.getDataFromListUrlSpecies(xhrRes.species)
          this.film.vehicles = arraySpecies
        }
      )
  }
}
</script>
