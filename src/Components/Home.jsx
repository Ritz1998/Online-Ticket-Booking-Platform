import React,{useState,useEffect} from 'react'
import Allseats from './Allseats'

import Selectmovie from './Selectmovie'
import Summerymodel from './Summerymodel'
import Timer from './Timer'
import{Routes,Route} from 'react-router-dom'



function Home() {
  const [Movie, setMovie] = useState("")
  const [Showsummery, setShowsummery] = useState(false)
  const [totalamount, setTotalamount] = useState(0)
  const [Showtimer, setShowtimer] = useState(false)
  const [seatcounter, setSeatcounter] = useState([])

  console.log(Movie)
  useEffect(() => {
   if(!Showtimer){
      setTotalamount(0)
   }
  }, [Showtimer])
    return (
      <> 
        <Routes>
          <Route path="/" element={ <Selectmovie movie={setMovie}/>}/>
          <Route path="/Allseats"  element={ <Allseats setSeatcounter={setSeatcounter} seatcounter={seatcounter} processed={Showtimer} totalamount={totalamount}  setTotalamount={setTotalamount} showsummery={setShowsummery}/>}/>
          {/* <Route path="/Summerymodel" element={  <Summerymodel movie={Movie}/>}/> */}
        </Routes>

      { Showsummery? <Summerymodel seatcounter={seatcounter} setShowtimer={setShowtimer} totalamount={totalamount} movie={Movie}/>:""}
      { Showtimer?<Timer setShowtimer={setShowtimer}  setSeatcounter={setSeatcounter} />:""}
       
         
        
        
        </>
    )
}

export default Home
