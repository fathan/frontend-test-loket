<template>
  <div>
    Species
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
