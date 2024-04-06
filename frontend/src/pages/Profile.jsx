import React, { useState, useEffect } from 'react'

import { DisplayElements } from '../components';
import axios from 'axios';
// import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = () => {

    axios.get('http://localhost:5000/profile',{withCredentials: true})   //returns rootUser
    .then((res) => {
    // console.log(res.data.yourCampaigns)

    axios.post(`http://localhost:5000/getManyCampaigns`, res.data.yourCampaigns ) //returns list of campaigns from id's in yourCampaigns
      .then((res) => {
        console.log(res.data)
        setCampaigns(res.data)
        setIsLoading(false);
      })
      .catch((err)=>console.log(err))
    })
    .catch((e)=>{console.log(e)})
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchCampaigns();
    },700)
  }, []);

  return (
    <DisplayElements 
      title="Your Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile