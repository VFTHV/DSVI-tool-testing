import React, { useContext, ChangeEvent } from 'react'
import { AuthContext, UserAdminDetails } from '../context/AuthContext'
import { Label, TextInput } from 'flowbite-react'
import _ from 'lodash'

type UADValue = UserAdminDetails[keyof UserAdminDetails]

type Props = {
  values: UserAdminDetails
  setValues: React.Dispatch<React.SetStateAction<UserAdminDetails>>
}

export default function EditUserInput({ values, setValues }: Props) {
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
  )
}
