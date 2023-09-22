import { useMemo } from 'react'

import { Resource, ResourceAction } from '@/src/common/enums'
import useQuery from '@/src/hooks/useQuery'
import Food from '@/src/models/food'

interface UseGetFoodsQueryProps {
  categoryId?: number
  restaurant?: string
  page?: number
}

const useGetFoodsQuery = (props: UseGetFoodsQueryProps = {}) => {
  const { categoryId, restaurant, page } = props

  const query = useMemo(
    () => ({
      filters: {
        categoryId
      },
      terms: {
        restaurant
      },
      page
    }),
    [categoryId, page, restaurant]
  )

  const { error, data, loading } = useQuery<Food>({
    action: ResourceAction.Get,
    resource: Resource.Food,
    query
  })

  return { error, data, loading }
}

export default useGetFoodsQuery
