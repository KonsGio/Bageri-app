import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({flag, data, scrollValue}) => {

  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth  ${
      flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
    }`}
  >
        
        {data && data.map((item) => (
          <div key={item?.id} className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
            <div className='w-full flex items-center justify-between'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://firebasestorage.googleapis.com/v0/b/bageri-b9cb3.appspot.com/o/Images%2F1661008141363-FLkHXY2WYAYOTI2.jfif?alt=media&token=4cfa8c77-553b-4af5-b46b-abe0cfc1ff79" 
                className='w-40 -mt-8 drop-shadow-2xl' alt=''/>
              <motion.div 
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                  <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
              <p className="text-textColor font-semibold text-base md:text-lg">
                Chocolate
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Calories
              </p>
            <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>5.00
              </p>
            </div>
          </div>
       </div>
        ))}

    </div>
  )
};

export default RowContainer;