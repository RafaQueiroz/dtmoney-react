import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id : number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionContextProps {
    children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export const TransactionContextProvider = function({children}: TransactionContextProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return(
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}