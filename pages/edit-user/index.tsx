import React, { useContext } from 'react'
import ChangePasswordUser from './components/ChangePasswordUser'
import ChangeDetailsUser from './components/ChangeDetailsUser'
import { AuthContext } from '../../context/AuthContext'

export default function EditUser() {
  const { state } = useContext(AuthContext)
  if (!state.user) return <>Not logged in</>
  return (
    <>
      <h1 className="text-center text-lg font-bold">EDIT YOUR USER DETAILS</h1>
      <div className="m-4 flex justify-start gap-4">
        <ChangePasswordUser />
        <ChangeDetailsUser />
      </div>
    </>
  )
}
