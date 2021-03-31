import React, { useState ,useEffect} from 'react'
import Header from '../subcomponent/Header'
import Sidebar from '../subcomponent/Sidebar'
import Newsbody from '../subcomponent/Newsbody'
import '../../Style/dashboard.css'
import {News_Order_by_cat ,HeadlineData} from '../../API/newsApi'
import { useLocation ,useHistory } from "react-router-dom"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Dashboard = () => {
  
  let params = useLocation();
 params =  queryString.parse(params.search);
  const [Headline,setHeadline] =useState();
  const [News,setNews] = useState();
    
  // BackDrop Handler
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
   
  // AUTHENTICATION HANDLER

 
  
  const CategoryHandler=(e)=>{


    handleToggle()

    //  add selected class to active button
    const element = document.getElementsByTagName('li');
  Array.from(element).forEach(element => {

    
    element.classList.remove('selected')
  }) 
  e.target.classList.add('selected') 
    
  
    
  News_Order_by_cat(e.target.id)
    .then(data=>
      {
        let lightboxImgElem = document.getElementsByClassName('newsBody')[0].querySelectorAll("img");
        lightboxImgElem.forEach((img)=>{img.src=""}) 
        setNews(data)
        
        
        window.scrollTo(0, 0)
        handleClose()
          })
          .catch(err=>{ console.log(err) } )
          
        }
        
        
        
        
        // News Detail By CATEGORY
        
        useEffect(() => {
       
          News_Order_by_cat()
          .then(data=>
        { 
          
          setNews(data)
          
        })
        .catch(err=>{ console.log(err) })

        
   }, [])
   

// Headline News

useEffect(() => {
   
    HeadlineData()
    .then(data=>
      { 
   
        setHeadline(data)
        
        })
        .catch(err=>{ console.log(err) })
        
      }, [])
      

    return (
      <div className="newsDashboard">
          <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
            <Header/>
            <Sidebar CategoryHandler={CategoryHandler}/>
            <Newsbody news={News} headline={Headline} id={params.id}/>
        </div>
    )
}

export default Dashboard
