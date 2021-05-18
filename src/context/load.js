import React, { useState } from 'react'

const LoadContext = React.createContext()

const LoadProvider = ({ children }) => {
    const [load, setLoad] = useState(true);
 

    return (
        <LoadContext.Provider value={{load, setLoad}}>
            {children}
        </LoadContext.Provider>
    )
}

export { LoadContext, LoadProvider } 