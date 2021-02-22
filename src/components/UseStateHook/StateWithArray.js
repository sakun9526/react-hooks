import React, {useState} from 'react'

function StateWithArray() {
    const [Items, setItems] = useState([])

    const addItem = () => {
        //make a copy of all the items in the array using spread operator
        setItems([...Items, {
            id : Items.length,
            value : Math.floor(Math.random()*10) + 1 //random number between 1 and 10
        }])
    } 
    
    return (
        <div>
            <button onClick={addItem}>Add item</button>

            <ul>
                {
                    Items.map(Item => (
                        <li key={Item.id}>{Item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StateWithArray
