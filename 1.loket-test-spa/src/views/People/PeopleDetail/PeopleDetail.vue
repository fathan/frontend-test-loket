<template>
  <div class="container">
    <div class="box-detail">
      {{people}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/${id}/`)
      .then(
        response => {
          this.people = response
        }
      )
  }
}
</script>
