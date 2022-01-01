import React from 'react'
import {Link}from 'react-router-dom'

function Selectmovie(props) {

    return (
        <div className="cards">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb44WyYea9lrOEozTPjGBa48KfHDeO1PHX0w&usqp=CAU" alt="" />
                <h3>No time to die</h3>
                <p>No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions.</p>
               <Link to="/Allseats">
               <button onClick={()=>{props.movie("No time to die")}}>Book </button>
               </Link>
            </div>
            <div className="card">
                <img src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-runtime.jpg?imgeng=cmpr_75/" alt="" />
                <h3>Spiderman-no way home</h3>
                <p>For the first time in the cinematic history of Spider-Man, 
                our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero.</p>
                <Link to="/Allseats">
                <button onClick={()=>{props.movie("Spiderman-no way home")}}>Book</button>
                </Link>
            </div>
            <div className="card">
                <img src="https://i.ytimg.com/vi/-MYZrPEMxF4/maxresdefault.jpg" alt="" />
                <h3>83</h3>
                <p>1983 Cricket World Cup taught India to win. 14 men fought against all odds. This is their Story!</p>
               <Link to="/Allseats">
               <button onClick={()=>{props.movie("83")}} >Book</button>
               </Link>
            </div>
            <div className="card">
                <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/07/the-tomorrow-war-movie-review-1.jpg" alt="" />
                <h3>Home alone</h3>
                <p>The Tomorrow War is a 2021 American military science fiction action film directed by Chris McKay.</p>
               <Link to="/Allseats"> 
               <button onClick={()=>{props.movie("Home alone")}}>Book</button>
               </Link>
            </div>


        </div>
    )
}

export default Selectmovie
