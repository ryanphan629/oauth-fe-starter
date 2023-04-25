import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Protected from './components/Protected'
import Main from './pages/Main'
import NoMatch from './pages/NoMatch'
import OAuthRedirect from './pages/OAuthDirect'
import AdminBoard from './pages/admin'
import { Login } from './pages/login'
import ManagerBoard from './pages/manager'
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
        index: true,
        element: <Main />
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'admin',
        element: (
          <Protected role="ROLE_ADMIN">
            <AdminBoard />
          </Protected>
        )
      },
      {
        path: 'manager',
        element: (
          <Protected role="ROLE_MODERATOR">
            <ManagerBoard />
          </Protected>
        )
      }
    ]
  },
  {
    path: '/oauth2/redirect',
    element: <OAuthRedirect />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NoMatch />
  }
])

export default router
