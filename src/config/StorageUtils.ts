const TOKEN_KEY = 'token'

// store data to localstorage
export const storeData = (key: string, value: any) => {
  if (typeof value === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

// get data from localstorage
export const getData = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

// remove data from localstorage
export const removeData = (key: string) => {
  localStorage.removeItem(key)
}

// store token to localstorage
export const storeToken = (token: string) => {
  storeData(TOKEN_KEY, token)
}

// get token from localstorage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

// clear token from localstorage
export const clearToken = () => {
  removeData(TOKEN_KEY)
}
