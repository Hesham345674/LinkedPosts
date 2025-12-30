import { createContext, useState } from "react";


export const  CounterContext = createContext()


export default function CounterContextProvider(){

    const [count, setCount] =useState(0);


    return <CounterContextProvider>


        
    </CounterContextProvider>
}