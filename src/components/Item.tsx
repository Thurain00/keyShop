import { div } from 'motion/react-client'
import React from 'react'

type Props={
  image:string,
  title:string,
  price:number
}
function Item({image,title,price}:Props) {
  return (
    // <div className='w-[200px] h-[270px] bg-[#FFFFFF] p-1 shadow-2xl relative overflow-hidden rounded-md group '>
    //     <img
    //     className='w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-50 rounded-md'
    //      src={image} alt="" />

    //         {/* Overlay content shown on hover */}
    //   <div className=" bg-[#0A1F44]/60 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
    //     <p className="text-lg text-[#FFFFFF] font-semibold">{title}</p>
    //     <p className="text-sm text-[#F5F7FA] mt-1">{price} $</p>
    //   </div>
    //        {/* Add to cart button stays visible */}
    //   <button className="bg-[#2563EB] text-white text-sm px-3 py-2 w-full absolute bottom-0 left-0 z-10">
    //     Add to Cart
    //   </button>
    // </div>
    <div className='w-[286px] h-[300px] bg-[#F9F6F4] rounded-lg'>
       <img src={image} className='w-[286px] h-[160px] object-contain' alt="item_img" />
       <div className='w-[286px] h-[140px] text-[#2D2D2D] px-3 flex flex-col justify-center gap-1 '>
            <h1 className='w-full  whitespace-nowrap overflow-hidden text-ellipsis block'>{title}</h1>
            <p className='font-bold italic'>${price}</p>
            <button className='bg-[#1F3A5F] w-[120px] text-[#E8DBCA] px-3 py-1.5 rounded-lg'>Add to Cart</button>
       </div>
    </div>
  )
}

export default Item