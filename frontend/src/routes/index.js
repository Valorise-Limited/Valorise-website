
import * as url from "./url";

import { lazy } from "react";

const Home = lazy(() => import("pages/home/Home"));
const Contact = lazy(() => import("pages/contact/Contact"));
const MarketPlace = lazy(() => import("pages/market-place/MarketPlace"));
const Blog = lazy(() => import("pages/resources/Blog"));
const CaseStudies = lazy(() => import("pages/resources/CaseStudies"));
const CaseStudyPlummo = lazy(() => import("pages/resources/case-study-details/Pluumo"));
const CaseStudyShellworks = lazy(() => import("pages/resources/case-study-details/Shellworks"));
const CaseStudyCelluComp = lazy(() => import("pages/resources/case-study-details/CelluComp"));
const CaseStudyXampla = lazy(() => import("pages/resources/case-study-details/Xampla"));
const CaseStudyKeracol = lazy(() => import("pages/resources/case-study-details/Keracol"));
const CaseStudyRecEgg = lazy(() => import("pages/resources/case-study-details/RecEgg"));
const CaseStudyFleather = lazy(() => import("pages/resources/case-study-details/Fleather"));
const CaseStudyEdwards = lazy(() => import("pages/resources/case-study-details/Edwards"));
const News = lazy(() => import("pages/resources/News"));
const Analytical = lazy(() => import("pages/valorise-services/Analytical"));
const Consultancy = lazy(() => import("pages/valorise-services/Consultancy"));
const Processing = lazy(() => import("pages/valorise-services/Processing"));
const TransportLogistics = lazy(() => import("pages/valorise-services/TransportLogistics"));
const WasteRegulated = lazy(() => import("pages/valorise-services/WasteRegulated"));
const PrivacyPolicy = lazy(() => import("pages/legal/PrivacyPolicy"));
const Events = lazy(() => import("pages/about/Events"));
const FAQ = lazy(() => import("pages/about/FAQ"));
const MeetTheTeam = lazy(() => import("pages/about/MeetTheTeam"));



const authenticatedProtectedRoutes = [];

const publicRoutes = [
    {
        path: url.aboutUs, element: <MeetTheTeam />
    },
    {
        path: "/about/events", element: <Events />
    },
    {
        path: "/about/faq", element: <FAQ />
    },
    {
        path: "/resources/blog", element: <Blog />
    },
    {
        path: "/resources/news", element: <News />
    },

    {
        path: url.caseStudies, element: <CaseStudies />
    },

    {
        path: url.caseStudyCelluComp, element: <CaseStudyCelluComp />
    },
    {
        path: url.caseStudyEdwards, element: <CaseStudyEdwards />
    },
    {
        path: url.caseStudyFleather, element: <CaseStudyFleather />
    },
    {
        path: url.caseStudyKeracol, element: <CaseStudyKeracol />
    },
    {
        path: url.caseStudyRecEgg, element: <CaseStudyRecEgg />
    },
    {
        path: url.caseStudyShellworks, element: <CaseStudyShellworks />
    },
    {
        path: url.caseStudyPlummo, element: <CaseStudyPlummo />
    },
    {
        path: url.caseStudyXampla, element: <CaseStudyXampla />
    },
    {
        path: url.marketplace, element: <MarketPlace />
    },
    {
        path: "/services/analytical", element: <Analytical />
    },
    {
        path: "/services/processing", element: <Processing />
    },
    {
        path: "/services/consultancy", element: <Consultancy />
    },
    {
        path: "/services/transport", element: <TransportLogistics />
    },
    {
        path: "/services/waste-regulated", element: <WasteRegulated />
    },
    {
        path: url.privacy, element: <PrivacyPolicy />
    },

    {
        path: url.contactUs, element: <Contact />
    },

    {
        path: url.home, element: <Home />
    },

];

export {
    authenticatedProtectedRoutes,
    publicRoutes
}