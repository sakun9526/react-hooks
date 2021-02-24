import React, {useState, useEffect}from 'react'

function ConditionalRun() {
    const [Count, setCount] = useState(0)
    const [Name, setName] = useState('')
    useEffect(() => {
        console.log("useEffect - updating document title")
        document.title = `You clicked ${Count} times`
    }, [Count])


    return (
        <div>
            <input 
                type="text"
                value={Name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={()=>setCount(Count + 1 )}>Clicked {Count} times</button>        
        </div>
    )
}

export default ConditionalRun
