<template>
  <div>
    Planets
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/planets/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
