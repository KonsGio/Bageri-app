import React from 'react';

import { app } from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {MdShoppingBasket} from 'react-icons/md';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

import {useStateValue} from '../context/StateProvider';
import {actionType} from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Importing custom hook to provide user data 
  const [{user}, dispatch] = useStateValue();
    const login = async () => {
      const {user: {refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider);
      // After successful login we dispatch the user data
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      // Local storage with user info 
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    };

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* Desktop,tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
          <Link to={'/'} className='flex items-center gap-2'>
            <img 
              src={Logo} 
              className='w-24 object-cover' 
              alt ='logo'
            />
            <p className='text-headingColor text-xl font-bold'></p>
          </Link>

          <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text- transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>Services</li>
          </ul>
          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-gray-600 text-2xl ml-8 cursor-pointer'/>
            <div className='absolute -right-2 -top-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img 
              whileTap={{scale: 0.6}}
              src={user ? user.photoURL : Avatar} 
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
              alt='userprofile'
              onClick={login}
            />
          </div>
          </div>
        </div>

        {/* mobile */}
        <div className='flex md:hidden w-full h-full '>

        </div>
    </header>
  )
};

export default Header