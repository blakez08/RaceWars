import * as SecureStore from 'expo-secure-store'

const { EXPO_PUBLIC_API_URL } = process.env

export const AUTH_TOKEN_KEY = 'authToken'

type RequestOptions = {
  headers?: Record<string, string>
}

const buildHeaders = async (hasBody: boolean, extra?: Record<string, string>) => {
  const headers: Record<string, string> = { ...extra }
  if (hasBody && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }
  const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY)
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

const request = async <T>(
  method: string,
  path: string,
  body?: unknown,
  options?: RequestOptions
): Promise<T> => {
  const hasBody = body !== undefined
  const headers = await buildHeaders(hasBody, options?.headers)
  const response = await fetch(`${EXPO_PUBLIC_API_URL}${path}`, {
    method,
    headers,
    body: hasBody ? JSON.stringify(body) : undefined
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}

const get = <T>(path: string, options?: RequestOptions) =>
  request<T>('GET', path, undefined, options)
const post = <T>(path: string, body?: unknown, options?: RequestOptions) =>
  request<T>('POST', path, body, options)
const put = <T>(path: string, body?: unknown, options?: RequestOptions) =>
  request<T>('PUT', path, body, options)
const del = <T>(path: string, options?: RequestOptions) =>
  request<T>('DELETE', path, undefined, options)

export default { get, post, put, delete: del }
