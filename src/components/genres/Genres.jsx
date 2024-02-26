import React from 'react'
import "./style.scss"
import {  useSelector } from 'react-redux'

export default function Genres({data}) {
    const {genres}=useSelector((state)=>state.home)
    console.log(data)
    // console.log(data);
    // console.log(typeof(data));
    // let datalist=Object.keys(data).map(key=>{
    //     return [data[key]];
    // });
    // console.log(datalist);
    
  return (
    <div className="genres">

        {data?.map((g)=>{
            
            console.log(genres[g].name);
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
