import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useContext } from 'react'
import {
  AuthContext,
  SelectedCountryType,
  UserAdminDetails,
  countryValues,
} from '../../context/AuthContext'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { useAuth } from '../../components/hooks/useAuth'
import { Button, Checkbox, Label, Select } from 'flowbite-react'
import PasswordChecker from '../../components/PasswordChecker'
import { useFetchAndSetUserAdmin } from '../../components/hooks/useFetchAndSetUserAdmin'
import EditUserInput from '../../components/EditUserInput'
import EditUserSelect from '../../components/EditUserSelect'
import EditUserIsVerified from '../../components/EditUserIsVerified'

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const onVerificationChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log('onVerificationChange')

    const name = e.target.name
    const value = e.target.value

    console.log('name: ', name)
    console.log('value: ', value)

    if (value.toLowerCase() === 'yes') {
      setValues({ ...values, [name]: true })
    } else {
      setValues({ ...values, [name]: false })
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
          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="name"
            identifier="name"
            title="Name"
          />

          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="email"
            identifier="email"
            title="Email"
          />

          <EditUserInput
            values={values}
            setValues={setValues}
            fieldKey="password"
            identifier="password"
            title="Password"
          />

          <PasswordChecker password={values.password} />

          <EditUserIsVerified
            options={['yes', 'no']}
            values={values}
            onChange={onVerificationChange}
            title="Account verified component"
          />

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
              name="verified"
              onChange={onVerificationChange}
              value={values.isVerified ? 'yes' : 'no'}
              style={onChangeFontStyle(
                values.isVerified,
                userAdminDetails.isVerified
              )}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <EditUserSelect
            options={['user', 'admin']}
            values={values}
            onChange={onChange}
            fieldKey="role"
            identifier="role"
            title="Role"
          />

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
