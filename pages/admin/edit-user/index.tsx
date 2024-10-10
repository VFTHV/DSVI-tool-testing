import React, { FormEvent, useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext, UserAdminDetails } from '../../../context/AuthContext'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { useAuth } from '../../../components/hooks/useAuth'
import { Button } from 'flowbite-react'
import PasswordChecker from '../../../components/PasswordChecker'
import { useFetchAndSetUserAdmin } from './hooks/useFetchAndSetUserAdmin'
import EditUserInput from './components/EditUserInput'
import EditUserSelect from './components/EditUserSelect'
import EditUserIsVerified from './components/EditUserIsVerified'
import EditUserCountries from './components/EditUserCountries'

export type UADValue = UserAdminDetails[keyof UserAdminDetails]

export default function EditUser() {
  const {
    state: { userAdminDetails },
    state,
  } = useContext(AuthContext)

  const { changeUserDetailsAdmin, deleteUserAccount } = useAuth()
  const [values, setValues] = useState<UserAdminDetails>(null)
  const [confirmedDelete, setConfirmedDelete] = useState(false)

  useFetchAndSetUserAdmin()

  useEffect(() => {
    if (!userAdminDetails) return
    setValues(userAdminDetails)
  }, [userAdminDetails])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isFormUpdated = !_.isEqual(values, userAdminDetails)

    if (!isFormUpdated) {
      toast.warning('Make changes before submitting')
      return
    }
    changeUserDetailsAdmin(values)
  }

  const onUserDelete = () => {
    if (!confirmedDelete) {
      toast.info('Please press Delete User again to DELETE user account', {
        autoClose: false,
      })
      toast.onChange(() => setConfirmedDelete(true))
      return
    }
    deleteUserAccount(values._id)
  }

  if (state.user?.role !== 'admin') return <>Not admin</>
  if (!userAdminDetails || !values) return <>No data to display</>

  return (
    <>
      <h1 className="text-center text-lg font-bold">EDIT USER</h1>
      <form onSubmit={onSubmit} className="m-2 flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="name"
            title="Name"
          />

          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="email"
            title="Email"
          />

          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="password"
            title="Password"
          />

          <PasswordChecker password={values.password} />

          <EditUserIsVerified
            options={['yes', 'no']}
            values={values}
            setValues={setValues}
            title="Account verified"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <EditUserSelect
            options={['user', 'admin']}
            values={values}
            setValues={setValues}
            fieldKey="role"
            title="Role"
          />

          <EditUserCountries
            options={['Tajikistan', 'Niger', 'Burkina Faso']}
            values={values}
            setValues={setValues}
            title="Countries accessible to user"
          />

          <Button color="blue" type="submit" disabled={state.isLoading}>
            {state.isLoading ? 'loading...' : 'Submit Changes'}
          </Button>

          <Button
            color="failure"
            disabled={state.isLoading}
            onClick={onUserDelete}
          >
            {state.isLoading ? 'loading...' : 'Delete User'}
          </Button>
        </div>
      </form>
    </>
  )
}
