import React from 'react'

import {Card ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import news from '../../News.jpg'

const ChildCard = (props) => {
    return (
        
        <section className="child">
    {/* Here We will look card of some news */}

    <Card style={{ width: '80%',height:"200px",padding:"20px 20px 0px 40px",display:"flex",justifyContent:"space-between" }} className="ChildCard" >
   
<Card.Body>
<Card.Text style={{margin:"10px 0px 20px 0px",fontFamily:"Elephant",color:"#575757" }}>
{ props.news!= undefined ? props.news.title : null }
</Card.Text>
<Link  style={{marginTop:"40px",display:"inline-block",textDecoration:"none",color:"#38a6f5",fontFamily:"Cooper"}} to={`/?id=${props.id}`}>Read more</Link>
</Card.Body>

<Card.Img variant="top" src={props!=null ?  props.news.urlToImage : null} style={{marginRight:"20px"}} />
</Card>

</section>
    )
}

export default ChildCard
