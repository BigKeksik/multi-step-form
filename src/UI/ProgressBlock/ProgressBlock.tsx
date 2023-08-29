import Step from '../Step/Step'
import styles from './PropgressBlock.module.css'

type Props = {
    selectedIndex: 1 | 2 | 3 | 4
}

export default function PropgressBlock({selectedIndex}: Props) {
    return(
        <div className={styles.container}>
            <div className={styles.stepBlock}>
                <Step
                    number={1}
                    label='your info'
                    isActive={selectedIndex === 1 ? true : false}
                />
                
                <Step
                    number={2}
                    label='select plan'
                    isActive={selectedIndex === 2 ? true : false}
                />

                <Step
                    number={3}
                    label='add-ons'
                    isActive={selectedIndex === 3 ? true : false}
                />

                <Step
                    number={4}
                    label='summary'
                    isActive={selectedIndex === 4 ? true : false}
                />
            </div>
        </div>
    )
}