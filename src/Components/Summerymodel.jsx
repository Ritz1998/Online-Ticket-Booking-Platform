import React from 'react'

function Summerymodel(props) {
    const Proceed = () => {
        props.setShowtimer(true)
    }

    return (

        <div className="model">
            <div className='selected'>
                <p>Selected Seats : </p>
                <div>
                    {
                        props.seatcounter.map((ele)=>(
                            <span >{ele}</span>
                        ))
                    }

                </div>
            </div>
            
            <div>
                <h2>Movie : {props.movie}</h2>
                <h4>Total Amount : {props.totalamount}</h4>
            </div>
            <button onClick={Proceed}>Proceed to Pay</button>
        </div>


    )
}

export default Summerymodel
