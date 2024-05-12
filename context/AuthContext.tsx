import React, { createContext, useReducer } from 'react'

export type SelectedCountryType = 'Tajikistan' | 'Niger' | 'Burkina Faso'
export const countryValues: SelectedCountryType[] = [
  'Tajikistan',
  'Niger',
  'Burkina Faso',
]

export type RoleType = 'user' | 'admin'
export const roleValues: RoleType[] = ['user', 'admin']

export type AuthUser = {
  name: string
  email: string
  userId: string
  role: RoleType
  countries: SelectedCountryType[]
} | null

export type UserAdminDetails = {
  name: string
  _id: string
  role: RoleType
  countries: SelectedCountryType[]
  email: string
  isVerified: boolean
  verificationToken: string
  verified: 'yes' | 'no'
  __v: number
  password?: string
}

export type AuthInitialStateType = {
  isLoading: boolean
  user: AuthUser
  userAdminDetails: UserAdminDetails
  error: any
}

export type AuthProviderActionType =
  | {
      type: 'SET_USER_ADMIN_DETAILS' | 'SET_USER'
      payload: any
    }
  | {
      type:
        | 'SET_IS_LOADING'
        | 'CLEAR_IS_LOADING'
        | 'CLEAR_USER'
        | 'CLEAR_USER_ADMIN_DETAILS'
    }

type AuthContextType = {
  state: AuthInitialStateType
  dispatch: React.Dispatch<AuthProviderActionType>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
// authContext
export const AuthProvider = ({ children }) => {
  const initialState: AuthInitialStateType = {
    isLoading: false,
    user: null,
    userAdminDetails: null,
    error: null,
  }

  const reducer = (
    state: AuthInitialStateType,
    action: AuthProviderActionType
  ): AuthInitialStateType => {
    switch (action.type) {
      case 'SET_USER_ADMIN_DETAILS': {
        return {
          ...state,
          userAdminDetails: { ...action.payload, password: '' },
        }
      }
      case 'CLEAR_USER_ADMIN_DETAILS': {
        return { ...state, userAdminDetails: null }
      }
      case 'SET_IS_LOADING': {
        return { ...state, isLoading: true }
      }
      case 'CLEAR_IS_LOADING': {
        return { ...state, isLoading: false }
      }
      case 'SET_USER': {
        return { ...state, user: action.payload }
      }
      case 'CLEAR_USER': {
        return { ...state, user: null }
      }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
