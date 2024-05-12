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
  setValues: React.Dispatch<React.SetStateAction<UserAdminDetails>>
  fieldKey: StringKey<UserAdminDetails>
  title: string
}

export default function EditUserSelect({
  options,
  values,
  setValues,
  fieldKey,
  title,
}: Props) {
  const {
    state: { userAdminDetails },
  } = useContext(AuthContext)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

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
          htmlFor={fieldKey}
          value={`${title} ${onEdited(
            values[fieldKey],
            userAdminDetails[fieldKey]
          )}:`}
        />
      </div>
      <Select
        id={fieldKey}
        name={fieldKey}
        onChange={onChange}
        value={values[fieldKey]}
        style={onChangeFontStyle(values[fieldKey], userAdminDetails[fieldKey])}
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
