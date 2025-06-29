import React from 'react'

function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <h3  key={f.id}><li>{f.fruitName}</li></h3>)}
        </div>
    )
}

export default Fruits