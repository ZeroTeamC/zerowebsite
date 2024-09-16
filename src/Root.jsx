import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import "./root.css";
import AppHead from './layout/AppHead.jsx';

import { createResponsive, useMediaQuery } from "./hooks";

export const Responsive = createResponsive({});

export default function Root() {
    const sm = useMediaQuery("(max-width: 640px)");
    const md = useMediaQuery("(max-width: 835px)");
    const lg = useMediaQuery("(width >= 900px)");

    return (
        <Responsive.Provider value={{ sm, md, lg }}>
            <div className="page-root">
                <AppHead active />
                <div className="main-body" style={{ color: 'black' }}>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </Responsive.Provider>
    );
}


