<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">Planet name: {{planet.name}}</div>
      <table class="table">
        <tr>
          <td>Rotation Period</td>
          <td>:</td>
          <td>{{planet.rotation_period}}</td>
        </tr>
        <tr>
          <td>Orbital Period</td>
          <td>:</td>
          <td>{{planet.orbital_period}}</td>
        </tr>
        <tr>
          <td>Diameter</td>
          <td>:</td>
          <td>{{planet.diameter}}</td>
        </tr>
        <tr>
          <td>Climate</td>
          <td>:</td>
          <td>{{planet.climate}}</td>
        </tr>
        <tr>
          <td>Gravity</td>
          <td>:</td>
          <td>{{planet.gravity}}</td>
        </tr>
        <tr>
          <td>Terrain</td>
          <td>:</td>
          <td>{{planet.terrain}}</td>
        </tr>
        <tr>
          <td>Surface Water</td>
          <td>:</td>
          <td>{{planet.surface_water}}</td>
        </tr>
        <tr>
          <td>Population</td>
          <td>:</td>
          <td>{{planet.population}}</td>
        </tr>
        <tr>
          <td>Related Residents</td>
          <td>:</td>
          <td>
            <span
              v-for="(data, index) in planet.residents"
              :key="index"
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
              v-for="(data, index) in planet.films"
              :key="index"
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
      planet: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.planet = xhrRes

          // CUSTOM RESIDENTS
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.residents)
          this.planet.residents = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.planet.films = arrayFilm
        }
      )
  }
}
</script>
