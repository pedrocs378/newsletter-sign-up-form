import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-self: stretch;
  grid-template-areas: 'image' 'form';

  background-color: ${({ theme }) => theme.colors.white};

  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.sizes[10]} ${({ theme }) => theme.sizes[15]};

  @media (min-width: 768px) {
    max-width: 930px;
    align-self: center;
    padding: ${({ theme }) => theme.sizes[6]};
    padding-left: ${({ theme }) => theme.sizes[16]};

    border-radius: 32px;

    grid-template-columns: 1fr max-content;
    grid-template-areas: 'form image';
  }
`

export const LeftContent = styled.div`
  grid-area: form;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.sizes[6]} ${({ theme }) => theme.sizes[10]};

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const RightImage = styled.img`
  grid-area: image;

  width: 100%;

  @media (min-width: 768px) {
    width: max-content;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[5]};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  p {
    line-height: 1.5;
  }
`

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.sizes[10]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[6]};
`
