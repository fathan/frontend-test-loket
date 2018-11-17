<template>
  <div>
    Starships
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
