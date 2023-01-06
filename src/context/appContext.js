import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/appReducer";
import data from "../data";

const AppContext = createContext();
const initialState = {
  filterProducts: [],
  loading: true,
  allrooms: [],
  filters: {
    roomType: "all",
    guests: "all",
    roomPrice: 0,
    roomSize: "all",
    breakfast: "false",
    pets: "false",
    minPrice: 0,
    maxPrice: 0,
  },
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getRooms = () => {
    return dispatch({ type: "SET_ALL_ROOMS", payload: data });
  };

  const valueChange = (e) => {
    const { name, value } = e.target;
    return dispatch({ type: "SET_FILTER_VALUE", payload: { name, value } });
  };

  const setFilterProd = () => {
    return dispatch({ type: "SET_FILTER_PROD" });
  };

  useEffect(() => {
    getRooms();
  }, [data]);

  useEffect(() => {
    setFilterProd();
  }, [state.filters]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getRooms,
        valueChange,
        setFilterProd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
