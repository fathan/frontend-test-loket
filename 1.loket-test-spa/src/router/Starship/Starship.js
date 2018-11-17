import Starship from '@/views/Starship/Starship'
import StarshipIndex from '@/views/Starship/StarshipIndex/StarshipIndex'
import StarshipDetail from '@/views/Starship/StarshipDetail/StarshipDetail'

export const StarshipRender = {
  path: '/starship',
  name: 'Starship',
  component: Starship,
  children: [
    {
      path: '/',
      name: 'Starship Index',
      component: StarshipIndex
    },
    {
      path: '/starship/:id',
      name: 'Starship Detail',
      component: StarshipDetail
    }
  ]
}
