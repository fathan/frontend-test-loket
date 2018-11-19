import Film from '@/views/Film/Film'
import FilmIndex from '@/views/Film/FilmIndex/FilmIndex'
import FilmDetail from '@/views/Film/FilmDetail/FilmDetail'

export const FilmRender = {
  path: '/film',
  component: Film,
  children: [
    {
      path: '/',
      name: 'Film Index',
      component: FilmIndex,
      meta: {
        breadcrumb: 'Films'
      }
    },
    {
      path: '/film/:id',
      name: 'Film Detail',
      component: FilmDetail,
      meta: {
        breadcrumb: routeParams => `Film Detail ${routeParams.id}`
      }
    }
  ]
}