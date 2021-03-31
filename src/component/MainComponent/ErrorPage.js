import React from 'react'
import {useParams} from 'react-router-dom'

const ErrorPage = () => {
    const {id} = useParams()
    console.log("ID:",id);
    return (
        <div>
          <h1>  
          
            Error Page 404
          </h1>
        </div>
    )
}

export default ErrorPage
