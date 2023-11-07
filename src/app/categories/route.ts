import { NextResponse } from 'next/server'

import categories from '@/src/data/categories.json'
import Category from '@/src/models/category'

export async function GET() {
  const data = categories as Category[]

  return NextResponse.json({ data })
}
