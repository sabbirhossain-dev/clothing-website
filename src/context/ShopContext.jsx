import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext()

const ShopContextProvider =(props)=>{


    const currency = "$"
    const delivery_charge = 10

    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)

    const value = {
        products , currency, delivery_charge, search, setSearch, showSearch, setShowSearch
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider