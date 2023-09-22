import { NextResponse } from 'next/server'

import { API_HOST } from '@/src/common/constants'
import Category from '@/src/models/category'

export async function GET() {
  const response = await fetch(
    `${API_HOST}/f25ced0a-9ff7-4996-bdc7-430f281c48db`
  )
  const data = (await response.json()) as Category[]

  return NextResponse.json(data)
}
