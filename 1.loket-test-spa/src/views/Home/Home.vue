<template>
  <div class="container-home">
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
import People from '@/assets/categories/people.jpg'
import Films from '@/assets/categories/films.jpg'
import Planets from '@/assets/categories/planets.jpg'
import Species from '@/assets/categories/species.jpg'
import Starships from '@/assets/categories/starships.jpg'
import Vehicles from '@/assets/categories/vehicles.jpg'
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
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/`)
      .then(
        response => {
          this.lists = response
        }
      )
  }
}
</script>
