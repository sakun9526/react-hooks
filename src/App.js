import React from 'react';

//================================== USE STATE HOOK ===========================================//
// import HookCounter from "./components/UseStateHook/HookCounter";
//import StateCounterPrev from './components/UseStateHook/StateCounterPrev'
// import StateWithObject from './components/UseStateHook/StateWithObject'
//import StateWithArray from './components/UseStateHook/StateWithArray'

//================================== USE EFFECT HOOK ==========================================//
//import ConditionalRun from './components/UseEffectHook/ConditionalRun'
//import IncorrectDependency from './components/UseEffectHook/IncorrectDependency'
//import FetchAllPosts from './components/UseEffectHook/FetchAllPosts'
import FetchSinglePost from './components/UseEffectHook/FetchSinglePost'

function App() {
  return (
    <div className="App">
      <FetchSinglePost/>
    </div>
  );
}

export default App;
