import validator, { StrongPasswordOptions } from 'validator'

export const getAuthHeaderConfig = () => {
  const accessJWT = localStorage.getItem('accessJWT')
  const refreshJWT = localStorage.getItem('refreshJWT')

  return {
    headers: {
      Authorization: `Bearer ${accessJWT}`,
      'x-refresh-token': refreshJWT,
    },
  }
}

export const checkPasswordStrength = (password: string) => {
  if (!password) return

  const passwordRequirements: Partial<
    StrongPasswordOptions & { returnScore: false }
  > = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }

  const isPasswordStrong = validator.isStrongPassword(
    password,
    passwordRequirements
  )

  if (!isPasswordStrong) {
    throw new Error('Password is not strong enough. Front end!')
  }
}
