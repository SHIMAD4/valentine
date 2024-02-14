import { useState } from 'react';
import { Button } from '../shared/atoms/button';
import { FleeingButton } from '../shared/atoms/fleeing-button';
import { ImageComponent } from '../shared/atoms/image';
import styles from './styles.module.scss';

function App() {
    const [showImages, setShowImages] = useState(false);

    const handleImage = () => {
        setTimeout(() => {
            setShowImages(true);
        }, 700);
    };

    return (
        <div className={styles.buttonWrapper}>
            {showImages ? (
                <ImageComponent />
            ) : (
                <>
                    <p>Будешь моей валентинкой????</p>
                    <Button title="Да" onClick={handleImage} />
                    <FleeingButton title="Нет" />
                </>
            )}
        </div>
    );
}

export default App;
