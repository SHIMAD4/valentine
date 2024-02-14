import { FC, useState, useEffect } from 'react';
import styles from '../button/styles.module.scss';

export type FleeingButtonProps = {
    title?: string;
};
export const FleeingButton: FC<FleeingButtonProps> = ({ title }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const buttonSize = 120;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                const newX = window.innerWidth / 4 - buttonSize + 65;
                const newY = window.innerHeight / 4 - buttonSize - 7;
                setPosition({ x: newX, y: newY });
            } else {
                const newX = window.innerWidth / 5 - buttonSize - 105;
                const newY = window.innerHeight / 5 - buttonSize + 38;
                setPosition({ x: newX, y: newY });
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [buttonSize]);

    const updatePosition = () => {
        const newX = Math.round(Math.random() * (window.innerWidth / 2 - buttonSize + 65));
        const newY = Math.round(Math.random() * (window.innerHeight / 2 - buttonSize - 7));
        setPosition({ x: newX, y: newY });
    };

    return (
        <button
            className={styles.buttonDisabled}
            style={{
                position: 'absolute',
                left: position.x + 'px',
                top: position.y + 'px',
                width: buttonSize - 25 + 'px',
                height: buttonSize - 70 + 'px',
                transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={updatePosition}
        >
            {title}
        </button>
    );
};
