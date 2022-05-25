import React from "react";
import styles from '../styles/rippleButton.module.css';
import Link from 'next/link';

const RippleButton = ({ children, link, type, onClick }) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            className= {` 
                relative w-40 rounded-md m-4 px-6 py-3 font-bold overflow-hidden cursor-pointer
                ${type == 'bordered' ? styles.borderButton : styles.rippleButton}
            `}

            onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                onClick && onClick(e);
            }}
        >
            {isRippling ? (
                <span
                className={`
                    absolute w-5 h-5 bg-teal-500 block content-none rounded-xl opacity-100 
                    ${styles.ripple}
                `}
                style={{
                    left: coords.x,
                    top: coords.y
                }}
                />
            ) : (
                ""
            )}
            <span className={`relative w-full h-full z-10 ${styles.content}`}>
                <Link href={`/${link}`} passHref>
                    <a>{children}</a>
                </Link>
            </span>
        </button>
    );
};

export default RippleButton;