<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">Film Title: {{film.title}}</div>
      <table class="table">
        <tr>
          <td>Date Created</td>
          <td>:</td>
          <td>{{film.release_date}}</td>
        </tr>
        <tr>
          <td>Director</td>
          <td>:</td>
          <td>{{film.director}}</td>
        </tr>
        <tr>
          <td>Producer</td>
          <td>:</td>
          <td>{{film.producer}}</td>
        </tr>
        <tr>
          <td>Opening Crawl</td>
          <td>:</td>
          <td>{{film.opening_crawl}}</td>
        </tr>
        <tr>
          <td>Related Characters</td>
          <td>:</td>
          <td>
            <span
              v-for="character in film.characters"
              :key="character"
            >
              {{character.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Planets</td>
          <td>:</td>
          <td>
            <span
              v-for="planet in film.planets"
              :key="planet"
            >
              {{planet.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Vehicles</td>
          <td>:</td>
          <td>
            <span
              v-for="vehicle in film.vehicles"
              :key="vehicle"
            >
              {{vehicle.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Starships</td>
          <td>:</td>
          <td>
            <span
              v-for="startship in film.starships"
              :key="startship"
            >
              {{startship.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Species</td>
          <td>:</td>
          <td>
            <span
              v-for="species in film.species"
              :key="species"
            >
              {{species.name}},&nbsp;
            </span>
          </td>
        </tr>
      </table>
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
          this.film.planets = arrayPlanet

          // CUSTOM STARSHIPS
          let arrayStarships = this.getDataFromListUrlStarships(xhrRes.starships)
          this.film.starships = arrayStarships

          // CUSTOM VEHICLES
          let arrayVehicle = this.getDataFromListUrlVehicle(xhrRes.vehicles)
          this.film.vehicles = arrayVehicle

          // CUSTOM SPECIES
          let arraySpecies = this.getDataFromListUrlSpecies(xhrRes.species)
          this.film.species = arraySpecies
        }
      )
  }
}
</script>
