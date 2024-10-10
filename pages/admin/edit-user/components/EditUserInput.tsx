import React, { useContext, ChangeEvent } from 'react'
import { AuthContext, UserAdminDetails } from '../../../../context/AuthContext'
import { Label, TextInput } from 'flowbite-react'
import _ from 'lodash'
import { UADValue } from '..'

type StringKey<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

type Props = {
  values: UserAdminDetails
  setValues: React.Dispatch<React.SetStateAction<UserAdminDetails>>
  fieldKey: StringKey<UserAdminDetails>
  title: string
}

export default function EditUserInput({
  values,
  setValues,
  fieldKey,
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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  return (
    <div>
      <div className="mb-2 block">
        <Label
          value={`${title} ${onEdited(
            values[fieldKey],
            userAdminDetails[fieldKey]
          )}:`}
          htmlFor={fieldKey}
        />
      </div>
      <TextInput
        type="text"
        id={fieldKey}
        name={fieldKey}
        value={values[fieldKey]}
        onChange={onChange}
        shadow
        style={onChangeFontStyle(values[fieldKey], userAdminDetails[fieldKey])}
      />
    </div>
  )
}
