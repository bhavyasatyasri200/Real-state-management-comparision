import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

const initialState = {
  name: "John Doe",
  isLoggedIn: true
};

function userReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
