import React, {useReducer} from "react";
import "./App.css";
import { initialState, reducer } from "./Reducer";
import Counter from "./Counter";
import StopWatch from "./StopWatch";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("App render")

  return (
    <div className="App">
      <header className="App-header">
        <Counter countState={state} dispatch={dispatch}/>

        <StopWatch countState={state} dispatch={dispatch}/>

      </header>
    </div>
  );
}

export default App;
