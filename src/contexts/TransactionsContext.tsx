import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
    id: number;
    description: string;
    category: string,
    type: "income" | "outcome";
    price: number;
    createdAt: string;
}

interface TransactionsContextProps {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps ) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function carregaDadosIniciaisTransacoes() {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
    
        setTransactions(data);
    }
    
    useEffect(() => {
        carregaDadosIniciaisTransacoes();
    }, [])
    

    return(
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}