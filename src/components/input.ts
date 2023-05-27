import styled from 'styled-components'

export const Input = styled.input`
  padding: ${({ theme }) => theme.sizes[4]} ${({ theme }) => theme.sizes[6]};

  color: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;

  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.darkGray};
  }
`
