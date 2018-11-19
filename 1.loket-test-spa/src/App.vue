<template>
  <div class="loket-starwars-wrapper">
    <router-link :to="'/'">
      <div class="logo--top">
        <img :src="require('@/assets/logo-starwars.jpg')" alt="">
      </div>
    </router-link>
    <router-view/>
    <div class="footer--bottom">
      <div v-html="`Frontend Engineer testing for apply <a href='http://loket.com' target='_blank'>@Loket.com</a> - By Fathan Rohman (karir.fathan@gmail.com)`"></div>
    </div>
    <loader></loader>
  </div>
</template>

<style lang="scss">
@import '@/scss/application.scss'
</style>
