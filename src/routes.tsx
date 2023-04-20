import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Protected from './components/Protected'
import Main from './pages/Main'
import OAuthRedirect from './pages/OAuthDirect'
import { Login } from './pages/login'
import User from './pages/user'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <App />
      </Protected>
    ),
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'user',
        element: <User />,
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
