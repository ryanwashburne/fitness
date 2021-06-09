import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Link from './link'

export default ({ title, children }) => {
  const { logoutUser } = useIdentityContext()
  return (
    <div className="min-h-screen">
      <header className="bg-gray-800">
        <nav className="flex items-center">
          <Link to="/" className="p-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/profile" className="p-4 hover:bg-gray-700">
            Profile
          </Link>
          <div className="flex-grow" />
          <button
            className="p-4 hover:bg-gray-700"
            onClick={async () => await logoutUser()}
          >
            Log out
          </button>
        </nav>
      </header>
      <main className="px-4 md:px-12 mt-8 px-4 md:px-0 pb-16 md:pb-32">
        {title && (
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">
            {title}
          </h1>
        )}
        {children}
      </main>
    </div>
  )
}
