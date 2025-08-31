import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query';
function Detail() {
    const {id}=useParams();

     const {data,isPending}=useQuery({
            queryKey:['item',{id}],
            queryFn:()=>fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json(),),
                
      
            
        })
        console.log("this is detail",data)
  return (
    <div>
        <div className='flex h-[400px] justify-center items-center p-3'>
             <div className='basis-1/2  flex justify-center '>
              <div className='bg-gray-300 p-5'>
                <img className='h-[300px]' src={`${data?.image}`}  alt="" />
              </div>
             
             </div>
             <div className='basis-1/2'>
               <div className='p-5 flex flex-col gap-3 '>
                  <h1 className='font-bold text-3xl'>{data?.title}</h1>
                  <p>{data?.description}</p>
                  <p><span>Price: </span>{data?.price}$</p>
               </div>
             </div>
        </div>
        <div>review </div>
        <div>related as courstel</div>
    </div>
  )
}

export default Detail