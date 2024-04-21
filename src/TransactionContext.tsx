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

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => void
}

interface TransactionContextProps {
    children: ReactNode;
}

// Define um tipo omitindo algumas propriedades.
// É Possível utilizar tbm o Pick para selecionar quais propriedades são desejadas.
// type TransactionContextData = Pick<Transaction, 'title' | 'amount'>;
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionContext = createContext<TransactionContextData>(
    // cast necessario para que o typescript não aponte erro na inicização do contexto vazio.
    {} as TransactionContextData 
);

export const TransactionContextProvider = function({children}: TransactionContextProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', {
            ...transactionInput, 
            createdAt: new Date()
        });
        const { transaction: newTransaction } = response.data;
    
        // Garantir a imutabilidade.
        setTransactions([
            ...transactions, // copia todos os itens existentes no array.
            newTransaction
        ])
    }

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}