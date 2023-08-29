import styles from './Input.module.css'

type Props = {
    label: string,
    value: string,
    placeholder: string,
    isError: boolean,
    errorMessage: string  
    onChange: (e: any) => any
}

export default function Input({label, value, placeholder, isError, errorMessage, onChange}: Props) {
    return(
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <p className={styles.label}>
                    {label}
                </p>

                {isError &&
                    <p className={styles.error}>
                        {errorMessage}
                    </p>
                }
            </div>            

            <input
                className={isError ? styles.inputError : styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}