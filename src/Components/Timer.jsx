import React,{useEffect,useState} from 'react'

function Timer(props) {
    const [Min, setMin] = useState(4)
    const [Sec, setSec] = useState(60)
    function countdown(){
        var minleft =4 ;
        var secleft=60;
    
        var timer = setInterval(function function1(){
        
    
        secleft -= 1;
        setSec(secleft)
        if(minleft <= 0 && secleft<=0){
            clearInterval(timer);
            setMin(0);
            setSec(0)
            props.setShowtimer(false)
            props.setSeatcounter([])
        }
        if(secleft<=0 && minleft>=1){
         minleft-=1
         setMin(minleft)
         secleft=60
        }
       
        }, 1000);
    
     
    };
    useEffect(() => {
    countdown()
    }, [])
    return (
        <div className='timer'>
          <p>Time Left</p>
          <div className='time'> {Min} : {Sec}</div>
        </div>
    )
}

export default Timer
