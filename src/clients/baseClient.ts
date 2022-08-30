export async function baseClient(url: string, options: Record<string, unknown>) {
  const response = await fetch(url, options)

  if (response.status < 200 && response.status >= 400) {
    throw new Error(`Request to '${url}' failed with error. Got status: ${response.status}`)
  }

  const result = await response.json()

  if (result.error) {
    throw new Error(result.error)
  }

  return result
}
