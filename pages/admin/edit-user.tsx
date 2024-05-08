import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useContext } from 'react'
import {
  AuthContext,
  SelectedCountryType,
  UserAdminDetails,
  countryValues,
  roleValues,
} from '../../context/AuthContext'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { useAuth } from '../../components/hooks/useAuth'
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react'
import PasswordChecker from '../../components/PasswordChecker'
import { useFetchAndSetUserAdmin } from '../../components/hooks/useFetchAndSetUserAdmin'
import EditUserInput from '../../components/EditUserInput'

type UADValue = UserAdminDetails[keyof UserAdminDetails]

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const onCountrySelect = (e: ChangeEvent<HTMLInputElement>) => {
    const value: SelectedCountryType = e.target.value as SelectedCountryType
    if (values.countries.includes(value)) {
      setValues({
        ...values,
        countries: values.countries.filter((country) => country !== value),
      })
    } else {
      setValues({ ...values, countries: [...values.countries, value] })
    }
  }

  const onVerificationChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    if (value.toLowerCase() === 'yes') {
      setValues({ ...values, isVerified: true })
    } else {
      setValues({ ...values, isVerified: false })
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isFormUpdated = !_.isEqual(values, userAdminDetails)

    if (!isFormUpdated) {
      toast.warning('Make changes before submitting')
      return
    }
    changeUserDetailsAdmin(values)
  }

  const onChangeFontStyle = (entered: UADValue, initial: UADValue) => {
    const color = _.isEqual(entered, initial) ? 'initial' : 'red'
    return { color }
  }

  const onEdited = (entered: UADValue, initial: UADValue) => {
    return _.isEqual(entered, initial) ? '' : '(edited)'
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
          <div>
            <div className="mb-2 block">
              <Label
                value={`Name ${onEdited(values.name, userAdminDetails.name)}:`}
                htmlFor="name"
              />
            </div>
            <TextInput
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={onChange}
              shadow
              style={onChangeFontStyle(values.name, userAdminDetails.name)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value={`Email ${onEdited(
                  values.email,
                  userAdminDetails.email
                )}:`}
                htmlFor="email"
              />
            </div>
            <TextInput
              type="text"
              name="email"
              value={values.email.trim()}
              onChange={onChange}
              id="email"
              shadow
              style={onChangeFontStyle(values.email, userAdminDetails.email)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value={`Password ${onEdited(
                  values.password,
                  userAdminDetails.password
                )}:`}
                htmlFor="password"
              />
            </div>
            <TextInput
              type="text"
              name="password"
              value={values.password}
              onChange={onChange}
              id="password"
              shadow
              style={onChangeFontStyle(
                values.password,
                userAdminDetails.password
              )}
            />
          </div>

          <PasswordChecker password={values.password} />
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="verified"
                value={`Account verified ${onEdited(
                  values.isVerified,
                  userAdminDetails.isVerified
                )}:`}
              />
            </div>
            <Select
              id="verified"
              name="role"
              onChange={onVerificationChange}
              value={values.isVerified ? 'yes' : 'no'}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="roles"
                value={`User's Role ${onEdited(
                  values.role,
                  userAdminDetails.role
                )}:`}
              />
            </div>
            <Select
              id="roles"
              name="role"
              onChange={onChange}
              value={values.role}
              style={onChangeFontStyle(values.role, userAdminDetails.role)}
              required
            >
              {roleValues.map((role) => {
                return (
                  <option key={role} value={role}>
                    {role}
                  </option>
                )
              })}
            </Select>
          </div>

          <div>
            <h2>
              Countries accessible to user{' '}
              {onEdited(
                values.countries.sort(),
                userAdminDetails.countries.sort()
              )}
              :
            </h2>
            <div className="flex max-w-md flex-col gap-2" id="checkbox">
              {countryValues.map((country) => {
                return (
                  <div key={country} className="flex items-center gap-2">
                    <Checkbox
                      id={country}
                      onChange={onCountrySelect}
                      value={country}
                      color="blue"
                      checked={values.countries.includes(country)}
                    />
                    <Label
                      htmlFor={country}
                      style={onChangeFontStyle(
                        values.countries.sort(),
                        userAdminDetails.countries.sort()
                      )}
                    >
                      {country}
                    </Label>
                  </div>
                )
              })}
            </div>
          </div>

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
