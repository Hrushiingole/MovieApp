import React, { useState,useEffect } from 'react'
import "./style.scss";
import {useNavigate} from "react-router-dom"
import useFetch from '../../../hooks/useFetch';
import {useSelector} from "react-redux"
import Img from '../../../components/lazyLoadimage/img';
import ContentWrapper from '../../../components/contentWrapper/contentWrapper';


export default function HeroBanner() {

  const [background,setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const {url}=useSelector((state)=>state.home);

  const {data,loading}=useFetch("/movie/upcoming")
  useEffect(()=>{
    //? is optional chaining if data is zero then it will not execute the next instruction

    const bg=url.backdrop+ data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);

  },[data])

  const searcQueryHandler=(event)=>{
      if(event.key==="Enter" && query.length>0){
          navigate(`/search/${query}`)
      }
  };

  return (
    <>
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}

      <div className="opacity-layer"></div>


      <ContentWrapper>
      
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">Millions of movies,TV shows and people to discover.Explore now.</span>
          <div className="searchInput">
           
            <input
             type="text"
             placeholder='search for a movie or tv show....'
             onKeyUp={searcQueryHandler} 
             onChange={(e)=>setQuery(e.target.value)}/>
             <button>Search</button>
          </div>
        </div>

      
      </ContentWrapper>
    </div>
    </>
  )
}
