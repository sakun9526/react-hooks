import React, {useState} from 'react'

function StateCounterPrev() {
    
    const initialCount = 0
    const [Count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1 )
        }
    }
    return (
        <div>
            Count : {Count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1 )}>increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={incrementFive}>increment by 5</button>
            
        </div>
    )
}

export default StateCounterPrev


/*
    This example is about useState Hook 
    in this example it shows a safer way to increment state when button is clicked
    prevCount takes the previous count and store it's state
*/
