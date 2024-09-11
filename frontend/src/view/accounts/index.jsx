import Image from "../../components/Image.jsx"
import { If, Then } from "react-if";
import Icons from "../../components/Icons.jsx";

import "./style.css";

export function AccountCard({ photo, github, twitter, reddit, discord }) {
    return (
        <div className="account-card">
            <Image src={photo} className="card-photo" />
            <div className="card-links">
                <div className="links----" style={github && (!(twitter || reddit)) ? { justifyContent: "start" } : {}}>
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
                        <span className="account-discord">
                            @{discord}
                        </span>
                    </Then>
                </If>
            </div>
        </div>
    )
}

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
        <div class="body">
            <heading>
                تريد الإنضمام؟
                <a href="">إنضم عن طريق الديسكورد</a>
            </heading>
            <div>
                <h3>
                    مبرمجي الفريق
                </h3>
                {devs}
            </div>
        </div>
    )
}
