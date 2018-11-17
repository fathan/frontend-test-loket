<template>
  <div class="container">
    <loket-lists
      :list-data="peoples"
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
  }
}
</script>
