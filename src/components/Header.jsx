import React, { useState } from 'react';

import { app } from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

import {useStateValue} from '../context/StateProvider';
import {actionType} from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMenu, setIsMenu] = useState(false);

  // Importing custom hook to provide user data 
  const [{user}, dispatch] = useStateValue();
    const login = async () => {
      if(!user){
        const {user: {refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider);
      // After successful login we dispatch the user data
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      // Local storage with user info 
      localStorage.setItem('user', JSON.stringify(providerData[0]));
      }else{
        setIsMenu(!isMenu);
      }
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
            <div className='absolute -right-3 -top-3 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center'>
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
            {
              isMenu && (
                <motion.div 
                  initial={{opacity: 0, scale: 0.6}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 1, scale: 1}}
                  className='w-40 bg-gray-100 shadow-xl absolute flex flex-col top-12 right-0 rounded-xl'>
              {
                user && user.email === "kgiomarcuslucianus@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                    transition-all duration-100 ease-in-out rounded-xl text-textColor text-base'>
                    Προσθήκη<MdAdd/>
                  </p>
                  </Link>
                )
              }
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-xl text-textColor text-base'>Αποσύνδεση<MdLogout/></p>
            </motion.div>
              )
            }
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