<template>
  <div>
    Films
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/films`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
