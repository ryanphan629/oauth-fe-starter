import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import GlobalConfig from '../../config/GlobalConfig'
import { GitHubIcon, GoogleIcon } from './ProviderIcons'

const { API_URL, OAUTH2_REDIRECT_URI } = GlobalConfig

const providers = [
  { name: 'Google', icon: <GoogleIcon boxSize="5" />, provider: 'google' },
  { name: 'GitHub', icon: <GitHubIcon boxSize="5" />, provider: 'github' }
]

export const OAuthButtonGroup = () => {
  const handleLoginOauth = (provider: string) => {
    const authUrl = `${API_URL}/oauth2/authorize/${provider}?redirect_uri=${OAUTH2_REDIRECT_URI}`
    console.log(authUrl)
    window.location.href = authUrl
  }

  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon, provider }) => (
        <Button key={name} width="full" onClick={() => handleLoginOauth(provider)}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  )
}
