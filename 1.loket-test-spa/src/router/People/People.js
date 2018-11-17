import People from '@/views/People/People'
import PeopleIndex from '@/views/People/PeopleIndex/PeopleIndex'
import PeopleDetail from '@/views/People/PeopleDetail/PeopleDetail'

export const PeopleRender = {
  path: '/people',
  component: People,
  children: [
    {
      path: '/',
      name: 'People Index',
      component: PeopleIndex
    },
    {
      path: '/people/:id',
      name: 'People Detail',
      component: PeopleDetail
    }
  ]
}
