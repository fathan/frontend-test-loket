<template>
  <div class="container">
    <div class="box-detail">
      <pre>{{species}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      species: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.species = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.people)
          this.species.people = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.species.films = arrayFilm
        }
      )
  }
}
</script>
