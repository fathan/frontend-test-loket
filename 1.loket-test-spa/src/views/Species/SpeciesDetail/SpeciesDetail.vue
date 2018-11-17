<template>
  <div class="container">
    <div class="box-detail">
      {{species}}
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
          this.species = response
        }
      )
  }
}
</script>
