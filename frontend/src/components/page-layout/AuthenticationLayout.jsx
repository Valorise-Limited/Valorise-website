import React from 'react';
import Header from "../header"

const AuthenticationLayout = ({children}) => {
  return (
    <div>
        <Header />
        <div>
          {children}
          </div>
    </div>
  )
}

export default AuthenticationLayout