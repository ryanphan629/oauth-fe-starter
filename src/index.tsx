import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './styles/index.css'

const { ToastContainer } = createStandaloneToast()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ChakraProvider>
    <ToastContainer />
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </ChakraProvider>
)
