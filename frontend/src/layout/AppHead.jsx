import Image from "../components/Image";
import "./AppHead.css";
import TeamLogo from "../assets/zero-team-logo.jpg";
import GithubLogo from "../assets/github-logo-light.png";
import DiscordLogo from "../assets/discord-logo.png";

import React, { useEffect, useRef, useState } from "react";
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
    },
    {
        displayName: "أعمالنا",
        href: "works/",
    },
    {
        displayName: "حول الفريق",
        href: "about/",
    },
];

export function _NavLink({ name, href }) {
    return (
        <li className="nav-link">
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

export default function AppHead({ active }) {
    const currentBreakPoint = useResponsive(Responsive);
    /** @type {React.MutableRefObject<HTMLDivElement>} */
    const drawerRef = useRef();
    const [tabOpen, setTabOpen] = useState(false);

    document.addEventListener("click", (ev) => {
        if (currentBreakPoint === "sm") {
            /** @type {HTMLElement} */
            const target = ev.target;
            // TODO: make the drawer when being open close when clicking outside
        }
    });

    const routes = (
        <ul className={"routes" + " " + currentBreakPoint}>
            {pages.map(({ displayName, href }, key) => (
                <_NavLink
                    name={displayName}
                    href={href}
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
        <header className={active ? "active" : ""}>
            <nav>
                <If condition={currentBreakPoint === "sm"}>
                    <Then>
                        <button onClick={toggleNavOpen} className="nav-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={"nav-drawer" + " " + (tabOpen ? "active" : "")} ref={drawerRef}>
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
