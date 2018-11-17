<template>
  <div class="container">
    <loket-lists
      :list-data="planets"
      category="Planet"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      planets: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/`)
      .then(
        response => {
          this.planets = response.results
        }
      )
  }
}
</script>
