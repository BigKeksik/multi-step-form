import Block from '../../UI/Block/Block'
import PropgressBlock from '../../UI/ProgressBlock/ProgressBlock'
import styles from './FifthPage.module.css'

export default function FifthPage() {
    return (
        <div className={styles.container}>
            <Block>
                <div className={styles.content}>
                    <PropgressBlock 
                        selectedIndex={4}
                    />

                    <div className={styles.infoContainer}>
                        <img src={require('../../image/icon-thank-you.svg').default} className={styles.image} />

                        <p className={styles.title}>
                            Thank you!
                        </p>

                        <p className={styles.text}>
                            Thanks for confirming your subsription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                        </p>
                    </div>
                </div>
            </Block>
        </div>
    )
}