import React from "react";

const Context = React.createContext();

const UserContext = () => {
  const [name, setName] = useState("");
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default UserContext;
