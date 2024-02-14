import React, { useState } from 'react';
import { Button } from '../shared/atoms/button';
import { FleeingButton } from '../shared/atoms/fleeing-button';
import { ImageComponent } from '../shared/atoms/image';
import styles from './styles.module.scss';

function App() {
    const [showImages, setShowImages] = useState(false);

    const handleImage = () => {
        setTimeout(() => {
            setShowImages(true); // Устанавливаем состояние showImages в true после 700 мс
        }, 700);
    };

    return (
        <div className={styles.buttonWrapper}>
            {showImages ? (
                <ImageComponent /> // Отображаем картинку, если showImages равно true
            ) : (
                <>
                    <p>Будешь моей валентинкой????</p>
                    <Button title="Да" onClick={handleImage} /> {/* При клике на кнопку "Да" вызываем функцию handleImage */}
                    <FleeingButton title="Нет" />
                </>
            )}
        </div>
    );
}

export default App;
