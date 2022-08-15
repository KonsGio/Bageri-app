import React from 'react'
import Logo from '../img/logo.png'
import {MdShoppingBasket} from 'react-icons/md'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* Desktop,tablet */}
        <div className='hidden md:flex w-full h-full '>
          <div className='flex items-center gap-2'>
            <img src={Logo} className='w-28 object-cover' alt ='logo'/>
            <p className='text-slate-500 text-xl font-bold'></p>
          </div>
          <ul className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-gray-800 hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-gray-800 hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-gray-800 hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-gray-800 hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          </ul>
          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-gray-600 text-2xl ml-8'/>
            <div className='w-10 h-10 rounded-full bg-cartBg'>

            </div>
          </div>
        </div>
        {/* mobile */}
        <div className='flex md:hidden w-full h-full '>

        </div>
    </header>
  )
}

export default Header