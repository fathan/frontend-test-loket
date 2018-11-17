<template>
  <div>
    Vehicles
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
