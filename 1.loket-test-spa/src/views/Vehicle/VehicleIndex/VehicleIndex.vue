<template>
  <div>
    Vehicles
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/vehicles/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
