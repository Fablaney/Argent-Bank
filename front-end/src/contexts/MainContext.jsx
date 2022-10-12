import React, { createContext } from "react"
import { useState } from "react"

const MainContext = createContext()

function MainContextProvider({children})
{
    const [jwt, setJwt] = useState(' ')

    return (
        <MainContext.Provider value={{jwt, setJwt}}>
            {children}
        </MainContext.Provider> 
    )
}
export { MainContextProvider, MainContext }