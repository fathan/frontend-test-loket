<template>
  <div class="container">
    <loket-lists
      :list-data="vehicles"
      @handle-search="handleSearch"
      category="Vehicle"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vehicles: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/`)
      .then(
        response => {
          this.vehicles = response.results
        }
      )
  },
  methods: {
    handleSearch (data) {
      this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/?search=${data.valueSearch}`)
        .then(
          response => {
            this.vehicles = response.results
          }
        )
    }
  }
}
</script>
