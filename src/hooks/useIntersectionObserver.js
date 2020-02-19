import { useRef, useState, useEffect } from "react"
import 'intersection-observer';

export const useIntersectionObserver = () => {
    const targetRef = useRef(null);
    const [isIntersected, setIsIntersected] = useState(false);
    useEffect(() => {
        if (targetRef.current === null) {
            return;
        }
        const observer = new IntersectionObserver((changes) => {
            changes.forEach((change) => {
                if (change.isIntersecting) {
                    setIsIntersected(true);
                    observer.disconnect();
                }
            }, { rootMargin: '0px 0px -200px' });
        });
        const handleScroll = () => {
            if (targetRef.current === null) return;
            observer.observe(targetRef.current);
            window.removeEventListener('scroll', handleScroll);
        }
        window.addEventListener('scroll', handleScroll);
        return () => observer.disconnect();
    }, []);
    return [targetRef, isIntersected];
}