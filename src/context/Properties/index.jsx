import { createContext, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "refetch":
      return { ...state, refetch: payload };
    default:
      return state;
  }
};

export const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
