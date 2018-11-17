<template>
  <div>
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    Home
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
