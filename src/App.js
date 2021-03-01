import React from 'react';

//================================== USE STATE HOOK ===========================================//
// import HookCounter from "./components/UseStateHook/HookCounter";
//import StateCounterPrev from './components/UseStateHook/StateCounterPrev'
// import StateWithObject from './components/UseStateHook/StateWithObject'
//import StateWithArray from './components/UseStateHook/StateWithArray'
//import DataFetchingWithUseEffect from './components/UseStateHook/DataFetchingWithUseEffect'

//================================== USE EFFECT HOOK ==========================================//
//import ConditionalRun from './components/UseEffectHook/ConditionalRun'
//import IncorrectDependency from './components/UseEffectHook/IncorrectDependency'
//import FetchAllPosts from './components/UseEffectHook/FetchAllPosts'
//import FetchSinglePost from './components/UseEffectHook/FetchSinglePost'

//================================== USE CONTEXT HOOK ========================================//
// import ComponentA from './components/UseContextHook/ComponentA'
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

//================================== USE REDUCER HOOK ========================================//
//import ReducerCounter from './components/UseReducerHook/ReducerCounter'
//import UseReducerContext from './components/UseReducerHook/UseReducerContext/UseReducerContext'
//import DataFetchingWithUseReducer from './components/UseReducerHook/DataFetchingWithUseReducer'

//================================= USE CALLBACK HOOK ========================================//
import ParentComponent from './components/UseCallbackHook/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComponent/>

    {/*------------------ useContext Hook code --------------------*/}
      {/* <UserContext.Provider value={'Sakun'}>
        <ChannelContext.Provider value={'Coding fun'}>
            <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
       
    </div>
  );
}

export default App;
