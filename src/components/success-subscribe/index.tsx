import { Button } from '../button'

import checkIcon from '../../assets/icon-list.svg'

import * as S from './styles'

type SuccessSubscribeProps = {
  email: string
  onSubmissClick?: () => void
}

export function SuccessSubscribe({
  email,
  onSubmissClick,
}: SuccessSubscribeProps) {
  return (
    <S.SuccessSubscribeContainer>
      <S.SuccessMessage>
        <img src={checkIcon} alt="" />

        <h2>Thanks for subscribing!</h2>

        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </S.SuccessMessage>

      <Button onClick={onSubmissClick}>Dismiss message</Button>
    </S.SuccessSubscribeContainer>
  )
}
