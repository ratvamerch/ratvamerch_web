import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisible(entry.isIntersecting);
                            observer.unobserve(element.current);
                        }
                    }, { rootMargin }
                );


        element.current && observer.observe(element.current);

        return () => observer.disconnect(element.current);
    }, []);

    return isVisible;
};

export default useIntersection;