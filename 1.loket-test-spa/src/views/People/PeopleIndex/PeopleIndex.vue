<template>
  <div>
    Peoples
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/people/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
