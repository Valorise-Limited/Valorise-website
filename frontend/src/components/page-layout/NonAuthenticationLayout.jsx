import React from 'react';
import Header from "../header";
import Footer from "../footer/Footer"



const NonAuthenticatedLayout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className="main-block">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default NonAuthenticatedLayout