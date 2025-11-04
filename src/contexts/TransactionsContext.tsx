import { useEffect, useState, type ReactNode, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
    id: number;
    description: string;
    category: string,
    type: "income" | "outcome";
    price: number;
    createdAt: string;
}

interface CreateNewTransactionProps {
    description: string;
    category: string,
    type: "income" | "outcome";
    price: number;
}

interface TransactionsContextProps {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    updateTransactions: (data: CreateNewTransactionProps) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}


export const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps ) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetchTransactions();
    }, [])
    
    const fetchTransactions = useCallback(async (query?: string) => {

        const response = await api.get("/transactions", {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                description: query,
            }
        })

        setTransactions(response.data);
    }, [])

    const updateTransactions = useCallback(async (data: CreateNewTransactionProps) => {
        const {description, category, price, type} = data;

        const response = await api.post("/transactions", {
            description,
            category,
            price,
            type,
            createdAt: new Date().toISOString()
        })

        setTransactions(state => [response.data, ...state]);
    }, [])

    
    

    return(
        <TransactionsContext.Provider value={{transactions, fetchTransactions, updateTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}