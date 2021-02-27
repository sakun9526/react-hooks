import React, {useContext} from 'react'
import {CountContext} from './UseReducerContext'
import ComponentB from './ComponentB'

function ComponentA() {
    const countContext = useContext(CountContext)

    return (
        <div>
            ComponentA - {countContext.countState}

            <button onClick= {()=> countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>

            <ComponentB/>
        </div>
    )
}

export default ComponentA
