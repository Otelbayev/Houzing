import UserDataProvider from "./UserDataContext";

const RootContext = ({ children }) => {
  return <UserDataProvider>{children}</UserDataProvider>;
};

export default RootContext;