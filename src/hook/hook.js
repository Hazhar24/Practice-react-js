
import React from 'react'
import { useState } from 'react'



export default function Hook() {

    const [hazhar, sethazhar] = useState(24)

    const minusCount = () => {
        sethazhar(hazhar-1)
    }
     const pluseCount = () => {
         sethazhar(hazhar+1)
     }

    return (
        <div>
            <button onClick={minusCount}>-</button>
            <h1> {hazhar} </h1>
            <button onClick={pluseCount}>+</button>
        </div>
    )
}
