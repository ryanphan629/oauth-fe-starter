import { useEffect } from 'react'
import SocialProfile from './SocialProfile'
import { useUser } from './user.service'

const User = () => {
  const { user, fetchUser } = useUser(state => state)

  useEffect(() => {
    fetchUser()
  }, [])

  if (!user) {
    return (
      <div className="center-all px-4 py-10">
        <div className="font-mono text-lg text-cyan-900">User Info will be show here</div>
      </div>
    )
  }

  return <SocialProfile {...user} />
}

export default User
