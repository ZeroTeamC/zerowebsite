import classes from "./main.module.css"
import aboutImg from "./res/about.png";
import communityImg from "./res/community.png";
import worksImg from "./res/works.png";
import { NavLink } from "react-router-dom";


export default function Main_page() {
    return (
        <div className={classes.body}>
            <h1 className={classes.bigTitle}>فريق صفر</h1>
            <div>
                <p className={classes.subMsg}>مكان حيث تتحول الافكار الى برامج كمبيوتر تفاعلية</p>
            </div>
            <div className={classes.pages}>
                <NavLink className={classes.nvlink} to="/accounts">
                    <img className={classes.icon} src={communityImg}></img>
                </NavLink>
                <NavLink className={classes.nvlink} to="/about">
                    <img className={classes.icon} src={aboutImg}></img>
                </NavLink>
                <NavLink className={classes.nvlink} to="/works">
                    <img className={classes.icon} src={worksImg}></img>
                </NavLink>
            </div>
        </div>
    )
}
