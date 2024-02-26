import React from 'react'
import "./style.scss"
import {  useSelector } from 'react-redux'

export default function Genres({data}) {
    const {genres}=useSelector((state)=>state.home)
    // console.log(data)
    
    
  return (
    <div className="genres">

        {data?.map((g)=>{
            
            // console.log(genres[g].name);
            if(!genres[g]?.name) return;
            return (
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            );
        })}
    </div>
  )
}
