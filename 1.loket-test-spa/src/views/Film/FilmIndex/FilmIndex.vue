<template>
  <div>
    Films
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/films`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
