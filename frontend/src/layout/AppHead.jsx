import Image from "../components/Image";
import "./AppHead.css";
import { NavLink, Link } from "react-router-dom";

import TeamLogo from "../assets/zero-team-logo.jpg";
import GithubLogo from "../assets/github-logo-light.png";
import DiscordLogo from "../assets/discord-logo.png";

/**
 * @typedef {{ displayName: string, href: string, discription: string }} PageInfo
 */

/** @type {PageInfo[]} */
const pages = [
  {
    displayName: "الحسابات",
    href: "accounts/",
    discription: "",
  },
  {
    displayName: "أعمالنا",
    href: "works/",
    discription: "",
  },
  {
    displayName: "حول الفريق",
    href: "about/",
    discription: "",
  },
];

export function _NavLink({ name, href, discription }) {
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

export default function AppHead() {
  const routes = (
    <ul className="routes">
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

  return (
    <header>
      <nav>
        {logo}
        {routes}
        {links}
      </nav>
    </header>
  );
}
