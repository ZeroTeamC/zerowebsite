import { Helmet } from "react-helmet";

import AccountsView from "../view/accounts.jsx";

export default function Accounts() {
    return (
        <>
            <Helmet>
                <title>حسابات الفريق</title>
            </Helmet>
            <AccountsView/>
        </>
    )
}
