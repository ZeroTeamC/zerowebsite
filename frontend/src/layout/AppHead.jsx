import Image from "../components/Image";
import "./AppHead.css";
import TeamLogo from "../assets/zero-team-logo.jpg";
import GithubLogo from "../assets/github-logo-light.png";
import DiscordLogo from "../assets/discord-logo.png";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useResponsive } from "../hooks";
import { Responsive } from "../Root";
import { Else, If, Then } from "react-if";

/**
 * @typedef {{ displayName: string, href: string, discription: string }} PageInfo
 */

/** @type {PageInfo[]} */
const pages = [
    {
        displayName: "الحسابات",
        href: "accounts/",
        discription: "حسابات الفريق و وسائل التواصل لهم",
    },
    {
        displayName: "أعمالنا",
        href: "works/",
        discription: "أعمال الفريق المفتوحة المصدر على github",
    },
    {
        displayName: "حول الفريق",
        href: "about/",
        discription: "معلومات حول الفريق و من نحن",
    },
];

export function _NavLink({ name, href, discription }) {
    return (
        <li className="nav-link" data-desc={discription}>
            <NavLink
                to={href}
                className={({ isActive }) =>
                    isActive ? "nav-link-item active" : "nav-link-item"
                }
            >
                {name}
            </NavLink>
        </li>
    );
}

function LinkThing({ logo, href }) {
    return (
        <li className="nav-social">
            <a href={href}>
                <img src={logo} />
            </a>
        </li>
    );
}

export default function AppHead() {
    const currentBreakPoint = useResponsive(Responsive);
    const [tabOpen, setTabOpen] = useState(false);
    console.log(tabOpen);

    const routes = (
        <ul className={"routes" + " " + currentBreakPoint}>
            {pages.map(({ displayName, href, discription }, key) => (
                <_NavLink
                    name={displayName}
                    href={href}
                    discription={discription}
                    key={key}
                />
            ))}
        </ul>
    );

    const links = (
        <ul className="links">
            <LinkThing logo={GithubLogo} href="https://github.com/ZeroTeamC" />
            <LinkThing logo={DiscordLogo} href="https://discord.gg/hQXQFdYP" />
        </ul>
    );

    const logo = (
        <Link to="/" style={{ height: "100%" }}>
            <Image className="nav-logo" src={TeamLogo} />
        </Link>
    );

    const toggleNavOpen = (_ev) => {
        setTabOpen(!tabOpen);
    }

    return (
        <header>
            <nav>
                <If condition={currentBreakPoint === "sm"}>
                    <Then>
                        <button onClick={toggleNavOpen} className="nav-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={"nav-drawer" + " " + (tabOpen ? "active" : "")}>
                            <div className="head">{logo}</div>
                            <div className="links--">
                                {routes}
                            </div>
                        </div>
                    </Then>
                    <Else>
                        {logo}
                        {routes}
                    </Else>
                </If>
                {links}
            </nav>
        </header>
    );
}
