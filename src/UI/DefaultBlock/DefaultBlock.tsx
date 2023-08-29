import Block from '../Block/Block'
import DarkButton from '../Button/DarkButton/DarkButton'
import GoBackButton from '../Button/GoBackButton/GoBackButton'
import PropgressBlock from '../ProgressBlock/ProgressBlock'
import styles from './DefaultBlock.module.css'

type Props = {
    selectedIndex: 1 | 2 | 3 | 4,
    title: string,
    description: string,
    onClickGoBack?: () => any,
    buttonLabel: 'Next Step' | 'Confirm',
    onClickButton: () => any,
    children: any
}

export default function DefaultBlock({selectedIndex, title, description, onClickGoBack, buttonLabel, onClickButton, children}: Props) {
    return (
        <div className={styles.container}>
            <Block>
                <div className={styles.content}>
                    <PropgressBlock 
                        selectedIndex={selectedIndex}
                    />

                    <div className={styles.infoContainer}>
                        <p className={styles.title}> 
                            { title }
                        </p>

                        <p className={styles.grayText}>
                            { description }
                        </p>

                        {children}

                        <div className={styles.buttonBlock}>
                            <DarkButton
                                label={buttonLabel}
                                onClick={onClickButton}
                            />
                        </div>   
                        
                        { selectedIndex !== 1 && !!onClickGoBack &&
                            <div className={styles.goBackButtonBlock}>
                                <GoBackButton 
                                    onClick={onClickGoBack}
                                />
                            </div>   
                        }                           
                    </div>
                </div>
            </Block>
        </div>
    )
}