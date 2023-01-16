import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const Contact = lazy(() => import("./contact/Contact"));
const MarketPlace = lazy(() => import("./market-place/MarketPlace"));
const Blog = lazy(() => import("./resources/Blog"));
const CaseStudies = lazy(() => import("./resources/CaseStudies"));
const News = lazy(() => import("./resources/News"));
const Analytical = lazy(() => import("./valorise-services/Analytical"));
const Consultancy = lazy(() => import("./valorise-services/Consultancy"));
const Processing = lazy(() => import("./valorise-services/Processing"));
const TransportLogistics = lazy(() => import("./valorise-services/TransportLogistics"));
const WasteRegulated = lazy(() => import("./valorise-services/WasteRegulated"));
const PrivacyPolicy = lazy(() => import("./legal/PrivacyPolicy"));
const Events = lazy(() => import("./about/Events"));
const FAQ = lazy(() => import("./about/FAQ"));
const MeetTheTeam = lazy(() => import("./about/MeetTheTeam"));

export const pages = {
    Home,
    MeetTheTeam,
    MarketPlace,
    FAQ,
    Contact,
    Blog,
    CaseStudies,
    News,
    Analytical,
    Consultancy,
    Processing,
    TransportLogistics,
    WasteRegulated,
    PrivacyPolicy,
    Events
};
