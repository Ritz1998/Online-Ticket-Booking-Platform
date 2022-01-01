import React,{useEffect} from 'react'
import Seats from './Seats'


function Allseats(props) {
   
    return (
        <div className='allseatcontainer'>
             <div className="sidebar">
                   <div className='guide'>
                       <div className="color"></div>
                       <div className="guideline">Price :  Rs 200/-</div>
                   </div>
                   <div className='guide'>
                       <div className="color"></div>
                       <div className="guideline">Price : Rs 300/- </div>
                   </div>
                   <div className='guide'>
                       <div className="color"></div>
                       <div className="guideline">Selected</div>
                   </div>
                   <div className='guide'>
                       <div className="color"></div>
                       <div className="guideline">Unavailable</div>
                   </div>
               </div>
            <div className="allseats">
              
                <div className="block1 block">
                    <Seats  setSeatcounter={props.setSeatcounter} seatcounter={props.seatcounter}   processed={props.processed} amount={props.totalamount} setamount={props.setTotalamount} showsummery={props.showsummery} index={0} />
                </div>
                <div className="block2 block">
                    <Seats  setSeatcounter={props.setSeatcounter} seatcounter={props.seatcounter} processed={props.processed} amount={props.totalamount}  setamount={props.setTotalamount} showsummery={props.showsummery} index={50} />
                </div>
                <div className="block3 block">
                    <Seats  setSeatcounter={props.setSeatcounter} seatcounter={props.seatcounter}  processed={props.processed} amount={props.totalamount}  setamount={props.setTotalamount} showsummery={props.showsummery} index={100} />
                </div>
                <div className="block4 block">
                    <Seats  setSeatcounter={props.setSeatcounter} seatcounter={props.seatcounter}  processed={props.processed} amount={props.totalamount}  setamount={props.setTotalamount} showsummery={props.showsummery} index={150} />
                </div>
            </div>


        </div>
    )
}

export default Allseats
