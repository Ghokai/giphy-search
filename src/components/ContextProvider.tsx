import React, { useReducer, Dispatch } from "react";
import { getInitialState, reducer, AppState, Action } from "../store/state";

interface ContextState extends AppState {
  dispatch: Dispatch<Action>;
}

const initialContextState = {
  ...getInitialState(),
  dispatch: (action: Action) => {}
};

export const AppContext = React.createContext<ContextState>(
  initialContextState
);

const ContextProvider: React.FC = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
