import React, { createContext, useState } from 'react';

// Create the context
export const ModelContext = createContext({
    model:null,
    setModel:()=>{},
    selectedDetailsId:()=>{},
    SetSelectedDetailsId:null    
});

// Create the provider component
export const ModelProvider = ({ children }) => {
    const [model,setModel] = useState()
    const [selectedDetailsId,SetSelectedDetailsId] = useState()

    return (
        <ModelContext.Provider value={{ 
            model,
            setModel,
            selectedDetailsId,
            SetSelectedDetailsId

        }}>
            {children}
        </ModelContext.Provider>
    );
};