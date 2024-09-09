import { Helmet } from "react-helmet";

import AboutView from "../view/about.jsx";

export default function Accounts() {
    return (
        <>
            <Helmet>
                <title>Accounts</title>
            </Helmet>
            <AboutView />
        </>
    )
}
