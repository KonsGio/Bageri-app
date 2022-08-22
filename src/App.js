import React, { useEffect } from 'react';
import { Header,MainContainer,CreateContainer } from './components';
import {Routes, Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  },[]);

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
