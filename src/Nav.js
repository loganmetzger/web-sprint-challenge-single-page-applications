import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return(
        <div>
            <h1>Lambda Eats</h1>
            <Link to="/">Home</Link>
            <Link to="/form">Order Some Za</Link>
        </div>
    )
}