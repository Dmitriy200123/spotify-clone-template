import {useCallback, useEffect, useRef} from "react";

export function useIntersectionObserver(entryFunc: () => void, options?: IntersectionObserverInit) {
    const observer = useRef<IntersectionObserver | null>(null);

    const callback = useCallback(
        (entries) => {
            if (entries.length === 0) {
                return;
            }

            if (entries[0].isIntersecting) {
                entryFunc();
            }
        },
        [entryFunc]
    );

    const infiniteScrollRef = useCallback(
        (node) => {
            if (!node) {
                return;
            }

            observer.current?.disconnect();

            observer.current = new IntersectionObserver(callback, options);
            observer.current.observe(node);
        },
        [callback, options]
    );
    useEffect(() => {
        return () => observer.current?.disconnect();
    }, []);

    return infiniteScrollRef;
}