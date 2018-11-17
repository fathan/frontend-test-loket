<template>
  <div>
    Species
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/species/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
