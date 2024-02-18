import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const useUserDataContext = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
