import React, { useEffect, useState } from 'react'
import '../../Style/headline.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const Headline = (props) => {


    console.log("Headline",props);

    const [CurrentHeadline,setHeadline] =useState('Loading......')
    const [HeadlineId,setHeadlineId] = useState(0)
    useEffect(()=>{

    props.news!= undefined && setHeadline(props.news.articles[HeadlineId].title)
       
    },[props])

    const Change =()=>{

        if(props!=undefined && HeadlineId<8)
        {
                          let index = HeadlineId +1;
             setHeadline(props.news.articles[index].title)
             setHeadlineId(  index )

         }

    }




    return (
        <div className="headline">
        <p>  <Link to={`/h${HeadlineId}`} style={{color:"black",textTransform:"capitalize",textDecoration:"none"}}>    {CurrentHeadline}  </Link></p> 
           <button onClick={()=>{Change()}}> 
            <FontAwesomeIcon  className="next" icon={faAngleDoubleRight} />
           </button>
        </div>
    )
}

export default Headline
