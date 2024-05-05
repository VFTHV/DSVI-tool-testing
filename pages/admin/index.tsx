import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { Button, TextInput, Label } from 'flowbite-react'
import { AuthContext, UserAdminDetails } from '../../context/AuthContext'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import UserList from '../../components/UserList'
import { getAuthHeaderConfig } from '../../utils/auth'

export default function Admin() {
  const { state } = useContext(AuthContext)
  const [users, setUsers] = useState<UserAdminDetails[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const getUsers = async (searchWord: string | null) => {
    try {
      setIsLoading(true)

      searchWord = searchWord ? searchWord : ''
      const response = await customFetch.get('api/v1/user/', {
        params: {
          email: searchWord ? searchWord : null,
        },
        ...getAuthHeaderConfig(),
      })

      setUsers(response.data.users)
      setIsLoading(false)
    } catch (error) {
      const errMsg =
        error.response?.data?.msg || error.message || 'Error. Try again later!'

      toast.error(errMsg)
      setIsLoading(false)
    }
  }

  if (!state.user || (state.user && state.user.role !== 'admin')) {
    return <>Not logged in or not admin</>
  }

  return (
    <>
      <Button className="m-2" color="blue">
        <Link href={'/register'}>Register New User</Link>
      </Button>

      <Button
        className="m-2"
        color="blue"
        onClick={() => getUsers(null)}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'Get All Users'}
      </Button>

      <Button
        className="m-2"
        color="blue"
        onClick={() => setUsers([])}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'Clear User List'}
      </Button>
      <div className="flex items-center">
        <Label className="m-2 " htmlFor="find">
          Find Users by Email
        </Label>

        <TextInput
          className="m-2 max-w-md"
          id="find"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={() => getUsers(searchTerm)}
          className="m-2"
          color="blue"
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'Find'}
        </Button>
      </div>

      <UserList users={users} />
    </>
  )
}
