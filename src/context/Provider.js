import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/auth';
import authReducer from './reducers/auth';
import contactsReducer from './reducers/contacts';
import contactsIntialState from './initialStates/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsIntialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, authDispatch, contactsState, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
