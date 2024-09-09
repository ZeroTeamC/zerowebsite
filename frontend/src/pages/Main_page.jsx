import { Helmet } from "react-helmet";

import MainView from "../view/main.jsx";

export default function Main_page() {
    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <MainView />
        </>
    )
}
