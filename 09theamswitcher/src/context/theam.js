import React, {createContext, useContext} from "react";

export const TheamContext = createContext({
    theamMode: "light",
    darkTheam: () => {},
    lightTheam: () => {}
})

export const TheamProvidor = TheamContext.Provider

export default function usetheam(){
    return useContext(TheamContext)
}