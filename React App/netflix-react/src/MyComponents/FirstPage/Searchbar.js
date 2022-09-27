import {React , useEffect, useState} from 'react'

import './Searchbar.css';


function fetchQuranAyas(){
  return new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  fetch('https://api.coingecko.com/api/v3/coins')
  .then((data) => myResolve(data) )
  });
}
export const Searchbar = () => {
  const [count,setCount] = useState(0)
  useEffect(() => {
    fetchQuranAyas().then((data)=>{
      console.log(data)
    }).catch((data)=>{
      // console.log(data)
    })
  })

  setTimeout(()=>{
    setCount(555)
    console.log("****************************************")
  },10000)
  
  return (
      <>
      <div className='searchbar'>
        <nav className='navbar bottom-email'>
        <input className="search " type="search" placeholder="Email address" aria-label="Search"/>
        <h3 className='btn btn-danger btn-lg email-button'>{count}Get Started</h3>
        </nav>
      </div>
      </>
    )
}
