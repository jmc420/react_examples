import React from "react";
import { useDispatch } from 'react-redux';
import { ActionType, countStateSelector } from "./Reducer";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = countStateSelector(store => store.counter);

    console.log("Counter "+JSON.stringify(counter));

    return (
        <div>
            <button className="inc" onClick={() => dispatch({ type: ActionType.IncrementCount })}>
                Increment!
          </button>
            <button className="dec" onClick={() => dispatch({ type: ActionType.DecrementCount })}>
                Decrement!
          </button>
            <button className="reset" onClick={() => dispatch({ type: ActionType.Reset})}>
                Reset
          </button>
            <h1>Current Count: {counter}</h1>
        </div>
    );

}