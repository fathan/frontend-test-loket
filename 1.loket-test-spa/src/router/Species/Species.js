import Species from '@/views/Species/Species'
import SpeciesIndex from '@/views/Species/SpeciesIndex/SpeciesIndex'
import SpeciesDetail from '@/views/Species/SpeciesDetail/SpeciesDetail'

export const SpeciesRender = {
  path: '/species',
  component: Species,
  children: [
    {
      path: '/',
      name: 'Species Index',
      component: SpeciesIndex
    },
    {
      path: '/species/:id',
      name: 'Species Detail',
      component: SpeciesDetail
    }
  ]
}
