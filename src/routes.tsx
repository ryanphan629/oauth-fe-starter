import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main'
import OAuthRedirect from './pages/oauth-redirect'
import App from './App'
import PrivateRoute from './components/PrivateRoute'
import { Login } from './pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
  {
    path: '/oauth2/redirect',
    element: <OAuthRedirect />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
