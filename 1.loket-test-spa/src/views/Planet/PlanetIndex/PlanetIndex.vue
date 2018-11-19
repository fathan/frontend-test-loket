<template>
  <div class="container">
    <loket-lists
      :list-data="planets"
      @handle-search="handleSearch"
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
  },
  methods: {
    handleSearch (data) {
      this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/?search=${data.valueSearch}`)
        .then(
          response => {
            this.planets = response.results
          }
        )
    }
  }
}
</script>
