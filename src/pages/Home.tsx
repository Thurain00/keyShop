import React from 'react'
import Item from '../components/Item'
import { useQuery } from '@tanstack/react-query';
import type { ITEMTYPE } from '../Types';
import { Link } from 'react-router';
import { div } from 'motion/react-client';
function Home() {
    const {data,isPending}=useQuery({
        queryKey:['item'],
        queryFn:()=>fetch('https://fakestoreapi.com/products').then((res)=>res.json(),),
            
  
        
    })

   
  return (
    // <div className='p-5 flex flex-wrap gap-3 justify-center bg-[#E9ECE6] '>
    //     {isPending&&<p> Please wait...</p>}
    //     {data?.map((d:ITEMTYPE)=><Link to={`${d.id}`}><Item key={d.id} title={d.title} image={d.image} price={d.price}/></Link>)}
            
    // </div>
    <div>HOme page</div>
 
  )
}

export default Home