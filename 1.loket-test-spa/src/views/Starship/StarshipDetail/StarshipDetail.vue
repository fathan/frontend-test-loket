<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{starship}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      starship: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.starship = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.pilots)
          this.starship.pilots = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.starship.films = arrayFilm
        }
      )
  }
}
</script>
