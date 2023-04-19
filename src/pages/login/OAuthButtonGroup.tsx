import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

const API_BASE_URL = 'http://localhost:8080'
const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

const providers = [
  { name: 'Google', icon: <GoogleIcon boxSize="5" />, provider: 'google' },
  { name: 'Twitter', icon: <TwitterIcon boxSize="5" />, provider: 'twitter' },
  { name: 'GitHub', icon: <GitHubIcon boxSize="5" />, provider: 'github' },
]

export const OAuthButtonGroup = () => {
  const handleLoginOauth = (provider: string) => {
    const authUrl = `${API_BASE_URL}/oauth2/authorize/${provider}?redirect_uri=${OAUTH2_REDIRECT_URI}`
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
