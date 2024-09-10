import "./main.css"
import aboutImg from "./res/about.png";
import communityImg from "./res/community.png";
import worksImg from "./res/works.png";
import { NavLink, Link } from "react-router-dom";
import Lottie from 'lottie-react';
export default function Main_page() {
    return (
        <div className="body">
            <h1 className="bigTitle">فريق صفر</h1>
            <div>
                <p className="subMsg">مكان حيث تتحول الافكار الى برامج كمبيوتر تفاعلية</p>
            </div>
            <div className="pages">
                <NavLink className="nvlink" to="/accounts">
                    <img className="icon" src={communityImg}></img>
                </NavLink>
                <NavLink className="nvlink" to="/about">
                    <img className="icon" src={aboutImg}></img>
                </NavLink>
                <NavLink className="nvlink" to="/works">
                    <img className="icon" src={worksImg}></img>
                </NavLink>
            </div>
        </div>
    )
}
