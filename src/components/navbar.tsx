import Link from 'next/link'
import React from 'react'
import LoginButton from './login-button'
import { Session } from 'next-auth';
import Logo from './logo';
import Profile from './profile';

export interface AuthProps {
  authenticatedUser: Session | null;
};

const Navbar = ({ authenticatedUser }: AuthProps) => {

  return (
    <div className='w-full shadow-md'>
      <nav className="container bg-white p-4 mx-auto">
        <ul className="flex space-x-4 justify-between w-full items-center">
          <li>
            <Link href="/"><Logo /></Link>
          </li>
          <div className='flex gap-x-8 items-center'>
            <li>
              <Link href="/create" className="text-purple-500 font-semibold">Create</Link>
            </li>
            <li>
              <Link href="/explore" className="text-purple-500 font-semibold">Explore</Link>
            </li>
            {
              authenticatedUser ?
                <li>
                  <Profile authenticatedUser={authenticatedUser} />
                </li> :
                <li>
                  <LoginButton />
                </li>
            }

          </div>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar