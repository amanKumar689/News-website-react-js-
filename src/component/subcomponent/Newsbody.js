import React from 'react'
import '../../Style/newsBody.css'
import Headline from './Headline'
import News from './News'
import Description from '../NewsComponent/Description'






const Newsbody = (props) => {
  
  const exp = new RegExp(/h\d/,'i')
  const Result = props.id && exp.exec(props.id)!=undefined  && exp.exec(props.id).input.slice(1)
  console.log("Result:",Result,props.id);
  //  {/* I have to Re render all the stuff when We get Some params */}
  // console.log("NEWS:", props.news &&  props.news.articles[0]);
 const element = !props.id
  ? (<div className="newsBody"> <Headline news={props.headline}/> <News news={props.news} /> </div>) // SIMPLE RENDERNING
                                                                                                    //   1.Headline and 2. NEWS
 : Result 
     ? ( <div className="newsBody">
     <Description news={props.news && Result!=undefined && props.headline.articles[Result]}/> </div> )
  : ( <div className="newsBody">
  <Description news={props.news &&  props.news.articles[props.id]}/> </div> )       
         
  return element
       
    
  }

export default Newsbody
