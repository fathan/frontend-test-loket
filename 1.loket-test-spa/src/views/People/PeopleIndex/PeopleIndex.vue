<template>
  <div class="container">
    <loket-lists
      :list-data="peoples"
      @handle-search="handleSearch"
      category="People"
    >
    </loket-lists>
  </div>
</template>

<script>
export default {
  data () {
    return {
      peoples: []
    }
  },
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/`)
      .then(
        response => {
          this.peoples = response.results
        }
      )
  },
  methods: {
    handleSearch (data) {
      this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/?search=${data.valueSearch}`)
        .then(
          response => {
            this.peoples = response.results
          }
        )
    }
  }
}
</script>
