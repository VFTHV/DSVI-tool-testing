'use client'

import React from 'react'
import validator, { StrongPasswordOptions } from 'validator'

const passwordRequirements: Partial<
  StrongPasswordOptions & { returnScore: false }
> = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
}

const resetDefaultRequirements: Partial<
  StrongPasswordOptions & { returnScore: false }
> = {
  minLength: 0,
  minLowercase: 0,
  minUppercase: 0,
  minNumbers: 0,
  minSymbols: 0,
}

type Props = {
  password: string
  confirmPassword?: string
}

export default function PasswordChecker({ password, confirmPassword }: Props) {
  const isValidLength = validator.isStrongPassword(password, {
    ...resetDefaultRequirements,
    minLength: 8,
  })
  const isValidLowercase = validator.isStrongPassword(password, {
    ...resetDefaultRequirements,
    minLowercase: 1,
  })
  const isValidUppercase = validator.isStrongPassword(password, {
    ...resetDefaultRequirements,
    minUppercase: 1,
  })
  const isValidNumbers = validator.isStrongPassword(password, {
    ...resetDefaultRequirements,
    minNumbers: 1,
  })
  const isValidSymbols = validator.isStrongPassword(password, {
    ...resetDefaultRequirements,
    minSymbols: 1,
  })
  const isNoSpaces = !validator.contains(password, ' ')

  const isMatching = password ? password === confirmPassword : false

  return (
    <div className="text-sm font-bold">
      <p className={isValidLength ? 'text-green-600' : 'text-red-600'}>
        At least {passwordRequirements.minLength} characters
      </p>
      <p className={isValidLowercase ? 'text-green-600' : 'text-red-600'}>
        At least {passwordRequirements.minLowercase} lower case character
      </p>
      <p className={isValidUppercase ? 'text-green-600' : 'text-red-600'}>
        At least {passwordRequirements.minUppercase} upper case character
      </p>
      <p className={isValidNumbers ? 'text-green-600' : 'text-red-600'}>
        At least {passwordRequirements.minNumbers} number
      </p>
      <p className={isValidSymbols ? 'text-green-600' : 'text-red-600'}>
        At least {passwordRequirements.minSymbols} special character
      </p>
      <p className={isNoSpaces ? 'text-green-600' : 'text-red-600'}>
        No spaces in password
      </p>
      {typeof confirmPassword !== 'undefined' && (
        <p className={isMatching ? 'text-green-600' : 'text-red-600'}>
          Password are matching
        </p>
      )}
    </div>
  )
}
