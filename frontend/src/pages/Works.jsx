import { Helmet } from "react-helmet";

import WorksView from "../view/works.jsx";

export default function Works() {
    return (
        <>
            <Helmet>
                <title>Works</title>
            </Helmet>
            <WorksView />
        </>
    );
}
