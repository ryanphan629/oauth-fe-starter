const GlobalConfig = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  OAUTH2_REDIRECT_URI: `http://localhost:3000/oauth2/redirect`,
  MEDIA_URL: process.env.REACT_APP_MEDIA_URL || 'http://localhost:9000',
  BUCKET_NAME: process.env.REACT_APP_BUCKET_NAME || 'avatar'
}

export default GlobalConfig
