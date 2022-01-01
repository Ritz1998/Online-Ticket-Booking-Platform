import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Seat(prop) {
    const [booked, setBooked] = useState(prop.processed ? true : false)
    const[ style,setStyle] =useState({
        background: prop.element <= 32 ?
            "#7CD1B8" : "#FDFF8F"
        //  booked?"#333": "#7CD1B8" :booked?"#333": "#FDFF8F"
    })

    const select = (e) => {
        prop.showsummery(true)
        //Setting up an array which will add or remove element when select or unselect seats
        if (prop.counts.includes(prop.element + prop.index)) {
            let index = prop.counts.indexOf(prop.element + prop.index)
            let arr = prop.counts
            arr.splice(index, 1);
            prop.seatcounter(arr)
            console.log(prop.counts)
            e.target.style.background = prop.element <= 32 ? "#7CD1B8" : "#FDFF8F"

            prop.setamount(Number(prop.amount) - (prop.element <= 32 ? 200 : 300))
        } else {
            prop.seatcounter([...prop.counts, prop.element + prop.index])
            e.target.style = "background:#DD4A48"
            prop.setamount(Number(prop.amount) + (prop.element <= 32 ? 200 : 300))


        }

        // if (prop.element === 50) {
        //     setStyle({ background: "white" })
        // }

    }
    useEffect(() => {
        setStyle({
            background: prop.element <= 32 ?
            "#7CD1B8" : "#FDFF8F"
        })
        if (prop.processed) {
            if (prop.counts.includes(prop.element + prop.index)) {
                setStyle({
                 background: "#333",color:"#fff"
                })
                
                // setBooked(true)
            }
        }
        console.log(prop.processed,prop.counts)
        if (!prop.processed) {
            setBooked(false)
        }
    }, [prop.processed,prop.counts])

    return (

        <>
            <div className="seat" style={style} onClick={select}>{prop.element + prop.index}</div>

        </>
    )
}

export default Seat
