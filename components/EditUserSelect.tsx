import React, { useContext, ChangeEvent } from 'react'
import { AuthContext, UserAdminDetails } from '../context/AuthContext'
import { Label, Select } from 'flowbite-react'
import _ from 'lodash'

type UADValue = UserAdminDetails[keyof UserAdminDetails]

type StringKey<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

type Props = {
  options: UserAdminDetails['role'][]
  values: UserAdminDetails
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  fieldKey: StringKey<UserAdminDetails>
  identifier: string
  title: string
}

export default function EditUserSelect({
  options,
  values,
  onChange,
  fieldKey,
  identifier,
  title,
}: Props) {
  const {
    state: { userAdminDetails },
  } = useContext(AuthContext)

  const onChangeFontStyle = (entered: UADValue, initial: UADValue) => {
    const color = _.isEqual(entered, initial) ? 'initial' : 'red'
    return { color }
  }

  const onEdited = (entered: UADValue, initial: UADValue) => {
    return _.isEqual(entered, initial) ? '' : '(edited)'
  }

  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor={identifier}
          value={`${title} ${onEdited(
            values[fieldKey],
            userAdminDetails[fieldKey]
          )}:`}
        />
      </div>
      <Select
        id={identifier}
        name={identifier}
        onChange={onChange}
        value={values[fieldKey]}
        style={onChangeFontStyle(values[fieldKey], userAdminDetails[fieldKey])}
        required
      >
        {options.map((role) => {
          return (
            <option key={role} value={role}>
              {role}
            </option>
          )
        })}
      </Select>
    </div>
  )
}
