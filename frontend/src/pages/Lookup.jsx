import React from 'react'
import { useState, useEffect } from 'react';
import { loader } from '../assets';
import { useLocation } from 'react-router-dom'
import { DisplayElements } from '../components';

function Lookup() {
    const [isLoading, setIsLoading] = useState(false);
    const loc = useLocation()
  return (
    <>
      <DisplayElements 
          title ={`Search Results for \"${loc.state.val}\"`}
          notFound = "Couldn't find the compound ....."
          search={loc.state.val}
        />
    </>
  )
}

export default Lookup