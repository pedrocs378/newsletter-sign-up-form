import styled from 'styled-components'

import listIcon from '../assets/icon-list.svg'

const Root = styled.ul`
  list-style: none;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[4]};

  & + li {
    margin-top: ${({ theme }) => theme.sizes[2]};
  }
`

const Icon = styled.img``

Icon.defaultProps = {
  src: listIcon,
  alt: '',
}

export const List = {
  Root,
  Item,
  Icon,
}
