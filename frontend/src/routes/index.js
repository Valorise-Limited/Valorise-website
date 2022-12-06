import pages from "pages";


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
FAQ}  = pages;

export const authenticatedProtectedRoutes = [
    
];

export const publicRoutes = [{
    path: "/", element: <Home />
},

{
    path: "/about/team", element: <MeetTheTeam />
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
    path: "/market-place", element: <MarketPlace />
},
{
    path: "/valorise-services/analytical", element: <Analytical />
},
{
    path: "/valorise-services/processing", element: <Processing />
},
{
    path: "/valorise-services/consultancy", element: <Consultancy />
},
{
    path: "/valorise-services/transport-and-logistics", element: <TransportLogistics />
},
{
    path: "/valorise-services/waste-regulated", element: <WasteRegulated />
},

];