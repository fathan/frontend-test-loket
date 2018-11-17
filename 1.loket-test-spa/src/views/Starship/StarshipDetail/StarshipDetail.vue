<template>
  <div class="container">
    <div class="box-detail">
      {{starship}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      starship: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/${id}/`)
      .then(
        response => {
          this.starship = response
        }
      )
  }
}
</script>
