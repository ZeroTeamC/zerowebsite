import { Helmet } from "react-helmet";

import AccountsView from "../view/accounts.jsx";

export default function Accounts() {
    return (
        <>
            <Helmet>
                <title>Accounts</title>
            </Helmet>
            <AccountsView/>
        </>
    )
}
