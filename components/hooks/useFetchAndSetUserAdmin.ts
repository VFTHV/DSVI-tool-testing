import { useRouter } from 'next/router'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
import customFetch from '../../utils/axios'
import { getAuthHeaderConfig } from '../../utils/auth'
import { toast } from 'react-toastify'

export const useFetchAndSetUserAdmin = () => {
  const { dispatch } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    const { userId } = router.query
    if (!userId) return

    dispatch({ type: 'SET_IS_LOADING' })
    customFetch
      .get(`/api/v1/user/get-user`, {
        params: { userId },
        ...getAuthHeaderConfig(),
      })
      .then((response) => {
        const user = response.data.user

        dispatch({ type: 'SET_USER_ADMIN_DETAILS', payload: user })
      })
      .catch((error) => {
        const errMsg =
          error.response?.data?.msg || error.message || 'Unkown Error Occurred'
        toast.error(errMsg)
      })
      .finally(() => dispatch({ type: 'CLEAR_IS_LOADING' }))

    return () => {
      dispatch({ type: 'CLEAR_USER_ADMIN_DETAILS' })
    }
  }, [router.query])
}
