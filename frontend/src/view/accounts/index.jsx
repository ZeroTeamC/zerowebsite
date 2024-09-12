import Image from "../../components/Image.jsx"
import { If, Then } from "react-if";
import Icons from "../../components/Icons.jsx";

import classes from "./style.module.css";
import { useResponsive } from "../../hooks/useResponsive.jsx";
import { Responsive } from "../../Root.jsx";

export function AccountCard({ photo, github, twitter, reddit, discord }) {
    return (
        <div className={classes.account_card}>
            <Image src={photo} className={classes.card_photo} />
            <div className={classes.card_links} >
                <div className={classes.links_} style={github && (!(twitter || reddit)) ? { justifyContent: "start" } : {}}>
                    <If condition={github}>
                        <Then>
                            <a href={new URL(github, "https://github.com/")}>
                                <Icons.Github />
                            </a>
                        </Then>
                    </If>
                    <If condition={twitter}>
                        <Then>
                            <a href={new URL(twitter, "https://x.com/")}>
                                <Icons.Twitter />
                            </a>
                        </Then>
                    </If>
                    <If condition={reddit}>
                        <Then>
                            <a href={new URL(reddit, "https://www.reddit.com/user/")}>
                                <Icons.Reddit />
                            </a>
                        </Then>
                    </If>
                </div>
                <If condition={discord}>
                    <Then>
                        <span className={classes.account_discord}>
                            @{discord}
                        </span>
                    </Then>
                </If>
            </div>
        </div>
    )
}

/*
    here you should add someone to the team as a developer
    each object contain
    photo: required string for it to display into the card
    github: another required string, must contain the user name of the developer to github
    discord: required string, must contain the discord user name of the developer
    twitter: optional string, must contain the twitter user name of the developer
    reddit: optional string, must contain the reddit user name of the developer
*/
/** @type {{photo: string, github: string, discord: string, twitter: number | undefined, reddit: number | undefined}[]} */
const DEVELOPERS = [
    {
        photo: "https://avatars.githubusercontent.com/u/144622489?v=4",
        github: "0xangoone",
        discord: "abderahman7581"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/173940252?v=4",
        github: "mega-haste",
        discord: "iihaste",
        twitter: "iam_haste",
        reddit: "iiHaSTe"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/121363674?v=5",
        github: "7snDev",
        discord: "7snb"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/154544758?v=4",
        github: "awfm-dev",
        discord: "awfm.dev"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/175974489?v=4",
        github: "ishak-bachir",
        discord: "sh9o9"
    }
]

export default function AccountsView() {
    const screenType = useResponsive(Responsive);
    const devs = (
        <ul>
            {DEVELOPERS.map((dev, key) => (
                <li key={key}>
                    <AccountCard {...dev} />
                </li>
            ))}
        </ul>
    )
    return (
        <div className={classes.body}>
            <heading>
                تريد الإنضمام؟
                <a href="">إنضم عن طريق الديسكورد</a>
            </heading>
            <div>
                <h3 className={screenType === "sm" ? classes.h3_sm : ""}>
                    مبرمجي الفريق
                </h3>
                {devs}
            </div>
        </div>
    )
}
