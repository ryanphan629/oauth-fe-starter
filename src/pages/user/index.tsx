import { useEffect, useState } from 'react'
import SocialProfile from './SocialProfile'
import { UserDto, fetchUserDto } from './user.service'

const User = () => {
  const [user, setUser] = useState<UserDto>()

  const getUser = async () => {
    const response = await fetchUserDto()
    setUser(response)
  }

  useEffect(() => {
    getUser()
  }, [])

  if (!user)
    return (
      <div className="center-all p-4">
        <div className="font-mono text-lg text-cyan-900">User Info will be show here</div>
      </div>
    )

  return (
    <div>
      <SocialProfile {...user} />
    </div>
  )
}

export default User
