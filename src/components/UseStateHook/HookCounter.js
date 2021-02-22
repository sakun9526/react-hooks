import React, {useState} from 'react';

function HookCounter() {
    const [Count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>setCount(Count+1)}>Count {Count}</button>
        </div>
    )
}

export default HookCounter;

/* 

    This example shows about how to use "useState hook" 

    const [current value of the state property, method that change state property] = useState(initial value)


*/