import React from 'react';
import Header from "../header";
import Footer from "../footer/Footer"



const NonAuthenticatedLayout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="main-block">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default NonAuthenticatedLayout