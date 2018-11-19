<template>
  <div class="container">
    <loket-lists
      :list-data="species"
      @handle-search="handleSearch"
      category="Species"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      species: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/`)
      .then(
        response => {
          this.species = response.results
        }
      )
  },
  methods: {
    handleSearch (data) {
      this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/?search=${data.valueSearch}`)
        .then(
          response => {
            this.species = response.results
          }
        )
    }
  }
}
</script>
