import React from "react";
import { IStateDispatchProps } from "./Reducer";

export default function Counter(props:IStateDispatchProps) {
    const countState = props.countState;
    const dispatch = props.dispatch;

    console.log("Counter "+JSON.stringify(countState));

    return (
        <div>
            <button className="inc" onClick={() => dispatch({ type: 'increment_count' })}>
                Increment!
          </button>
            <button className="dec" onClick={() => dispatch({ type: 'decrement_count' })}>
                Decrement!
          </button>
            <button className="reset" onClick={() => dispatch({ type: 'reset' })}>
                Reset
          </button>
            <h1>Current Count: {countState.counter}</h1>
        </div>
    );

}