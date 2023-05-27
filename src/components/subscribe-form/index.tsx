import { FormEvent, useState } from 'react'
import { useBreakpoint } from 'use-breakpoint'

import { FormControl } from '../form-control'
import { Input } from '../input'
import { Button } from '../button'
import { List } from '../list'
import { Row } from '../row'

import desktopImg from '../../assets/illustration-sign-up-desktop.svg'
import mobileImg from '../../assets/illustration-sign-up-mobile.svg'

import * as S from './styles'
import { SuccessSubscribe } from '../success-subscribe'

const breakpoints = { mobile: 0, tablet: 768, desktop: 1280 }

type FieldError = {
  message: string
}

type Errors = {
  email?: FieldError
}

export function SubscribeForm() {
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  const { breakpoint } = useBreakpoint(breakpoints)

  const isMobile = breakpoint === 'mobile'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const email = formData.get('email')

    if (!email) {
      return setErrors({ email: { message: 'Email is required' } })
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const normalizedEmail = email.toString().trim()
    const isEmailValid = emailRegex.test(normalizedEmail)

    if (!isEmailValid) {
      return setErrors({ email: { message: 'Valid email required' } })
    }

    setSubscribedEmail(normalizedEmail)
    setErrors({})
  }

  return subscribedEmail ? (
    <SuccessSubscribe
      email={subscribedEmail}
      onSubmissClick={() => setSubscribedEmail(null)}
    />
  ) : (
    <S.FormContainer>
      <S.LeftContent>
        <S.Infos>
          <h1>Stay updated!</h1>

          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <List.Root>
            <List.Item>
              {' '}
              <List.Icon /> Product discovery and building what matters
            </List.Item>
            <List.Item>
              <List.Icon />
              Measuring to ensure updates are a success
            </List.Item>
            <List.Item>
              {' '}
              <List.Icon />
              And much more!
            </List.Item>
          </List.Root>
        </S.Infos>

        <S.Form onSubmit={handleSubmit}>
          <FormControl.Root isInvalid={!!errors.email}>
            <Row>
              <FormControl.Label htmlFor="email">
                Email address
              </FormControl.Label>

              <FormControl.ErrorMessage>
                {errors.email?.message}
              </FormControl.ErrorMessage>
            </Row>

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="email@company.com"
            />
          </FormControl.Root>

          <Button type="submit">Subscribe to monthly newsletter</Button>
        </S.Form>
      </S.LeftContent>

      <S.RightImage src={isMobile ? mobileImg : desktopImg} alt="" />
    </S.FormContainer>
  )
}
