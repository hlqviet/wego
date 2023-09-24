import { useEffect, useState } from 'react'

import { Resource, ResourceAction } from '@/src/common/enums'
import { GetResponse } from '@/src/common/types'

interface UseQueryProps {
  action: ResourceAction
  resource: Resource
  options?: RequestInit
  query?: {
    filters?: Record<string, string | number | boolean | undefined>
    terms?: Record<string, string | undefined>
  }
}

const useQuery = <T extends any>(props: UseQueryProps) => {
  const { action, resource, options, query } = props
  const [error, setError] = useState<Error | undefined>()
  const [data, setData] = useState<GetResponse<T> | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()
    const queryParams = new URLSearchParams()

    if (query && Object.keys(query).length) {
      for (const [key, value] of Object.entries(query)) {
        if (!value) continue

        if (key === 'filters' || key === 'terms') {
          queryParams.set(key, JSON.stringify(value))
          continue
        }

        queryParams.set(key, value.toString())
      }
    }

    ;(async () => {
      setLoading(true)

      try {
        const response = await fetch(`/${resource}?${queryParams.toString()}`, {
          method: action,
          signal: abortController.signal,
          ...options
        })

        setData(await response.json())
        setError(undefined)
      } catch (err) {
        if (abortController.signal.aborted) return

        setError(err as Error)
        setData(undefined)
      } finally {
        setLoading(false)
      }
    })()

    return () => abortController.abort()
  }, [action, options, query, resource])

  return { error, data, loading }
}

export default useQuery
