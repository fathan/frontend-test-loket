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
      component: FilmIndex
    },
    {
      path: '/film/:id',
      name: 'Film Detail',
      component: FilmDetail
    }
  ]
}