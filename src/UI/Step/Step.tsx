import styles from './Step.module.css'

type Props = {
    number: number,
    label: string,
    isActive: boolean
}

export default function Step({number, label, isActive}: Props) {
    return (
        <div className={styles.container}>
            <div className={isActive ? styles.numberActive : styles.number}>
                <p className={isActive ? styles.numberTextActive : styles.numberText}>
                    {number}
                </p>
            </div>

            <div className={styles.stepInfoContainer}>
                <p className={styles.stepText}>
                    STEP {number}
                </p>

                <p className={styles.labelText}>
                    {label.toUpperCase()}
                </p>
            </div>
        </div>
    )
}