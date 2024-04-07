import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '../components';
import { loader } from '../assets';


function Leaderoard() {
    const [isLoading, setIsLoading] = useState(true);
    const [Users, setUsers] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      setTimeout(()=>{
        axios.get(`http://localhost:8000/viewAllUsers`)
        .then((res)=>{
          setUsers(res.data)
          console.log(res.data)
        })
        .catch((e)=>{console.log(e)})
        setIsLoading(false);
        checkUser();
      },700)
    }, [])
  return (
    <>
        <h1 className="font-epilogue font-semibold font-['Ubuntu'] text-xl pb-4 md:text-4xl text-white text-center md:text-left">Leaderboard</h1>
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}
        <div className="mt-[10px] flex flex-col gap-4 mb-8">
                {Users.length > 0 ? Users.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className='w-full flex justify-between items-center bg-[#1c1c24] px-6 py-4 rounded-lg'>
                      <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.name}</p>
                      <p className="font-epilogue font-semibold text-[18px] text-[#808191] leading-[26px] break-ll">{item.points} points</p>
                    </div>
                  </div>
                )): null}
              </div>
    </>
  )
}

export default Leaderoard