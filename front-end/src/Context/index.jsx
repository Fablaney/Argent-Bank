import React, { createContext } from "react"
import { useState } from "react"
import { useContext } from "react"

const MainContext = createContext()

function mainContextProvider({children})
{
    const [jwt, setJwt] = useState("")

    return (
        <MainContext.Provider value={{jwt, setJwt}}>
            {children}
        </MainContext.Provider> 
    )
}
export default {mainContextProvider, MainContext}