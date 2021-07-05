import React from 'react'
import './Resps.css'

interface JokeProps{
    jokess?:string
}


function Resps(props: JokeProps) {
    return (
        <div className="container-resp">
            <h1>{props.jokess}</h1>
        </div>
    )
}

export default Resps
