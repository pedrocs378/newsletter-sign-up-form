import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.sizes[4]} 0;
  align-self: center;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.xs};

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
