import React from 'react';

//================================== USE STATE HOOK ===========================================//
// import HookCounter from "./components/UseStateHook/HookCounter";
//import StateCounterPrev from './components/UseStateHook/StateCounterPrev'
// import StateWithObject from './components/UseStateHook/StateWithObject'
//import StateWithArray from './components/UseStateHook/StateWithArray'

//================================== USE EFFECT HOOK ==========================================//
//import ConditionalRun from './components/UseEffectHook/ConditionalRun'
//import IncorrectDependency from './components/UseEffectHook/IncorrectDependency'
import FetchAllPosts from './components/UseEffectHook/FetchAllPosts'

function App() {
  return (
    <div className="App">
      <FetchAllPosts/>
    </div>
  );
}

export default App;
