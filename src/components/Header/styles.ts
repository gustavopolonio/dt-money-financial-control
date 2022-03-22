import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    color: var(--shape);
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: .25rem;
    border: none;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`