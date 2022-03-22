import Modal from 'react-modal'
import { useState, FormEvent } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, NewTransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const { createTransaction } = useTransactions()

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    await createTransaction(data)

    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return(
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close-button" onClick={onRequestClose}>
        <img src={closeImg} alt="Close" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={event => setTitle(event.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Value"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <NewTransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='#12A454'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='#E62E4D'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </NewTransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}