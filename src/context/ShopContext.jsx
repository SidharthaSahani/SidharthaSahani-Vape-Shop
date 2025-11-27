import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const currency = "Rs";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const values = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
