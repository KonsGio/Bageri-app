import React from 'react';
import { Header,MainContainer,CreateContainer } from './components';
import {Routes, Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className='w-screen h-auto flex flex-col'>
      <Header/>

      <main className='mt-24 md:mt-20 px-4 md:px-16 py-4 w-full'>
      
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
};

export default App;
