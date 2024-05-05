import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  AuthContext,
  AuthUser,
  UserAdminDetails,
} from '../../context/AuthContext'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import { RoleType, SelectedCountryType } from '../../context/AuthContext'
import { checkPasswordStrength, getAuthHeaderConfig } from '../../utils/auth'

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext)
  const router = useRouter()

  const registerUser = async (
    name: string,
    email: string,
    password: string,
    countries: SelectedCountryType[],
    role: RoleType
  ) => {
    dispatch({ type: 'SET_IS_LOADING' })

    const response = await customFetch.post(
      '/api/v1/auth/register',
      {
        name,
        email,
        password,
        countries,
        role,
      },
      getAuthHeaderConfig()
    )

    dispatch({ type: 'CLEAR_IS_LOADING' })
    toast.success(
      `Account created. Verification email sent. Verify email, then login`,
      { autoClose: false }
    )
  }

  const loginUser = async (email: string, password: string) => {
    try {
      dispatch({ type: 'SET_IS_LOADING' })

      const response = await customFetch.post('/api/v1/auth/login', {
        email,
        password,
      })

      const { user, token } = response.data
      localStorage.setItem('token', token)

      dispatch({ type: 'CLEAR_IS_LOADING' })
      dispatch({ type: 'SET_USER', payload: user })
      toast.success(`Welcome back ${user.name}`)
    } catch (error) {
      const errMsg =
        error.response?.data?.msg || error?.message || 'Unknown Error Occurred!'

      localStorage.removeItem('token')
      toast.error(errMsg)
      dispatch({ type: 'CLEAR_IS_LOADING' })
      dispatch({ type: 'CLEAR_USER' })
    }
  }

  const checkAuth = () => {
    const request = customFetch
      .get('/api/v1/auth/routing', getAuthHeaderConfig())
      .then((response) => {
        dispatch({ type: 'CLEAR_IS_LOADING' })
        dispatch({ type: 'SET_USER', payload: response.data.user })
        return { user: response.data.user }
      })
      .catch((error) => {
        const errMsg =
          error.response?.data?.msg || error.message || 'Unkown Error Occurred!'

        dispatch({ type: 'CLEAR_IS_LOADING' })
        dispatch({ type: 'CLEAR_USER' })
        return { error: errMsg }
      })
    return request
  }

  const protectedRoute = () => {
    const redirect = ({ user, error }: { user: AuthUser; error: string }) => {
      if (typeof window === 'undefined') return
      if (router.route === '/' && !user) {
        toast.error(error)
        router.push('/landing')
      } else if (router.route === '/login' && user) {
        setTimeout(() => {
          router.push('/')
        }, 1000)
      } else if (
        router.route === '/admin' ||
        router.route === '/register' ||
        router.route === '/admin/edit-user'
      ) {
        if (!user) {
          toast.error('Unauthorized, please login as Admin')
          router.push('/landing')
        } else if (user && user.role !== 'admin') {
          toast.error('Unauthorized, please login as Admin')
          router.push('/')
        }
      }
    }

    useEffect(() => {
      checkAuth().then((response) => {
        let user: AuthUser = null
        let error: string = null
        if ('user' in response) {
          user = response.user
        } else {
          error = response.error
        }

        redirect({ user, error })
      })
    }, [router.route])
  }

  const logoutUser = () => {
    dispatch({ type: 'CLEAR_USER' })
    localStorage.removeItem('token')
  }

  const changeUserDetailsAdmin = async (values: UserAdminDetails) => {
    dispatch({ type: 'SET_IS_LOADING' })

    try {
      checkPasswordStrength(values.password)
      const response = await customFetch.post(
        '/api/v1/user/update-user-admin',
        values,
        getAuthHeaderConfig()
      )

      toast.success(response.data.msg)
      router.push('/admin')
      dispatch({ type: 'CLEAR_USER_ADMIN_DETAILS', payload: values })
      dispatch({ type: 'CLEAR_IS_LOADING' })
    } catch (error) {
      const errMsg =
        error.response?.data?.msg || error.message || 'Unknown Error Occurred!'

      toast.error(errMsg)
      dispatch({ type: 'CLEAR_IS_LOADING' })
    }
  }

  const deleteUserAccount = (userId: string) => {
    customFetch
      .delete(`/api/v1/user/delete-user?id=${userId}`, getAuthHeaderConfig())
      .then((response) => {
        toast.success('User Deleted Successfully')
        router.push('/admin')
      })
      .catch((error) => {
        const errMsg = error.response.data
          ? error.response.data.msg
          : error.message
        toast.error(errMsg)
      })
  }

  const changePasswordUser = async (passwordValues: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }) => {
    const { newPassword, confirmPassword } = passwordValues

    dispatch({ type: 'SET_IS_LOADING' })

    try {
      if (newPassword !== confirmPassword) {
        throw new Error('New passwords are not matching')
      }

      checkPasswordStrength(newPassword)
      const response = await customFetch.patch(
        '/api/v1/user/update-user-password',
        passwordValues,
        getAuthHeaderConfig()
      )

      toast.success(response.data.msg)
      dispatch({ type: 'CLEAR_IS_LOADING' })
    } catch (error) {
      const errMsg =
        error.response?.data?.msg || error.message || 'Unkown Error Occurred!'

      toast.error(errMsg)
      dispatch({ type: 'CLEAR_IS_LOADING' })
    }
  }

  return {
    registerUser,
    loginUser,
    logoutUser,
    protectedRoute,
    checkAuth,
    changeUserDetailsAdmin,
    deleteUserAccount,
    changePasswordUser,
  }
}
