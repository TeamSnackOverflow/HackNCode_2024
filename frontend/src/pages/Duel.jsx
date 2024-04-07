import React from 'react'
import { useState, useEffect } from 'react';
import { loader } from '../assets';
import { CustomButton } from '../components';
import {useNavigate} from 'react-router-dom'

function Duel() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const duels = [{
      name: 'Duel against a friend'
    }]
  return (
    <>
        <h1 className="font-epilogue font-semibold font-['Ubuntu'] text-xl pb-4 md:text-4xl text-white text-center md:text-left">Duel</h1>
        <div className="mt-[10px] flex flex-col gap-4 mb-8">
                {duels.length > 0 ? duels.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className='w-full flex justify-between items-center bg-[#1c1c24] px-6 py-4 rounded-lg'>
                      <p className="font-epilogue text-lg font-bold text-[#b2b3bd] leading-[26px] break-ll"> {item.name}</p>
                      <CustomButton 
                          btnType="button"
                          title='JOIN' 
                          styles='bg-[#1dc071]'
                          onClick={() => {} }              
                          handleClick={() => { 
                            navigate('/duelquiz');
                      }}
                    />
                    </div>
                  </div>
                )): null}
            </div>
    </>
  )
}

export default Duel