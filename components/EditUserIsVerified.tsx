import React, { useContext, ChangeEvent } from 'react'
import { AuthContext, UserAdminDetails } from '../context/AuthContext'
import { Label, Select } from 'flowbite-react'
import _ from 'lodash'

type Props = {
  options: UserAdminDetails['verified'][]
  values: UserAdminDetails
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  title: string
}

export default function EditUserIsVerified({
  options,
  values,
  onChange,
  title,
}: Props) {
  const {
    state: { userAdminDetails },
  } = useContext(AuthContext)

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

  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="isVerified"
          value={`${title} ${onEdited(
            values.isVerified,
            userAdminDetails.isVerified
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
          userAdminDetails.isVerified
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
