import { createContext, useContext } from "react";

const ShowContext = createContext();

const ShowProvider = ({ children }) => {
  const getShowId = () => {
    let id = localStorage.getItem("id");
    if (id) {
      return JSON.parse(localStorage.getItem("id"));
    } else {
      return [];
    }
  };
 
  return <ShowContext.Provider value={{getShowId}}>{children}</ShowContext.Provider>;
};

const useShow = () => useContext(ShowContext);
export { useShow, ShowProvider };
