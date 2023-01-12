import AuthenticationLayout from "components/page-layout/AuthenticationLayout"
import NonAuthenticationLayout from "components/page-layout/NonAuthenticationLayout"
import { useRoutes, useLocation } from "react-router-dom";
import { publicRoutes, authenticatedProtectedRoutes } from "routes";
import "./pages.scss"

import useElementOnScreen from "hooks/useElementOnScreen";
import { useRef } from 'react';


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
  const targetRef = useRef(null);

  const showHeaderBackground = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,

  }, targetRef)
  return (
    <>

      {
        user ? (
          <AuthenticationLayout>
            <PrivateRoutesWrapper />
          </AuthenticationLayout>
        )
          : (
            <NonAuthenticationLayout showHeaderBackground={showHeaderBackground}>
              <PublicRoutesWrapper key={location.pathname} />
            </NonAuthenticationLayout>
          )
      }

    </>
  )
}

export default Pages;