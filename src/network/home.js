import {$http} from './http'

export function getHomeMultiData() {
  return $http({
    url: '/home/multidata'
  })
}