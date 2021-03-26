import React from 'react'

import {Card ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Dashboard from '../MainComponent/Dashboard'
import news from '../../News.jpg'

const ParentCard = (props) => {
    return (
        <section className="parent"> 
        {/* This is a card */}
        <Card style={{ width: '90%' }}>
<Card.Img variant="top" src={props.news && props.news.urlToImage }  />
<Card.Body>

 <Card.Text style={{margin:"10px 0px 20px 20px",fontFamily:"Elephant",color:"#575757" }}>
   { props.news!= undefined ? props.news.title : null }
 </Card.Text>
 <Link  style={{float:"right",marginBottom:"10px",textDecoration:"none",color:"#38a6f5",fontFamily:"Cooper"}}  to={`/?id=${props.id}`} >Read more</Link>
</Card.Body>
</Card>
        </section>
    )
}

export default ParentCard
