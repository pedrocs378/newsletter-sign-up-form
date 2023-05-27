import styled, { css, keyframes } from 'styled-components'

import { Input } from './input'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

type RootProps = {
  isInvalid?: boolean
}

const ErrorMessage = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};

  animation: ${fadeIn} 0.2s ease-in-out;
`

const Root = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[2]};

  ${ErrorMessage} {
    display: ${({ isInvalid }) => (isInvalid ? 'inline-block' : 'none')};
  }

  ${Input} {
    ${({ isInvalid }) =>
      isInvalid &&
      css`
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background-color: rgba(255, 98, 87, 0.2);
      `}
  }
`

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const FormControl = {
  Root,
  Label,
  ErrorMessage,
}
