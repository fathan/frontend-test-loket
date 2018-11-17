import Vehicle from '@/views/Vehicle/Vehicle'
import VehicleIndex from '@/views/Vehicle/VehicleIndex/VehicleIndex'
import VehicleDetail from '@/views/Vehicle/VehicleDetail/VehicleDetail'

export const VehicleRender = {
  path: '/vehicle',
  component: Vehicle,
  children: [
    {
      path: '/',
      name: 'Vehicle Index',
      component: VehicleIndex
    },
    {
      path: '/vehicle/:id',
      name: 'Vehicle Detail',
      component: VehicleDetail
    }
  ]
}
