

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './pages/Root'
import Home from './pages/Home'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Detail from './pages/Detail'
import Products from './pages/Products'

const queryClient=new QueryClient()
function App() {
   
  const router=createBrowserRouter([
    {path:"/",
     element:<Root/>,
     children:[
      {
         index:true,
         element:<Products/>
      },
      {
        path:'home',
        element:<Home/>
      },
      
      {
        path:':id',
        element:<Detail/>
      }
     ] 
    }
  ])

  return<QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  
}

export default App
