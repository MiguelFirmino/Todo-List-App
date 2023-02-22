import styles from '../styles/Description.module.css';
import React from 'react'; 

const Description = ({todoAmmount}) => {
    if (todoAmmount > 1) {
        return (
            <p className={styles.pRed}>You've got {todoAmmount} things to do.</p>
        );
    } else if (todoAmmount === 1) {
        return (
            <p className={styles.pRed}>You've got one thing to do.</p>
        );
    } else {
        return (
            <p className={styles.pGreen}>You've got nothing to do.</p>
        );
    }
};

export default Description;