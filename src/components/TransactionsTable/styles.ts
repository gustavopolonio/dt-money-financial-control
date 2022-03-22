import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0 0.5rem;
    color: var(--text-body);

    th, td {
      padding: 1.5rem 2rem;
    }

    th {
      font-weight: 400;
    }

    td {
      background: var(--shape);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0rem 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`