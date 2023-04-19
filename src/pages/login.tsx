const API_BASE_URL = 'http://localhost:8080'
const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI

const Login = () => {
  const handleGoogle = (_evt: any) => {
    window.location.href = GOOGLE_AUTH_URL
  }
  return (
    <div>
      <button className="cursor-pointer" onClick={handleGoogle}>
        Login with Google
      </button>
    </div>
  )
}

export default Login
