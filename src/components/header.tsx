import React from 'react'

interface ZButtonProps { }

const Header: React.FC<ZButtonProps> = () => {
  return (
    <header className="font-bold text-center w-full p-4 text-4xl">
      OAuth Learning Starter
    </header>
  )
}

export default Header