import { useNavigate } from 'react-router-dom'
import DefaultBlock from '../../UI/DefaultBlock/DefaultBlock'
import styles from './ThirdPage.module.css'
import CheckboxBlock from '../../UI/CheckboxBlock/CheckboxBlock'
import { useState } from 'react'

type Props = {
    isMonth: boolean,
    onClick: (isActiveOnlineService: boolean, isActiveLargerStorage: boolean, isActiveCustomizableProfile: boolean) => any
}

export default function ThirdPage({isMonth, onClick}: Props) {
    const [isActiveOnlineService, setIsActiveOnlineService] = useState(false)
    const [isActiveLargerStorage, setIsActiveLargerStorage] = useState(false)
    const [isActiveCustomizableProfile, setIsActiveCustomizableProfile] = useState(false)
    const navigate = useNavigate()

    const onClickNextButton = () => {
        onClick(isActiveOnlineService, isActiveLargerStorage, isActiveCustomizableProfile)
        navigate('/fourth', {replace: true})
    }

    return(
        <DefaultBlock
            selectedIndex={3}
            title='Pick add-ons'
            description='Add-ons help enhance your gaming experience.'
            buttonLabel='Next Step'
            onClickButton={onClickNextButton}
            onClickGoBack={() => navigate('/second', {replace: true})}
        >
            <div className={styles.container}>
                <CheckboxBlock
                    label='Online service'
                    description='Access to multiplayer games'
                    isChoice={isActiveOnlineService}
                    monthCost={1}
                    isMonth={isMonth}
                    onClick={() => {
                        setIsActiveOnlineService(!isActiveOnlineService)
                    }}
                />

                <CheckboxBlock
                    label='Larger storage'
                    description='Extra 1TB of cloud save'
                    isChoice={isActiveLargerStorage}
                    monthCost={2}
                    isMonth={isMonth}
                    onClick={() => {
                        setIsActiveLargerStorage(!isActiveLargerStorage)
                    }}
                />

                <CheckboxBlock
                    label='Customizable profile'
                    description='Custom theme on your profile'
                    isChoice={isActiveCustomizableProfile}
                    monthCost={2}
                    isMonth={isMonth}
                    onClick={() => {
                        setIsActiveCustomizableProfile(!isActiveCustomizableProfile)
                    }}
                />
            </div>
        </DefaultBlock>
    )
}