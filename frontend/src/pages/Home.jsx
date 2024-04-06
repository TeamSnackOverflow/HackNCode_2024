import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { DisplayElements } from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);


  return (
    // <DisplayElements 
    //   title="All Campaigns"
    //   isLoading={isLoading}
    //   campaigns={campaigns}
    // />
    <></>
  )
}

export default Home