import React from 'react'
import {useParams} from 'react-router-dom'

const ErrorPage = () => {
    const {id} = useParams()
    console.log("ID:",id);
    return (
        <div>
            Error Page Hai mere sot
        </div>
    )
}

export default ErrorPage
