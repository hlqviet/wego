import { Promotion } from '@/src/common/enums'

export default interface Food {
  id: number
  index: number
  rating: number
  promotion: Promotion | null
  isNew: boolean
  categoryId: string
  minCookTime: number
  maxCookTime: number
  restaurant: string
  name: string
  imageUrl: string
}
