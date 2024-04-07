import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { DisplayElements } from '../components';
import Typewriter from 'typewriter-effect';
import {useNavigate} from 'react-router-dom'
import {CustomButton} from '../components';
// import {logo} from '../assets/logo1.png'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const navigate= useNavigate()

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="w-1/2">
          <h1 className="text-8xl font-bold">Welcome to Catalyst</h1>
          <p className="mt-4 font-bold text-3xl"> </p>
          <p className="mt-2 text-[#1dc071] font-extrabold text-6xl">
          Where Science
          <Typewriter
              options={{
                strings: ['innovates.', 'discovers.', 'thrives.'],
                autoStart: true,
                loop: true,
              }}
            />
        </p>
        <div className='flex pt-12 gap-4'>
        <CustomButton 
                btnType="button"
                title='Daily Quiz ->' 
                styles='border-[#1dc071] border-[2px]'
                onClick={() => {} }              
                handleClick={() => { 
                  navigate('/quiz');
                
                }}
              />
            <CustomButton 
                btnType="button"
                title='Create a Diagram ->' 
                styles='border-[#1dc071] border-[2px]'
                onClick={() => {} }              
                handleClick={() => { 
                  navigate('/docs');
                
                }}
              />
              <CustomButton 
                btnType="button"
                title='Check Leaderboard ->' 
                styles='border-[#1dc071] border-[2px]'
                onClick={() => {} }              
                handleClick={() => { 
                  navigate('/leaderboard');
                
                }}
              />
        </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img src='logo1.png' alt="Logo" className="max-w-full" />
        </div>
      </div>
    </>
  )
}

export default Home