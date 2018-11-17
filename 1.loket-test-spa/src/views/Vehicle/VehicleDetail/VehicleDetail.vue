<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{vehicle}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vehicle: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.vehicle = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.pilots)
          this.vehicle.pilots = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.vehicle.films = arrayFilm
        }
      )
  }
}
</script>
