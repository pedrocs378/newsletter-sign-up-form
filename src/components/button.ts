import styled from 'styled-components'

export const Button = styled.button`
  border: 0;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.sizes[5]};
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 30px rgba(255, 98, 87, 0.6);
  }
`

Button.defaultProps = {
  type: 'button',
}
