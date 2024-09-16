import GithubLogo from "../assets/github-logo-light.png";
import DiscordLogo from "../assets/discord-logo.png";
import RedditLogo from "../assets/reddit-logo.png";
import TwitterLogo from "../assets/twitter-icon.png";
import Image from "./Image";

import "./Icons.css";

function Icon({ src, ...rest }) {
    return <Image className="icon" src={src} {...rest} />;
}

const Icons = {
    Github(props) {
        return <Icon src={GithubLogo} {...props} />
    },
    Discord(props) {
        return <Icon src={DiscordLogo} {...props} />
    },
    Reddit(props) {
        return <Icon src={RedditLogo} {...props} />
    },
    Twitter(props) {
        return <Icon src={TwitterLogo} {...props} />
    }
};
export default Icons;

