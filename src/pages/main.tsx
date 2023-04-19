import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Login from './login'

const Main = () => {
  return (
    <>
      <Login />
    </>
  )
}

export default Main