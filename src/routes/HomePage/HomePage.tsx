'use client'

import { FormEventHandler, useEffect, useState } from 'react'

import Button from '@/src/components/Button'
import { Card, CardBody, CardHeading, CardImage } from '@/src/components/Card'
import SearchIcon from '@/src/components/Icons/SearchIcon'
import StarIcon from '@/src/components/Icons/StarIcon'
import Spinner from '@/src/components/Spinner'
import { Tabs } from '@/src/components/Tabs'
import Tag from '@/src/components/Tag'
import TextField from '@/src/components/TextField'
import { Text } from '@/src/components/Typography'
import Paragraph from '@/src/components/Typography/Paragraph'
import useGetCategoriesQuery from '@/src/hooks/useGetCategoriesQuery'
import useGetFoodsQuery from '@/src/hooks/useGetFoodsQuery'
import Food from '@/src/models/food'
import PromotionIcon from '@/src/routes/HomePage/components/PromotionIcon'

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [foodData, setFoodData] = useState<Food[]>([])
  const [inputValue, setInputValue] = useState('')

  const {
    data: categories,
    error: categoryError,
    loading: categoryLoading
  } = useGetCategoriesQuery()

  const {
    data: food,
    error: foodError,
    loading: foodLoading
  } = useGetFoodsQuery({
    categoryId: activeCategory || undefined,
    restaurant,
    page: currentPage
  })

  useEffect(() => {
    if (!food?.data.length) return

    setFoodData((prevState) => [...prevState, ...food.data])
  }, [food])

  const tabs =
    categories?.data.map(({ id, name }) => ({
      key: id,
      text: name,
      value: id
    })) || []

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
    setFoodData([])
  }

  const handleShowMoreClick = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (inputValue === restaurant) return

    setRestaurant(inputValue)
    setCurrentPage(1)
    setFoodData([])
  }

  if (categoryError) return <Paragraph>{categoryError.message}</Paragraph>

  if (foodError) return <Paragraph>{foodError.message}</Paragraph>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          startIcon={<SearchIcon />}
          placeholder='Enter restaurant name...'
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
      </form>

      {!categoryLoading && (
        <Tabs
          className='my-6'
          disabled={categoryLoading || foodLoading}
          activeKey={activeCategory}
          tabs={[{ key: '', text: 'All', value: '' }, ...tabs]}
          onTabClick={handleCategoryClick}
        />
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {foodData.map(
          ({
            id,
            imageUrl,
            name,
            isNew,
            promotion,
            rating,
            minCookTime,
            maxCookTime
          }) => (
            <Card key={id} className='relative cursor-pointer'>
              <CardImage src={imageUrl} />
              <CardHeading>{name}</CardHeading>
              <CardBody>
                <Tag>
                  <StarIcon width={15} height={15} className='inline mb-1' />{' '}
                  {rating.toFixed(1)}
                </Tag>{' '}
                <Tag>
                  {minCookTime}-{maxCookTime} min
                </Tag>{' '}
                {isNew && (
                  <Tag>
                    <Text className='text-green-400 md:text-sm'>New</Text>
                  </Tag>
                )}
              </CardBody>
              <PromotionIcon promotion={promotion} />
            </Card>
          )
        )}
      </div>

      {(categoryLoading || foodLoading) && (
        <div className='flex justify-center align-center my-4'>
          <Spinner />
        </div>
      )}

      {food?.pagination?.hasNextPage && (
        <div className='my-4 text-center'>
          <Button
            disabled={categoryLoading || foodLoading}
            onClick={handleShowMoreClick}
          >
            + Show More
          </Button>
        </div>
      )}
    </>
  )
}

export default HomePage
