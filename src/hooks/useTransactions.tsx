import { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number,
  title: string,
  value: number,
  category: string,
  type: string,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (data: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(data: TransactionInput) {
    const response = await api.post('transactions', {
      ...data,
      createdAt: new Date()
    })

    setTransactions([
      ...transactions,
      response.data.transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
} 