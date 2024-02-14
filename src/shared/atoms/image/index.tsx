import { FC, useEffect, useState } from "react";
import styles from './styles.module.scss';

export const ImageComponent: FC = () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.imageWrapper}>
            <img
                src="public/grave.jpg"
                alt="Your Image"
                style={{ width: windowSize.width < 500 ? windowSize.width * 0.8 : windowSize.width * 0.6 , height: windowSize.width < 500 ? windowSize.height * 0.3 : windowSize.height * 0.8 }}
            />
            <p>Я буду <span>любить</span> тебя даже если ты умрешь первая</p>
        </div>
    );
};
