import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toastSuccess } from '../hooks/useAppToast'
import useAuth from '../hooks/useAuth'

function OAuthRedirect() {
  const [searchParams] = useSearchParams()
  const loginOAuth = useAuth(state => state.loginOAuth)
  const navigate = useNavigate()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      loginOAuth(token)
      toastSuccess('Logged in successfully')
      navigate('/')
    }
  }, [searchParams, loginOAuth, navigate])
  return <></>
}

export default OAuthRedirect
