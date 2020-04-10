import React, { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { ActionType, countStateSelector } from "./Reducer";

// Functional approach has problem that timer keeps getting interrupted by rerender 

function StopWatchFN() {
    const dispatch = useDispatch();
    const stopWatch = countStateSelector(store => store.stopWatch);
    const stopWatchRef = useRef(stopWatch)

    console.log("Stopwatch " + JSON.stringify(stopWatch));

    useEffect(() => () => {
        stopWatchRef.current = stopWatch;
    }, [stopWatch]);

    useEffect(() => {
        const timeId = setInterval(() => {
            console.log("Timeout " + JSON.stringify(stopWatchRef.current));
            dispatch({ type: ActionType.DecrementStopWatch });
        }, 1000);

        return () => {
            console.log("Finish timer");
            clearTimeout(timeId);
        };

        // using empty array means that timer will not finish ar rerender
        // add countState will cause timer will end on every re-render
    }, []);

    return (
        <div>
            <h1>Stopwatch Count: {stopWatch}</h1>
        </div>
    );

}

export default StopWatchFN;

