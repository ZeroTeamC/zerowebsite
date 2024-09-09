import { Helmet } from "react-helmet";

import AboutView from "../view/about.jsx";

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <AboutView />
        </>
    )
}
