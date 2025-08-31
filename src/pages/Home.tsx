import React from 'react'
import Item from '../components/Item'
import { useQuery } from '@tanstack/react-query';
import type { ITEMTYPE } from '../Types';
import { Link, NavLink } from 'react-router';
import { div } from 'motion/react-client';
import Footer from './Footer';

function Home() {
 
   
  return (
    // <div className='p-5 flex flex-wrap gap-3 justify-center bg-[#E9ECE6] '>
    //     {isPending&&<p> Please wait...</p>}
    //     {data?.map((d:ITEMTYPE)=><Link to={`${d.id}`}><Item key={d.id} title={d.title} image={d.image} price={d.price}/></Link>)}
            
    // </div>
    <>
       <div className='w-full h-full flex flex-col  items-center gap-5 p-5 m-5  '>
      <h1 className='text-5xl font-bold italic text-[#1F3A5F]'>Welcome from Our KeyShp</h1>
      <p className='text-[#6E6259] '>Discover the perfect place to shop your favorite products.
From trendy fashion to everyday essentials, we bring you quality, style, and unbeatable prices — all in one place.</p>
<p className='text-[#6E6259]'>🛒 Shop smart. Shop easy. Shop with us!</p>
      <img className='' src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_hybrid&w=740&q=80" alt="" />

     <Link to='products' className='text-[#E8DBCA] bg-[#1F3A5F] px-5 py-2.5 rounded-lg hover:cursor-pointer hover:bg-[#1F3A5F]/90 '>Start Shopping</Link>
    </div>
    <Footer/>
    </>
 
 
  )
}

export default Home