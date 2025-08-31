

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './pages/Root'
import Home from './pages/Home'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Detail from './pages/Detail'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

const queryClient=new QueryClient()
function App() {
   
  const router=createBrowserRouter([
    {path:"/",
     element:<Root/>,
     children:[
       {
        index:true,
        element:<Home/>
      },
      {
         path:'products',
         element:<Products/>,
         children:[
          
         ]
      },
     
      
      {
        path:'products/:id',
        element:<Detail/>
      },
      {
        path:'aboutUs',
        element:<AboutUs/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
     ] 
    }
  ])

  return<QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  
}

export default App
