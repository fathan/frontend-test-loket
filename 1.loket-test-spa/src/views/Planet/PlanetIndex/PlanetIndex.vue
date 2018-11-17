<template>
  <div>
    Planets
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/planets/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
