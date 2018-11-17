<template>
  <div class="loader--page" v-if="loader">
    <div class="loader--page__box">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <div class="title">Please wait...</div>
    </div>
  </div>  
</template>

<script>
export default {
  computed: {
    loader () {
      return this.$store.getters.loader
    }
  }
}
</script>
