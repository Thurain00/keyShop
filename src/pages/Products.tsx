import React from 'react'
import Item from '../components/Item'
import { useQuery } from '@tanstack/react-query';
import type { ITEMTYPE } from '../Types';
import { Link } from 'react-router';
function Products() {
       const {data,isPending}=useQuery({
        queryKey:['item'],
        queryFn:()=>fetch('https://fakestoreapi.com/products').then((res)=>res.json(),),
            
  
        
    })
    console.log('this is data',data)
  return (
      <div className='p-5 flex flex-wrap gap-3 justify-center  '>
        {isPending&&<p> Please wait...</p>}
        {data?.map((d:ITEMTYPE)=><Link to={`${d.id}`}><Item key={d.id} title={d.title} image={d.image} price={d.price}/></Link>)}
            
    </div>
  )
}

export default Products