import React, { useState, useEffect } from 'react'

import { DisplayElements } from '../components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const { title } = useParams();

  const fetchCampaigns = () => {
    axios.get(`http://localhost:8000/searchCampaigns?searchValue=${title}`)
      .then((res) => {
        setCampaigns(res.data)
        setIsLoading(false);
      })
      .catch((err)=>{
          console.log(err)
          setIsLoading(false);
    })
      
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchCampaigns();
    },700)
  }, [title]);

  return (
    <DisplayElements 
      title ={`Search Results for \"${title}\"`}
      notFound = "Couldn't find campaigns ....."
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Search;