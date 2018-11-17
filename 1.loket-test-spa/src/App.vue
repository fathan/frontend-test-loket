<template>
  <div class="loket-starwars-wrapper">
    <router-link :to="'/'">
      <div class="logo--top">
        <img alt="Starwars" src="./assets/logo-starwars.jpg">
      </div>
    </router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/scss/application.scss'
</style>
