import { pages } from "pages";
import * as url from "./url"


const {
    Home,
    MarketPlace,
    Blog,
    News,
    CaseStudies,
    Consultancy,
    Contact,
    Analytical,
    Processing,
    TransportLogistics,
    WasteRegulated,
    MeetTheTeam,
    PrivacyPolicy,
    FAQ,
    Events } = pages;

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