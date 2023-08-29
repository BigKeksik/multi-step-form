import styles from './SelectedBlock.module.css'

type Props = {
    label: 'Arcade' | 'Advanced' | 'Pro',
    costMonthly: number,
    icon: string,
    isActive: boolean,
    isYear: boolean,
    isFirst?: boolean,
    onClick: () => any
}

export default function SelectedBlock({label, costMonthly, isFirst, icon, isActive, isYear, onClick}: Props) {
    return (
        <div 
            className={isActive ? styles.activeContainer : styles.container} 
            style={{marginLeft: isFirst ? 0 : 15}}   
            onClick={onClick} 
        >
            <div className={styles.imageBlock}>
                <img className={styles.image} src={icon} />
            </div>

            <div className={styles.textBlock}>
                <p className={styles.label}>
                    {label}
                </p>

                { !isYear && 
                    <p className={styles.cost}>
                        ${costMonthly}/mo 
                    </p>
                }

                { isYear && 
                    <>
                        <p className={styles.cost}>
                            ${costMonthly * 10}/yr 
                        </p>

                        <p className={styles.sale}>
                            2 months free
                        </p>
                    </>
                    
                }                
            </div>
        </div>
    )
}