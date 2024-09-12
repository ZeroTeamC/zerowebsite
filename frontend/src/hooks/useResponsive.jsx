
import { createContext, useContext, useEffect, useState, Context } from "react";

/** @typedef {Record<string, { min: number, max: number }>} ResponsiveParams */

/**
  * @param {string} query
  * @returns {boolean}
  */
export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export const createResponsive = () => {
    return createContext({});
}

/**
  * @param {Context<Record<string, boolean>>} context
  * @returns {string}
  */
export function useResponsive(context) {
    const ctx = useContext(context);
    for (let key in ctx)
        if (ctx[key]) return key;
}
