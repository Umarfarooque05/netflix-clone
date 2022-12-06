import {React} from 'react'
import './Searchbar.css';

// function fetchQuranAyas(){
//   return new Promise(function(myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   fetch('https://api.coingecko.com/api/v3/coins')
//   .then((data) => myResolve(data) )
//   });
// }


export const Searchbar = () => {
  // const [count,setCount] = useState('')
  // useEffect(() => {
  //   fetchQuranAyas().then((data)=>{
  //     console.log(data)
  //   }).catch((data)=>{
  //     // console.log(data)
  //   })
  // })

  // setTimeout(()=>{
  //   setCount()
  //   console.log("****************************************")
  // },10000)
  


  return (
      <>
      <div className='searchbar'>
        <nav className='navbar bottom-email'>
        <input className="search" type="search" placeholder="Email address" aria-label="Search"/>
        <h3 className='common-button btn-lg email-button'>Get Started </h3>
        </nav>
      </div>
      </>
    )
}

        <div class="row align-items-center searchbar">
          <div class="col search">
          </div>
          <div class="col-4  search">
            <input type="text" class="form-control" placeholder="Enter email" name="email"/>
          </div>
          <div class="col search">
            <button className='common-button'><h3>Get Started<svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg></h3>
            </button>
          </div>
        </div>