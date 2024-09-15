import Image from "../../components/Image.jsx"
import { If, Then } from "react-if";
import Icons from "../../components/Icons.jsx";

import classes from "./style.module.css";
import { useResponsive } from "../../hooks/useResponsive.jsx";
import { Responsive } from "../../Root.jsx";

export function AccountCard({name, photo, github, twitter, reddit, discord }) {
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
                <h1>{name}</h1>
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
        name:"عبدالرحمن",
        discord: "abderahman7581"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/173940252?v=4",
        github: "mega-haste",
        name:"هشام",
        discord: "iihaste",
        twitter: "iam_haste",
        reddit: "iiHaSTe"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/121363674?v=5",
        name:"حسن",
        github: "7snDev",
        discord: "7snb"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/154544758?v=4",
        name:"عبدالرحمن وليد",
        github: "awfm-dev",
        discord: "awfm.dev"
    },
    {
        photo: "https://avatars.githubusercontent.com/u/175974489?v=4",
        name:"اسحاق",
        github: "ishak-bachir",
        discord: "sh9o9"
    },
    {
        photo:"https://media.discordapp.net/attachments/1282018948363063423/1284844432071590038/627c52b77c7c4f2a448782ef13e787e4.jpg?ex=66e81c1f&is=66e6ca9f&hm=ee5b17d121c4204e7396ed932e95e71dde630fbaac3dc8494b05b4461b4b45cc&=&format=webp",
        name:"0xIcee",
        discord:"icee6761",
    },
    {
        photo:"https://avatars.githubusercontent.com/u/109916887?v=4",
        name:" (استرا) عبدالرحمن",
        github:"aberamaneza",
        discord:"abderamane",
    },{
        photo:"https://avatars.githubusercontent.com/u/127412163?v=4",
        name:"حمود",
        github:"hamod6R",
        discord:"v3jn",
    },{
        photo:"https://avatars.githubusercontent.com/u/113200512?v=4",
        name:"محمد ايوب",
        github:"Mohmed-Ayoub-Js",
        discord:"mohamedayoubjs",
    },{
        photo:"https://avatars.githubusercontent.com/u/146781066?v=4",
        name:"بطاطس",
        github:"potato232",
        discord:"potato_232"
    },{
        photo:"https://avatars.githubusercontent.com/u/170880303?v=4",
        name:"انس",
        github:"MRbreaddz",
        discord:"mr_breaddz",
    },
    {
        photo:"https://avatars.githubusercontent.com/u/167677424?v=4",
        name:"رشاد",
        github:"DevRashad",
        discord:"rashad9412"
    },
    {
        photo:"https://avatars.githubusercontent.com/u/164629522?v=4",
        name:"ايوب",
        github:"1dev1a",
        discord:"ayoub.dev134_35426"
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
                <a href="https://discord.gg/bm6RUuV5dn"> افتح تذكرة تقديم في سيرفر الديسكورد</a>
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
