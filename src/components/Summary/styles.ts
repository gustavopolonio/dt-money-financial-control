import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: -6rem;

  > div {
    padding: 1.5rem 1.2rem 1rem 2rem;
    border-radius: 0.25rem;

    background: var(--shape);
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      font-weight: 500;
      font-size: 2.25rem;
      display: block;
      line-height: 3.37rem;
      margin-top: 0.5rem;
    }

    &.highlited-background {
      background: var(--green);
      color: var(--shape);

      &-red {
        background: var(--red);
        color: var(--shape);
      }
    }
  }
`