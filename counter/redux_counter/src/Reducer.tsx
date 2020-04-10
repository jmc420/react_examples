import { Action, createStore, Reducer } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export enum ActionType {
  Reset,
  DecrementCount,
  IncrementCount,
  DecrementStopWatch
}


export interface ICountState {
  counter: number;
  stopWatch: number;
}

export const initialState: ICountState = { counter: 0, stopWatch: 10 };

export interface DispatchAction extends Action {
  payload: Partial<ICountState>;
}

export const reducer: Reducer<ICountState, DispatchAction> = (state: ICountState = initialState, action: DispatchAction): ICountState => {
  switch (action.type) {
    case ActionType.Reset:
      return initialState;
    case ActionType.IncrementCount:
      return { ...state, counter: state.counter + 1 };
    case ActionType.DecrementCount:
      return { ...state, counter: state.counter - 1 };
    case ActionType.DecrementStopWatch:
      if (state.stopWatch > 0) {
        return { ...state, stopWatch: state.stopWatch - 1 };
      }
      return initialState;
    default:
      return state;
  }
}

export const countStateSelector: TypedUseSelectorHook<ICountState> = useSelector;

export const store = createStore(reducer);