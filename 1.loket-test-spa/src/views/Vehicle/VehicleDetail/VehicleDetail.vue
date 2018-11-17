<template>
  <div class="container">
    <div class="box-detail">
      {{vehicle}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vehicle: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/${id}/`)
      .then(
        response => {
          this.vehicle = response
        }
      )
  }
}
</script>
