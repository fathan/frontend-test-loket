<template>
  <div class="container">
    <loket-lists
      :list-data="starships"
      category="Starship"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      starships: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/`)
      .then(
        response => {
          this.starships = response.results
        }
      )
  }
}
</script>
