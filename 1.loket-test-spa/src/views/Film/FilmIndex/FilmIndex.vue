<template>
  <div class="container">
    <loket-lists
      :list-data="films"
      category="Film"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      films: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films`)
      .then(
        response => {
          this.films = response.results
        }
      )
  }
}
</script>
