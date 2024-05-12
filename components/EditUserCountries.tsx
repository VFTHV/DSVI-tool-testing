import React, { useContext, ChangeEvent } from 'react'
import { UADValue } from '../pages/admin/edit-user'
import {
  AuthContext,
  SelectedCountryType,
  UserAdminDetails,
} from '../context/AuthContext'
import { Checkbox, Label } from 'flowbite-react'
import _ from 'lodash'

type Props = {
  options: SelectedCountryType[]
  values: UserAdminDetails
  setValues: React.Dispatch<React.SetStateAction<UserAdminDetails>>
  title: string
}

export default function EditUserCountries({
  options,
  values,
  setValues,
  title,
}: Props) {
  const { state } = useContext(AuthContext)

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

  const onChangeFontStyle = (entered: UADValue, initial: UADValue) => {
    const color = _.isEqual(entered, initial) ? 'initial' : 'red'
    return { color }
  }

  const onEdited = (entered: UADValue, initial: UADValue) => {
    return _.isEqual(entered, initial) ? '' : '(edited)'
  }

  return (
    <div>
      <h2>
        {title}
        {onEdited(
          values.countries.sort(),
          state.userAdminDetails.countries.sort()
        )}
        :
      </h2>
      <div className="flex max-w-md flex-col gap-2" id="checkbox">
        {options.map((country) => {
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
                  state.userAdminDetails.countries.sort()
                )}
              >
                {country}
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
