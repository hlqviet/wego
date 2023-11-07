import { NextRequest, NextResponse } from 'next/server'

import { ITEMS_PER_PAGE } from '@/src/common/constants'
import { deserializeRequest, filterData } from '@/src/common/helpers'
import food from '@/src/data/food.json'
import Food from '@/src/models/food'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1
  const { filters, terms } = deserializeRequest(request, ['filters', 'terms'])
  const data = food as Food[]
  const filteredData = filterData({
    data,
    filters,
    terms: terms as Record<string, string>
  })
  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(from, to)
  const pagination = {
    pageNumber: page,
    hasNextPage: filteredData[to + 1] !== undefined
  }

  return NextResponse.json({ data: paginatedData, pagination })
}
