import React, {useState, useEffect} from 'react'

function IncorrectDependency() {
    const [Count, setCount] = useState(0)

    const tick = () => {
        setCount(Count + 1 )
    }

    useEffect(() => {
        //effect
        const interval = setInterval(tick, 1000)
        return () => {
            //cleanup
            clearInterval(interval)
        }
    }, [Count])
    return (
        <div>
            {Count}
        </div>
    )
}

export default IncorrectDependency
