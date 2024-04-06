import React from 'react'
import { useState, useEffect } from 'react';
import { loader } from '../assets';

function Duel() {
    const [isLoading, setIsLoading] = useState(true);
  return (
    <>
        <h1 className="font-epilogue font-semibold font-['Ubuntu'] text-xl pb-4 md:text-4xl text-white text-center md:text-left">Duel</h1>
    </>
  )
}

export default Duel