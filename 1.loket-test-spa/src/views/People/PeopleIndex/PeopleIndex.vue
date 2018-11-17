<template>
  <div>
    Peoples
  </div>
</template>

<script>
import { CONFIG } from '@/configuration'
export default {
  mounted () {
    this.$store.dispatch('getByUrlApi', `${CONFIG.API_URL}/people/`)
      .then(
        response => {
          console.log(response)
        }
      )
  }
}
</script>
