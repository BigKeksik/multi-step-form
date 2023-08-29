import styles from './CheckboxBlock.module.css'

type Props = {
    label: string,
    description: string,
    isChoice: boolean,
    monthCost: number,
    isMonth: boolean,
    onClick: () => any
}

export default function CheckboxBlock({label, description, isChoice, monthCost, isMonth, onClick}: Props) {
    return(
        <div className={isChoice ? styles.activeContainer : styles.container} onClick={onClick}>
            <div className={styles.choiceContaiener}>
                <div className={isChoice ? styles.activeCheckbox : styles.checkbox}>
                    {isChoice && 
                        <img src={require('../../image/icon-checkmark.svg').default} className={styles.checkmark} />
                    }
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.title}>
                        {label}
                    </p>

                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </div>

            <p className={styles.costText}>
                {isMonth ? `+$${monthCost}/mo` : `+$${monthCost * 10}/yr`}
            </p>
        </div>
    )
}