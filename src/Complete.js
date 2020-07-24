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
                        {
                            (za.size === "s") ? <p>Small</p>
                            : (za.size === "m") ? <p>Medium</p>
                            : <p>Large</p>

                        }
                        {za.pineapple && <p>Pineapple</p>}
                        {za.salami && <p>Salami</p>}
                        {za.anchovies && <p>Anchovies</p>}
                        {za.cheese && <p>Cheese</p>}
                        {za.glutenFree && <p>GlutenFree</p>}
                    </div>
                )
            })}
        </div>
    )
}