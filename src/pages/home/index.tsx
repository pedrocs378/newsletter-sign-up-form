import { SubscribeForm } from '../../components/subscribe-form'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <S.Main>
        <SubscribeForm />
      </S.Main>

      <S.Footer>
        <span>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer noopener"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/pedrocs378"
            target="_blank"
            rel="noreferrer noopener"
          >
            @pedrocs378
          </a>
          .
        </span>
      </S.Footer>
    </S.HomeContainer>
  )
}
