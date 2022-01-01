import React, { useState, useEffect } from 'react'
import Seat from './Seat';
import Selected from './Selected';

function Seats(props) {
    const [Seats, setSeats] = useState([])
    // const [refresh, setRefresh] = useState(false)
    function Allseats() {
        let getseats = [];
        for (let i = 1; i <= 50; i++) {
            getseats.push(i)

        }
        setSeats(getseats)

    }

    useEffect(() => {
        if (Seats.length === 0) Allseats()
        if(!props.processed){
            props.setSeatcounter([])
            // props.setamount(0)
        }
    }, [Seats,props.processed])
  
    return (
        <>

            {
                Seats.map((e) => (
                    <Seat amount={props.amount}  setamount={props.setamount}  processed={props.processed} showsummery={props.showsummery} index={props.index} counts={props.seatcounter} seatcounter={props.setSeatcounter} element={e} />
                    
                ))

            }
                     {/* <Selected counts={props.seatcounter} /> */}

        </>
    )
}

export default Seats
