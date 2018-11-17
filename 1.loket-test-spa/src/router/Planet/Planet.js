import Planet from '@/views/Planet/Planet'
import PlanetIndex from '@/views/Planet/PlanetIndex/PlanetIndex'
import PlanetDetail from '@/views/Planet/PlanetDetail/PlanetDetail'

export const PlanetRender = {
  path: '/planet',
  component: Planet,
  children: [
    {
      path: '/',
      name: 'Planet Index',
      component: PlanetIndex
    },
    {
      path: '/planet/:id',
      name: 'Planet Detail',
      component: PlanetDetail
    }
  ]
}
