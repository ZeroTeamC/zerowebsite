import './AppHead.css';
import { Link } from 'react-router-dom';

export default function AppHead() {
    return (
        <header className="main">
            <div className="items_container">
                <div className="item aboutMe tooltip">
                    <Link to="acounts/">حسابات الفريق</Link>
                    <span className="tooltiptext">حسابات الفريق</span>
                </div>
                <div className="item tooltip">
                    <Link to="works/">اعمالنا</Link>
                    <span className="tooltiptext">اعمال الفريق</span>
                </div>
                <div className="item tooltip">
                    <Link to="about/">عن الفريق</Link>
                    <span className="tooltiptext">ماهو فريق صفر</span>
                </div>
            </div>
            <Link to="/" className="item h1">فريق صفر</Link>
        </header>
    );
}