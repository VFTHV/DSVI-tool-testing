import Navbar from './Navbar'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import DropdownUser from './DropdownUser'

const TopBar = () => {
  const { state } = useContext(AuthContext)

  return (
    <header className="body-font bg-white text-gray-800">
      <nav>
        <ul className="h-35 flex justify-between px-3">
          <li className="flex items-center">
            <Link href="/landing">
              <div className="flex items-center">
                <img
                  src="/images/logo-sdg-alpha.png"
                  alt="SDG LOGO"
                  width={40}
                  height={40}
                />
                <p className="text-2xl font-bold">DSVI Tool</p>
              </div>
            </Link>
          </li>
          <li className="flex items-center">
            <Navbar />
          </li>
          <li className="flex items-center justify-end">
            <a className="flex items-center">
              <img
                src="/images/logo-sdg-ai-lab-black-alpha.png"
                width={85}
                height={70}
                alt="circular"
              />
            </a>
            <a className="flex items-center pl-5">
              <img
                src="/images/logo-undp-alpha.png"
                width={50}
                height={70}
                alt="undp logo"
              />
            </a>
            {state.user && (
              <div>
                <DropdownUser />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default TopBar
