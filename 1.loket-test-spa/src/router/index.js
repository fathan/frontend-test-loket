import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'

import { FilmRender } from './Film/Film'
import { PeopleRender } from './People/People'
import { PlanetRender } from './Planet/Planet'
import { SpeciesRender } from './Species/Species'
import { StarshipRender } from './Starship/Starship'
import { VehicleRender } from './Vehicle/Vehicle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    FilmRender,
    PeopleRender,
    PlanetRender,
    SpeciesRender,
    StarshipRender,
    VehicleRender,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
