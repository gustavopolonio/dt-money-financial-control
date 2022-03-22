import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background);
    border: 1px solid var(--input-border);
    padding: 0 1.5rem;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    height: 4rem;
    color: var(--shape);
    font-weight: 600;
    margin-top: 1.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const NewTransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean,
  activeColor: string
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive ? transparentize(0.8, props.activeColor) : 'transparent'};
  border: 1.5px solid var(--input-border);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }

`