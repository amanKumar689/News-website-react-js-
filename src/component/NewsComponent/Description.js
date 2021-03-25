import React from 'react'
import '../../Style/description.css'
const Description = (props) => {
    console.log("DESCRIPTION:",props);
    return (
        
        <div className="description">

           <nav> <button style={{backgroundColor:"lightblue",width:"100px",height:"30px",borderRadius:"10px",cursor:"pointer",color:"white"}} onClick={()=>{ window.history.back()}}> Back </button></nav> 
     <br/>
          <header> 
           <p> {props.news &&  props.news.title}  </p> <br/>
          <img src={ props.news &&  props.news.urlToImage} alt=""/> 
          </header>
        <div className="desc">
            <p>{ props.news &&  props.news.description} </p>
        </div>
        </div> 
    )
}

export default Description
