<template>
  <div class="container">
    <div class="box-detail">
      {{film}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      film: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films/${id}/`)
      .then(
        response => {
          this.film = response
        }
      )
  }
}
</script>
