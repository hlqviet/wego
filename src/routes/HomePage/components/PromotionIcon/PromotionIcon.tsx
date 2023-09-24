import { Promotion } from '@/src/common/enums'
import GiftIcon from '@/src/components/Icons/GiftIcon'
import PercentIcon from '@/src/components/Icons/PercentIcon'
import PlusIcon from '@/src/components/Icons/PlusIcon'

const getIcon = (promotion: Promotion | null) => {
  switch (promotion) {
    case Promotion.Discount:
      return (
        <PercentIcon
          className='rounded-tl-lg rounded-br-lg'
          width={30}
          height={30}
        />
      )
    case Promotion.Gift:
      return (
        <GiftIcon
          className='rounded-tl-lg rounded-br-lg'
          width={30}
          height={30}
        />
      )
    case Promotion.PlusOne:
      return (
        <PlusIcon
          className='rounded-tl-lg rounded-br-lg'
          width={30}
          height={30}
        />
      )
    default:
  }
}

interface PromotionIconProps {
  promotion: Promotion | null
}

const PromotionIcon = (props: PromotionIconProps) => {
  const { promotion } = props

  return <div className='absolute left-0 top-0'>{getIcon(promotion)}</div>
}

export default PromotionIcon
