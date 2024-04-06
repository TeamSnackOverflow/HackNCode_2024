import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { tagType, thirdweb } from '../assets';

const FundCard = ({ CID, MolecularWeight, MolecularFormula, Title }) => {
  const [desc, setdesc] = useState('')
  useEffect(() => {
      let link = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/description/json`
      axios.get(link)
      .then((res) =>{
        console.log(res.data)
        let d = res.data.InformationList.Information
        console.log(d)
        if(d.length == 2){
          setdesc(d[1].Description)
        }
        else{
          setdesc("Not Available")
        }
        console.log(desc)
      })
  })
  const handleClick = ()=>{

  }
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
      <img src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/png`} alt="fund" className="w-full h-[180px] object-cover rounded-[15px]"/>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[5px]">
          <h3 className="font-epilogue font-semibold text-[20px] text-white text-left leading-[26px] line-clamp-2">{Title}</h3>
        </div>

        <div className="block">
          <p className="font-epilogue font-medium text-[14px] text-[#808191]">Molecular Formula: {MolecularFormula}</p>
          <p className="font-epilogue font-medium text-[14px] text-[#808191]">Molecular Weight: {MolecularWeight} g</p>
          <p className="mt-[5px] font-epilogue font-normal text-white text-left leading-[18px]">Description :<br/> {desc}</p>
        </div>
      </div>
    </div>
  )
}

export default FundCard