import React from "react";
import "./App.css";

class App extends React.Component {
  private counter: Counter | null = null;
  private stopWatch: StopWatch | null = null;

  counterReset = () => {
    console.log("Reset counter " + this.counter);
    if (this.counter != null) {
      this.counter.resetCounter();
    }
  };

  stopWatchReset = () => {
    console.log("Reset stopwatch " + this.stopWatch);
    if (this.stopWatch != null) {
      this.stopWatch.resetCount();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter
            stopWatchReset={this.stopWatchReset}
            ref={ref => (this.counter = ref)}
          ></Counter>
          <StopWatch
            counterReset={this.counterReset}
            ref={ref => (this.stopWatch = ref)}
          ></StopWatch>
        </header>
      </div>
    );
  }
}

interface ICounterProps {
  stopWatchReset: Function;
}

interface ICounterState {
  count: number;
}

class Counter extends React.Component<ICounterProps> {
  constructor(props: ICounterProps) {
    super(props);

    let counterState: ICounterState = {
      count: 0
    };
    this.state = counterState;
  }

  // change code below this line

  increment() {
    let counterState: ICounterState = this.state as ICounterState;

    counterState.count++;
    this.setState(counterState);
  }

  decrement() {
    let counterState: ICounterState = this.state as ICounterState;

    counterState.count--;
    this.setState(counterState);
  }

  resetCounter() {
    let counterState: ICounterState = this.state as ICounterState;

    counterState.count = 0;
    this.setState(counterState);
  }

  reset() {
    this.resetCounter();
    this.props.stopWatchReset();
  }

  // change code above this line
  render() {
    let counterState: ICounterState = this.state as ICounterState;

    return (
      <div>
        <button className="inc" onClick={() => this.increment()}>
          Increment!
        </button>
        <button className="dec" onClick={() => this.decrement()}>
          Decrement!
        </button>
        <button className="reset" onClick={() => this.reset()}>
          Reset
        </button>
        <h1>Current Count: {counterState.count}</h1>
      </div>
    );
  }
}

interface IStopWatchProps {
  counterReset: Function;
}

interface IStopWatchState {
  count: number;
}

class StopWatch extends React.Component<IStopWatchProps> {
  constructor(props: IStopWatchProps) {
    super(props);

    let stopWatchState: IStopWatchState = {
      count: 10
    };
    this.state = stopWatchState;

    setInterval(() => {
      this.decrement();
    }, 1000);
  }

  decrement() {
    let stopWatchState: IStopWatchState = this.state as IStopWatchState;

    stopWatchState.count--;

    if (stopWatchState.count === 0) {
      this.reset();
    } else {
      this.setState(stopWatchState);
    }
  }

  resetCount() {
    let stopWatchState: IStopWatchState = this.state as IStopWatchState;

    stopWatchState.count = 10;
    this.setState(stopWatchState);
  }

  reset() {
    this.resetCount();
    this.props.counterReset();
  }

  render() {
    let stopWatchState: IStopWatchState = this.state as IStopWatchState;

    return (
      <div>
        <h1>Stopwatch Count: {stopWatchState.count}</h1>
      </div>
    );
  }
}

export default App;
