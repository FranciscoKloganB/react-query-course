type JSONResponse<S, E = { message: string } & Record<string, unknown>> = {
  data?: S
  error?: E
}

export async function baseClient<T = unknown>(
  url: string,
  options: Record<string, unknown> = {}
): Promise<T> {
  const response = await fetch(url, options)

  if (response.status >= 200 && response.status < 400) {
    const result: JSONResponse<T> = await response.json()

    if (result.error) {
      throw new Error(result.error.message)
    }

    return result as T
  }

  throw new Error(
    `Request to '${url}' failed with error. Got status: ${response.status}`
  )
}
