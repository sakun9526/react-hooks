import React, {useContext} from 'react'
import {CountContext} from './UseReducerContext'

function ComponentC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentC - {countContext.countState}
            <button onClick= {()=> countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentC
