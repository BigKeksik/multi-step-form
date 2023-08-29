import styles from './ChoiceBlock.module.css'

type Props = {
    isLeft: boolean,
    leftText: string,
    rightText: string,
    onClick: () => any
}

export default function ChoiceBlock({isLeft, leftText, rightText, onClick}: Props) {
    return(
        <div className={styles.container}>
            <p className={isLeft ? styles.activeText : styles.text}>
                {leftText}
            </p>

            <div className={styles.choiceContainer} onClick={onClick}>
                <div 
                    className={styles.choiceBall} 
                    style={{marginLeft: isLeft ? 4 : 24}}    
                />
            </div>

            <p className={!isLeft ? styles.activeText : styles.text}>
                {rightText}
            </p>
        </div>
    )
}