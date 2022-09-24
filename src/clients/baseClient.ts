type JSONResponse<
  S = unknown,
  E = { message: string } & Record<string, unknown>
> = {
  data?: S
  error?: E
}

type ClientConfig = Partial<
  RequestInit & {
    data: number | string | Record<string, unknown>
    headers: Record<string, unknown>
    token: string
  }
>

export async function baseClient<S = unknown, E = unknown | string>(
  url: string,
  { data, token, headers, ...options }: ClientConfig = {}
): Promise<S> {
  const fetchConfig: RequestInit = {
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: (token ? `Bearer ${token}` : undefined) as string,
      "Content-Type": (data ? "application/json" : undefined) as string,
      ...headers
    },
    method: data ? "POST" : "GET",
    ...options
  }

  const response = await fetch(url, fetchConfig)

  const result: JSONResponse<S, E> = await response.json()
  const status = response.status

  if (status >= 200 && status < 400) {
    return result as S
  }

  if (status >= 400 && status < 500) {
    if (result.error) {
      throw result.error
    } else {
      throw { message: result }
    }
  }

  throw new Error(
    `Request to '${url}' failed with an unexpected error. Got status: ${status}`
  )
}
