import React from "react";
import { Provider } from 'react-redux';
import "./App.css";
import { store } from "./Reducer";
import Counter from "./Counter";
import StopWatch from "./StopWatch";

function App() {

  console.log("App render")

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
          <StopWatch />

        </header>
      </div>
    </Provider>
  );
}

export default App;
