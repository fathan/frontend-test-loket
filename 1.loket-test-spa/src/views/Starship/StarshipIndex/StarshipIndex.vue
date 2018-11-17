<template>
  <div>
    Starships
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/starships/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
