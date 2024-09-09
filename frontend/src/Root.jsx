import { Suspense } from 'react';
import AppHead from './layout/AppHead.jsx';
import { Outlet } from 'react-router-dom';

import "./root.css";

export default function Root() {
    return (
        <div className="page-root">
            <AppHead />
            <div className="main-body" style={{ color: 'black' }}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}
