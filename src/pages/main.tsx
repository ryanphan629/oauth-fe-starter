import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="w-full p-4 text-center">
      <Link to="/user">User</Link>
      <h1 className="font-mono text-3xl text-red-600">Main</h1>
    </div>
  )
}

export default Main
