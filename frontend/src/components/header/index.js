import NonAuthenticationHeader from "./NonAuthenticationHeader";
import AuthenticationHeader from "./AuthenticationHeader"

const Header = () => {
  const user = false
  return (
    <>
        {
          user ? (<AuthenticationHeader />) : (<NonAuthenticationHeader/>)
        }
    </>
  )
}

export default Header