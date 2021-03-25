import React from 'react'
import '../../Style/news.css'
import ChildCard from '../NewsComponent/ChildCard'
import ParentCard from '../NewsComponent/ParentCard'
const News = (props) => {

     let parent,child
   
   if(props.news!= undefined)
   {
        parent = props.news.articles[0]
       child =  props.news.articles.filter((data,index)=>index!=0?data:false) 
   }

    return (
        <div className="news">
            
           <h4>  <span> [</span>   Topic News  <span> ]</span> </h4>

         <ParentCard  news={parent} id={0}/>

         { child &&  child.map((data ,index)=> <ChildCard news={data} key={index} id={++index}/>  )}
         
         
        </div>
    )
}

export default News
