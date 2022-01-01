import React,{useEffect} from 'react'

function Selected(props) {

  useEffect(() => {
    // console.log([...props.counts,...props.counts])
  }, [props.counts])
    return (
        <div className="selected">
            <p style={{color:"white"}}>Selected : {props.counts.map((e)=>(
                <span style={{margin:"4px",color:"lightblue"}}>{e}</span>

            ))}</p>
            
        </div>
    )
}

export default Selected
