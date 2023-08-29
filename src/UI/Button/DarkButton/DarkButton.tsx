import styles from './DarkButton.module.css'

type Props = {
    label: 'Next Step' | 'Confirm',
    onClick: () => any
}

export default function DarkButton({label, onClick}: Props) {
    return (
        <div 
            className={label === 'Next Step' ? styles.container : styles.confirmContainer}
            onClick={onClick}
        >
            <p className={styles.label}>
                {label}
            </p>
        </div>
    )
}