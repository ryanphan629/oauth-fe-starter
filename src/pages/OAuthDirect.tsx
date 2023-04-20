import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAppToast from '../hooks/useAppToast'
import useAuth from '../hooks/useAuth'

function OAuthRedirect() {
  const [searchParams, _setSearchParams] = useSearchParams()
  const loginOAuth = useAuth(state => state.loginOAuth)
  const navigate = useNavigate()
  const { toastSuccess } = useAppToast()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      loginOAuth(token)
      toastSuccess('Logged in successfully')
      navigate('/')
    }
  }, [searchParams, loginOAuth])
  return <></>
}

export default OAuthRedirect
