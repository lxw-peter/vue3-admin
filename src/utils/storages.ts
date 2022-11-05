export const getItem = <T>(key: string) => {
  const data = window.localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data) as T
  } catch (error) {
    return null
  }
}

export const setItem = (key: string, data: string | object | null) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(key, data)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
