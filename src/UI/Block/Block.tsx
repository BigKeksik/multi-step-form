import styles from './Block.module.css'

export default function Block({children}: any) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}