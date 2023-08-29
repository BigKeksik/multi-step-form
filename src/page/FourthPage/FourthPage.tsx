import { useNavigate } from 'react-router-dom'
import DefaultBlock from '../../UI/DefaultBlock/DefaultBlock'
import styles from './FourthPage.module.css'
import ChoiceAddOns from '../../UI/ChoiceAddOns/ChoiceAddOns'
import { useEffect, useState } from 'react'

type Props = {
    plan: string,
    monthCost: number, 
    isMonth: boolean,
    isActiveOnlineService: boolean,
    isActiveLargerStorage: boolean,
    isActiveCustomizableProfile: boolean
}

export default function FourthPage({plan, monthCost, isMonth, isActiveOnlineService, isActiveLargerStorage, isActiveCustomizableProfile}: Props) {
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        let cost = monthCost

        if (isActiveOnlineService) {
            cost += 1
        }

        if (isActiveLargerStorage) {
            cost += 2
        }
        
        if (isActiveCustomizableProfile) {
            cost += 2
        }

        setTotalCost(cost)
    }, [])

    const navigate = useNavigate()

    return(
        <DefaultBlock
            selectedIndex={4}
            title='Finishing up'
            description='Double-check everything looks OK before confirming.'
            buttonLabel='Confirm'
            onClickButton={() => navigate('/fifth', {replace: true})}
            onClickGoBack={() => navigate('/third', {replace: true})}
        >
            <div className={styles.container}>
                <div className={styles.planBlock}>
                    <div className={styles.planTextBlock}>
                        <p className={styles.plan}>
                            {plan[0].toUpperCase() + plan.slice(1)} {isMonth ? ' (Monthly)' : ' (Yearly)'}
                        </p>

                        <p className={styles.grayTextPointer} onClick={() => {navigate('/second', {replace: true})}}>
                            <u>Change</u>
                        </p>
                    </div>

                    <p className={styles.planCost}>
                        {`$${isMonth ? `${monthCost}/mo` : `${monthCost * 10}/yr` }`}
                    </p>
                </div>

                <div className={styles.grayBorder}/>

                {isActiveOnlineService &&
                    <ChoiceAddOns
                        label='Online service'
                        cost={1}
                        isMonth={isMonth}
                    />
                }
                
                {isActiveLargerStorage &&
                    <ChoiceAddOns
                        label='Larger storage'
                        cost={2}
                        isMonth={isMonth}
                    />
                }
                
                {isActiveCustomizableProfile &&
                    <ChoiceAddOns
                        label='Customizable profile'
                        cost={2}
                        isMonth={isMonth}
                    />
                }
            </div>

            <div className={styles.totalCostBlock}>
                <p className={styles.grayText}>
                    {'Total (per '} {isMonth ? 'month)' : 'year)'}
                </p>

                <p className={styles.totalCost}>
                    {isMonth ? `+$${totalCost}/mo` : `$${totalCost * 10}/yr`}
                </p>
            </div>
        </DefaultBlock>
    )
}