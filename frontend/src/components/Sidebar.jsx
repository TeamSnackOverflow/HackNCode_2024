import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo } from '../assets';
import { navlinks } from '../constants';
import Logout from './Logout';
import { UserContext } from '../App';
import { toast } from 'react-toastify';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const {state , dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
   
  return (
    <div className="flex justify-between items-center flex-col sticky top-1 h-[95vh]">
      <Link to="/">
        <img src={logo} className='w-[80px] h-[80px]'></img>
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[100px] py-4 mt-6">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <div key={link.name} className='rounded-[15px] hover:bg-[#3f3f3f] w-[90px] pb-2'>
              <div className='pl-5'>
              <Icon 
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if(!link.disabled && link.name === 'Logout'){
                    if(state){
                      Logout();
                      dispatch({type: "USER" , payload : false});
                      navigate('/');
                    }
                    else{
                      toast.info("Please login first!")
                    }
                  }
                  else if(!link.disabled) {
                    if(state || link.name === "Home"){
                      setIsActive(link.name);
                      navigate(link.link);
                    }
                    else{
                      toast.info("Please login first!")
                    }
                  }
                }}
              />
              </div>
              <p className='text-center text-sm font-semibold'>{link.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Sidebar