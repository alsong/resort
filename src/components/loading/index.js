import React from 'react'
import Loading from './../../images/gif/loading-arrow.gif'

export default function index() {
    return (
        <div className="loading">
            <h4>rooms data loading....</h4>
            <img src={Loading} alt="loading"/>
        </div>
    )
}
