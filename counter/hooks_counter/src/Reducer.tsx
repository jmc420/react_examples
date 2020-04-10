import {Dispatch} from "react";

export type ActionType = {
    type: 'reset' | 'decrement_count' | 'increment_count' |'decrement_stopwatch' 
  }

export interface ICountState {
    counter: number;
    stopWatch: number;
}

export interface IStateDispatchProps {
    countState:ICountState;
    dispatch:Dispatch<ActionType>;
}

export const initialState:ICountState = { counter: 0, stopWatch:10 };

export function reducer(state:ICountState, action:ActionType):ICountState {
    switch (action.type) {
      case 'reset':
        return initialState;
      case 'increment_count':
        return { ...state, counter: state.counter + 1};
      case 'decrement_count':
        return { ...state, counter: state.counter - 1 };
        case 'decrement_stopwatch':
          if (state.stopWatch > 0) {
            return { ...state, stopWatch: state.stopWatch - 1 };
          }
          return initialState;
      default:
        return state;
    }
  }