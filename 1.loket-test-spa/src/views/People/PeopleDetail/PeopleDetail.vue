<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">People Name: {{people.name}}</div>
      <table class="table">
        <tr>
          <td>Birth Year</td>
          <td>:</td>
          <td>{{people.birth_year}}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>:</td>
          <td>{{people.height}}</td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>:</td>
          <td>{{people.mass}}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>:</td>
          <td>{{people.gender}}</td>
        </tr>
        <tr>
          <td>Hair</td>
          <td>:</td>
          <td>{{people.hair_color}}</td>
        </tr>
        <tr>
          <td>Skin Color</td>
          <td>:</td>
          <td>{{people.skin_color}}</td>
        </tr>
        <tr>
          <td>Home World</td>
          <td>:</td>
          <td>{{people.homeworld}}</td>
        </tr>
        <tr>
          <td>Related Vehicles</td>
          <td>:</td>
          <td>
            <span
              v-for="data in people.vehicles"
              :key="data"
            >
              {{data.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Starships</td>
          <td>:</td>
          <td>
            <span
              v-for="data in people.starships"
              :key="data"
            >
              {{data.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Films</td>
          <td>:</td>
          <td>
            <span
              v-for="data in people.films"
              :key="data"
            >
              {{data.title}},&nbsp;
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
