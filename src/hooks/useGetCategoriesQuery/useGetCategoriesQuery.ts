import { Resource, ResourceAction } from '@/src/common/enums'
import useQuery from '@/src/hooks/useQuery'
import Category from '@/src/models/category'

const useGetCategoriesQuery = () => {
  const { error, data, loading } = useQuery<Category>({
    action: ResourceAction.Get,
    resource: Resource.Category
  })

  return { error, data, loading }
}

export default useGetCategoriesQuery
