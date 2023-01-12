import React from 'react';
import Header from 'components/header';

const AuthenticationLayout = ({ children }) => {
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