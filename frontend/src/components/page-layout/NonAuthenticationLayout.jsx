
import Header from "../header/NonAuthenticationHeader";
import Footer from "../footer/Footer"



const NonAuthenticationLayout = ({ children }) => {

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

export default NonAuthenticationLayout;