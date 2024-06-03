'use client'

import { useState, createContext } from 'react';

export const CompareContext = createContext([]);

const CompareProvider = ({ children }) => {

    const [stocks, setStocks] = useState([]);
    const addStock = (stock) => {
        setStocks(state => [
            ...state,
            stock
        ])
    }

    const removeStock = (stock) => {
        setStocks(state => {
            return state.filter((prevStock) => prevStock !== stock);
        })
    }

    const value = {stocks, addStock, removeStock}

    return (
        <CompareContext.Provider value={value}>
            {children}
        </CompareContext.Provider >
    )
}

export default CompareProvider