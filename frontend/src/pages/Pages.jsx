import AuthenticationLayout from "components/page-layout/AuthenticationLayout"
import NonAuthenticationLayout from "components/page-layout/NonAuthenticationLayout"
import {useRoutes, useLocation} from "react-router-dom";
import {publicRoutes, authenticatedProtectedRoutes} from "routes"


const PublicRoutesWrapper = () => {

  const routes = useRoutes(publicRoutes);

  return routes
}

const PrivateRoutesWrapper = () => {
const routes = useRoutes(authenticatedProtectedRoutes);

  return routes
}
const Pages = () => {
  const user = false;
  const location = useLocation();
  return (
    <div>
     
      {
        user ? (
            <AuthenticationLayout>
              <PrivateRoutesWrapper />
            </AuthenticationLayout> 
        ) 
        : (
            <NonAuthenticationLayout>
                <PublicRoutesWrapper key={location.pathname}/>
            </NonAuthenticationLayout>
        )
      }
      
    </div>
  )
}

export default Pages