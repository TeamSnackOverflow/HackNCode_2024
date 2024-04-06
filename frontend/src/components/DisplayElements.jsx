import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';
import { toast } from 'react-toastify';
import { UserContext } from '../App';
import  axios  from 'axios';

const DisplayElements = ({ title, notFound, isLoading, setIsLoading, search }) => {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext)
  const [Props , setProps] = useState([])

  // For the URL

  useEffect(() => {
    axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${search}/property/Title,MolecularWeight,MolecularFormula/JSON?name_type=word`)
    .then((res) => {
      setProps((res.data.PropertyTable.Properties).slice(0,10))
    })
    .catch((e)=>console.log(e))
  },[search])

  const handleNavigate = (cid) =>{

  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold font-['Ubuntu'] text-xl md:text-3xl text-white text-center md:text-left">Results for '{search}' ({Props.length})</h1>

      <div className="flex flex-wrap justify-center md:justify-start mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && Props.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] text-center md:text-left leading-[30px] text-[#818183]">
            {notFound ? notFound : "You have not created any campaigns yet..."}
          </p>
        )}

        {!isLoading && Props.length > 0 && Props.map((item) => <FundCard 
          key={item.CID}
          {...item}
          handleClick={() => {
            if(state){
              handleNavigate(item.CID)
            }
            else{
              toast.info("Please login first!")
            }
          }}
        />)}
      </div>
    </div>
  )
}

export default DisplayElements