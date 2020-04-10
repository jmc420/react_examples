import React, { useEffect, useRef } from "react";
import { ICountState, IStateDispatchProps } from "./Reducer";


// Functional approach has problem that timer keeps getting interrupted by rerender 

function StopWatchFN(props: IStateDispatchProps) {
    const countState = props.countState;
    const dispatch = props.dispatch;
    const countStateRef = useRef(countState)

    console.log("Stopwatch " + JSON.stringify(countState));

    useEffect(() => () => {
        countStateRef.current = countState;
      },[countState]);

    useEffect(() => {
        const timeId = setInterval(() => {
            console.log("Timeout " + JSON.stringify(countStateRef));
            dispatch({ type: 'decrement_stopwatch' });
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
            <h1>Stopwatch Count: {countState.stopWatch}</h1>
        </div>
    );

}

class StopWatch extends React.Component<IStateDispatchProps> {

    constructor(props: IStateDispatchProps) {
        super(props);

        this.state = props.countState;

        console.log("Stopwatch " + JSON.stringify(props.countState));

        setInterval(() => {
            let countState: ICountState = this.state as ICountState;

            console.log("Reset " + JSON.stringify(countState));
            props.dispatch({ type: 'decrement_stopwatch' });

        }, 1000);
    }

    static getDerivedStateFromProps(nextProps: IStateDispatchProps, prevState: ICountState) {
        prevState.stopWatch = nextProps.countState.stopWatch;

        return prevState;
    }

    render() {
        let countState: ICountState = this.state as ICountState;

        console.log("Render stopwatch" + JSON.stringify(countState));
        return (
            <div>
                <h1>Stopwatch Count: {countState.stopWatch}</h1>
            </div>
        );
    }
}

export default StopWatchFN;

// comment in to use class based 
//export default StopWatch;
