import AuthenticationLayout from "components/page-layout/AuthenticationLayout"
import NonAuthenticationLayout from "components/page-layout/NonAuthenticationLayout"
import { useRoutes, useLocation } from "react-router-dom";
import { publicRoutes, authenticatedProtectedRoutes } from "routes";
import "./pages.scss"
import React from "react";

import Loader from "components/loader/Loader";
import GoToTop from "components/go-to-top/GoToTop";


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
    <React.Suspense fallback={<Loader />}>

      {
        user ? (
          <AuthenticationLayout>
            <PrivateRoutesWrapper />
          </AuthenticationLayout>
        )
          : (

            <NonAuthenticationLayout>
              <PublicRoutesWrapper key={location.pathname} />
              <GoToTop />
            </NonAuthenticationLayout>

          )
      }

    </React.Suspense>
  )
}

export default Pages;