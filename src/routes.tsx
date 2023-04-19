import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main'
import OAuthRedirect from './pages/oauth-redirect'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/oauth2/redirect',
        element: <OAuthRedirect />,
      },
    ],
  },
])

export default router
