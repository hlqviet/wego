import { describe } from 'node:test'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import useGetCategoriesQuery from '@/src/hooks/useGetCategoriesQuery'
import useGetFoodsQuery from '@/src/hooks/useGetFoodsQuery'
import HomePage from '@/src/routes/HomePage/HomePage'

jest
  .mock('@/src/hooks/useGetCategoriesQuery')
  .mock('@/src/hooks/useGetFoodsQuery')

describe(HomePage.name, () => {
  const categories = [
    {
      id: '6288a89f1f0152b8c2cd512b',
      name: 'Sushi'
    },
    {
      id: '6288a89f7338764f2071a8a8',
      name: 'Pizza'
    },
    {
      id: '6288a89f70dc8cf93b71609b',
      name: 'Hot Meals'
    },
    {
      id: '6288a89fe6c2fe0b758360fe',
      name: 'Desserts'
    },
    {
      id: '6288a89fac9e970731bfaa7b',
      name: 'Drinks'
    }
  ]
  const food = [
    {
      id: '628b5decc94a27754f30e6f1',
      index: 0,
      rating: 3.9508,
      promotion: 'gift',
      isNew: false,
      categoryId: '6288a89fac9e970731bfaa7b',
      minCookTime: 80,
      maxCookTime: 100,
      restaurant: 'Niquent',
      name: 'Niquent Drinks',
      imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
    },
    {
      id: '628b5decf39bcc4e982fc88a',
      index: 1,
      rating: 4.9874,
      promotion: '1+1',
      isNew: false,
      categoryId: '6288a89f1f0152b8c2cd512b',
      minCookTime: 120,
      maxCookTime: 140,
      restaurant: 'Boilicon',
      name: 'Boilicon Sushi',
      imageUrl: 'https://source.unsplash.com/random/400x400?Sushi'
    },
    {
      id: '628b5dec6678e96d75f2f7de',
      index: 2,
      rating: 3.4518,
      promotion: null,
      isNew: true,
      categoryId: '6288a89f1f0152b8c2cd512b',
      minCookTime: 100,
      maxCookTime: 120,
      restaurant: 'Quinex',
      name: 'Quinex Sushi',
      imageUrl: 'https://source.unsplash.com/random/400x400?Sushi'
    },
    {
      id: '628b5dec97eacf5e8a604bd7',
      index: 3,
      rating: 1.5975,
      promotion: 'gift',
      isNew: false,
      categoryId: '6288a89f7338764f2071a8a8',
      minCookTime: 120,
      maxCookTime: 140,
      restaurant: 'Perkle',
      name: 'Perkle Pizza',
      imageUrl: 'https://source.unsplash.com/random/400x400?Pizza'
    },
    {
      id: '628b5decf99b6a8dc80af3b6',
      index: 4,
      rating: 0.8644,
      promotion: null,
      isNew: true,
      categoryId: '6288a89fac9e970731bfaa7b',
      minCookTime: 70,
      maxCookTime: 90,
      restaurant: 'Zanymax',
      name: 'Zanymax Drinks',
      imageUrl: 'https://source.unsplash.com/random/400x400?Drinks'
    }
  ]

  it('should display an error when it fails to retrieve categories', () => {
    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      error: new Error('category error'),
      data: { data: [] },
      loading: false
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({ data: { data: [] } })

    render(<HomePage />)

    expect(screen.getByText('category error')).toBeInTheDocument()
  })

  it('should display an error when it fails to retrieve food', () => {
    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { data: [] }
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      error: new Error('food error'),
      data: { data: [] }
    })

    render(<HomePage />)

    expect(screen.getByText('food error')).toBeInTheDocument()
  })

  it('should display a spinner when categories or food are still being retrieved', () => {
    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { data: [] },
      loading: true
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      data: { data: [] },
      loading: true
    })

    render(<HomePage />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should render food correctly', () => {
    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({})
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      data: { data: food }
    })

    render(<HomePage />)

    for (const { name } of food) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('should call useGetFoodsQuery with correct category when one is clicked', async () => {
    const user = userEvent.setup()

    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { data: categories }
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      data: { data: [] }
    })

    render(<HomePage />)

    await user.click(screen.getByText('Sushi'))

    expect(useGetFoodsQuery).toHaveBeenCalledWith({
      categoryId: '6288a89f1f0152b8c2cd512b',
      page: 1,
      restaurant: ''
    })
  })

  it('should call useGetFoodsQuery with correct page when Show More button is clicked', async () => {
    const user = userEvent.setup()

    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { data: [] }
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      data: { data: [], pagination: { hasNextPage: true } }
    })

    render(<HomePage />)

    await user.click(screen.getByRole('button', { name: '+ Show More' }))

    expect(useGetFoodsQuery).toHaveBeenCalledWith({
      categoryId: undefined,
      page: 2,
      restaurant: ''
    })
  })

  it('should call useGetFoodsQuery with correct restaurant when one is entered', async () => {
    const user = userEvent.setup()

    ;(useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { data: [] }
    })
    ;(useGetFoodsQuery as jest.Mock).mockReturnValue({
      data: { data: [], pagination: { hasNextPage: true } }
    })

    render(<HomePage />)

    await user.type(screen.getByRole('textbox'), 'ex')
    await user.keyboard('{Enter}')

    expect(useGetFoodsQuery).toHaveBeenCalledWith({
      categoryId: undefined,
      page: 1,
      restaurant: 'ex'
    })
  })
})
