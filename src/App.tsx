import { Header } from './components/Header/index'
import { NewTransactionModal } from './components/NewTransactionModal/index'
import { Dashboard } from './components/Dashboard/index'
import { useState } from 'react'
import Modal from 'react-modal'
import { TransactionsProvider } from './hooks/useTransactions'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseModal} />
    </TransactionsProvider>
  );
}