export type GetResponse<T> = {
  data: T[]
  pagination?: {
    pageNumber: number
    hasNextPage: boolean
  }
}
