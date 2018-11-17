<template>
  <div class="container-home">
    <div class="container-home__logo-top">
      <img alt="Starwars" src="../../assets/logo-starwars.jpg">
    </div>
    <div class="container-home__title-top">
      <div v-html="'Frontend Engineer testing for apply @Loket.com - By Fathan Rohman (karir.fathan@gmail.com)'"></div>
    </div>
    <div class="container-home__list-action">
      <div
        class="listing"
        v-for="(list, index) in categories"
        :key="index"
      >
        <router-link :to="{ path: list.url }">
          <div class="listing__image">
            <img :src="list.path" :alt="list.title">
            <div class="title">{{list.title}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import People from '@/assets/people.jpg'
import Films from '@/assets/films.jpg'
import Planets from '@/assets/planets.jpg'
import Species from '@/assets/species.jpg'
import Starships from '@/assets/starships.jpg'
import Vehicles from '@/assets/vehicles.jpg'
export default {
  data () {
    return {
      lists: {},
      categories: [
        {
          title: 'People',
          path: People,
          url: '/people'
        },
        {
          title: 'Films',
          path: Films,
          url: '/film'
        },
        {
          title: 'Planets',
          path: Planets,
          url: '/planet'
        },
        {
          title: 'Species',
          path: Species,
          url: '/species'
        },
        {
          title: 'Starships',
          path: Starships,
          url: '/starship'
        },
        {
          title: 'Vehicles',
          path: Vehicles,
          url: '/vehicle'
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('getBypathApi', `${this.pathApi()}/`)
      .then(
        response => {
          this.lists = response
        }
      )
  }
}
</script>
