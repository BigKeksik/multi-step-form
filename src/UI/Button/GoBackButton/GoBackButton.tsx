import styles from './GoBackButton.module.css'

type Props = {
    onClick: () => any
}

export default function GoBackButton({onClick}: Props) {
    return (
        <p 
            className={styles.button}
            onClick={onClick}
        >
            Go Back
        </p>
    )
}