import React, { useState } from 'react';
import './AppHead.css';
import './App.css';
import Main_page from './pages/Main_page.js';
import Works from './pages/Works.js';
import Accounts from './pages/Accounts.js';

function AppHead({ onItemClick }) {
    return (
        <div>
            <header className="main">
                <div className="items_container">
                    <div className="item aboutMe tooltip" onClick={() => onItemClick('accounts')}>
                        <a>حسابات الفريق</a>
                        <span className="tooltiptext">حسابات الفريق</span>
                    </div>
                    <div className="item tooltip" onClick={() => onItemClick('works')}>
                        <a>اعمالنا</a>
                        <span className="tooltiptext">اعمال الفريق</span>
                    </div>
                    <div className="item tooltip" onClick={() => onItemClick('main')}>
                        <a>عن الفريق</a>
                        <span className="tooltiptext">ماهو فريق صفر</span>
                    </div>
                </div>
                <h1 className="item">فريق صفر</h1>
            </header>
        </div>
    );
}

export default AppHead;
