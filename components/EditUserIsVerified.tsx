import React, { useContext, ChangeEvent, useState, useEffect } from 'react'
import { AuthContext, UserAdminDetails } from '../context/AuthContext'
import { Label, Select } from 'flowbite-react'
import _ from 'lodash'

type Props = {
  options: UserAdminDetails['verified'][]
  values: UserAdminDetails
  setValues: React.Dispatch<React.SetStateAction<UserAdminDetails>>
  title: string
}

export default function EditUserIsVerified({
  options,
  values,
  setValues,
  title,
}: Props) {
  const { state } = useContext(AuthContext)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value

    if (value.toLowerCase() === 'yes') {
      setValues({ ...values, [name]: true })
    } else {
      setValues({ ...values, [name]: false })
    }
  }

  const onChangeFontStyle = (
    entered: UserAdminDetails['isVerified'],
    initial: UserAdminDetails['isVerified']
  ) => {
    const color = _.isEqual(entered, initial) ? 'initial' : 'red'
    return { color }
  }

  const onEdited = (
    entered: UserAdminDetails['isVerified'],
    initial: UserAdminDetails['isVerified']
  ) => {
    return _.isEqual(entered, initial) ? '' : '(edited)'
  }

  if (!state.userAdminDetails || !values) return <>No data to display</>

  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="isVerified"
          value={`${title} ${onEdited(
            values.isVerified,
            state.userAdminDetails.isVerified
          )}:`}
        />
      </div>
      <Select
        id="isVerified"
        name="isVerified"
        onChange={onChange}
        value={values.isVerified ? 'yes' : 'no'}
        style={onChangeFontStyle(
          values.isVerified,
          state.userAdminDetails.isVerified
        )}
        required
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </Select>
    </div>
  )
}
