import styled from 'styled-components'

export const SuccessSubscribeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-self: stretch;

  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes[6]};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[10]};

  @media (min-width: 768px) {
    max-width: 500px;
    align-self: center;
    padding: ${({ theme }) => theme.sizes[16]};

    border-radius: 32px;
  }
`

export const SuccessMessage = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes[10]};

  img {
    width: ${({ theme }) => theme.sizes[16]};
    height: ${({ theme }) => theme.sizes[16]};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  p {
    line-height: 1.5;
  }
`
