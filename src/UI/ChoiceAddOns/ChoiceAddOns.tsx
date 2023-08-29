import styles from './ChoiceAddOns.module.css'

type Props = {
    label: string,
    cost: number,
    isMonth: boolean
}

export default function ChoiceAddOns({label, cost, isMonth} : Props) {
    return(
        <div className={styles.container}>
            <p className={styles.label}>
                {label}
            </p>

            <p className={styles.cost}>
                {isMonth ? `+$${cost}/mo` : `+$${cost * 10}/yr`}
            </p>
        </div>
    )
}