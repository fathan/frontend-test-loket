<template>
  <div class="container">
    <div class="box-detail">
      {{planet}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      planet: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/${id}/`)
      .then(
        response => {
          this.planet = response
        }
      )
  }
}
</script>
