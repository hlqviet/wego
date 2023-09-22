import { NextRequest } from 'next/server'

export const deserializeRequest = <K extends string>(
  request: NextRequest,
  properties: K[]
) => {
  const { searchParams } = new URL(request.url)

  return properties.reduce(
    (previous, current) => ({
      ...previous,
      [current]: JSON.parse(searchParams.get(current) || '{}')
    }),
    {} as Record<K, Record<string, string | number | boolean>>
  )
}

export const filterData = <T extends any>(params: {
  data: T[]
  filters: Record<string, string | number | boolean>
  terms: Record<string, string>
}) => {
  const { data, filters, terms } = params

  if (!Object.keys(filters).length && !Object.keys(terms).length) return data

  return data.filter((item) => {
    const matchesFilters = Object.entries(filters).every(
      ([key, value]) => item[key as keyof typeof item] === value
    )

    if (!matchesFilters) return false

    const matchesTerms = Object.entries(terms).every(([key, value]) =>
      (item[key as keyof typeof item] as string)
        .toLowerCase()
        .includes(value.toLowerCase())
    )

    return matchesTerms
  })
}
