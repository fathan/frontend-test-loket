<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{planet}}</pre>
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
