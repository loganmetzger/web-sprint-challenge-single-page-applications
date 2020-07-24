import React from 'react'


export default function Complete(props) {

    const {pizza} = props

    return(
        <div>
            <p>Congrats! Pizza is on it's way!</p>
            {pizza.map(za => {
                return(
                    <div> 
                        <h3>{za.name}</h3>
                        <p>{za.size}</p>
                        {za.pineapple && <p>Pineapple</p>}
                        {za.salami && <p>Salami</p>}
                        {za.anchovies && <p>Anchovies</p>}
                        {za.cheese && <p>Cheese</p>}
                    </div>
                )
            })}
        </div>
    )
}