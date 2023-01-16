import { pages } from "pages";


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
        path: "/about/team", element: <MeetTheTeam />
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
        path: "/resources/case-studies", element: <CaseStudies />
    },
    {
        path: "/marketplace", element: <MarketPlace />
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
        path: "/legal/privacy-policy", element: <PrivacyPolicy />
    },

    {
        path: "/contact", element: <Contact />
    },

    {
        path: "/", element: <Home />
    },

];

export {
    authenticatedProtectedRoutes,
    publicRoutes
}