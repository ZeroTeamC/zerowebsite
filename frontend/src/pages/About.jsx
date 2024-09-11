import { Helmet } from "react-helmet";
import AboutView from "../view/about/about"
export default function About() {
    return (
        <>
            <Helmet>
                <title>عنا</title>
            </Helmet>
            <AboutView/>
        </>
    )
}
