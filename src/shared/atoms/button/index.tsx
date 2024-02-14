import  { FC, useState } from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

type ButtonProps = {
    title?: string;
    onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
    const [clicked, setClicked] = useState(false);

    const animateButton = () => {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 700);
    };

    return (
        <button className={clsx(styles.button, clicked && styles.animate)} onClick={() => {
            onClick()
            animateButton()
        }}>
            {title}
        </button>
    );
};
