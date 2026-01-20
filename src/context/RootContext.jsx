import { createContext, useState } from "react";

export const RootContext = createContext();

export const RootProvider = ({ children }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [rarezaSeleccionada, setRarezaSeleccionada] = useState(null);
    const [query, setQuery] = useState("");
    
    return (
        <RootContext.Provider value={{ 
            categoriaSeleccionada, 
            setCategoriaSeleccionada,
            rarezaSeleccionada,
            setRarezaSeleccionada,
            query,
            setQuery,
        }}>
            {children}
        </RootContext.Provider>
    );
};