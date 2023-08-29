import { useNavigate } from 'react-router-dom'
import DefaultBlock from '../../UI/DefaultBlock/DefaultBlock'
import styles from './SecondPage.module.css'
import SelectedBlock from '../../UI/SelectedBlock/SelectedBlock'
import { useState } from 'react'
import ChoiceBlock from '../../UI/ChoiceBlock/ChoiceBlock'

type Props = {
    onClickButtonNext: (plan: 'arcade' | 'advanced' | 'pro', monthCost: number, isMonth: boolean) => any
}

export default function SecondPage({onClickButtonNext}: Props) {
    const [arcadeIsActive, setArcadeIsActive] = useState(false)
    const [advancedIsActive, setAdvancedIsActive] = useState(false)
    const [proIsActive, setProIsActive] = useState(false)
    const [isLeft, setIsLeft] = useState(true)
    const navigate = useNavigate()

    const onClick = () => {
        setIsLeft(!isLeft)
    }

    const onClickButton = () => {
        if (!(arcadeIsActive || advancedIsActive || proIsActive)) {
            return
        }

        if (arcadeIsActive) {
            onClickButtonNext('arcade', 9, isLeft)
        }
        
        if (advancedIsActive) {
            onClickButtonNext('advanced', 12, isLeft)
        }
        
        if (proIsActive) {
            onClickButtonNext('pro', 15, isLeft)
        }

        navigate('/third', {replace: true})
        return
    }

    return(
        <DefaultBlock
            selectedIndex={2}
            title='Select your plan'
            description='You have the option of monthly or yearly billing.'
            buttonLabel='Next Step'
            onClickButton={onClickButton}
            onClickGoBack={() => navigate('/', {replace: true})}
        >
            <div className={styles.selectBlock}>
                <SelectedBlock
                    label='Arcade'
                    costMonthly={9}
                    isFirst={true}
                    isActive={arcadeIsActive}
                    isYear={!isLeft}
                    onClick={() => {
                        setArcadeIsActive(!arcadeIsActive)
                        setAdvancedIsActive(false)
                        setProIsActive(false)
                    }}
                    icon={require('../../image/icon-arcade.svg').default}
                />

                <SelectedBlock
                    label='Advanced'
                    costMonthly={12}
                    isActive={advancedIsActive}
                    isYear={!isLeft}
                    onClick={() => {
                        setArcadeIsActive(false)
                        setAdvancedIsActive(!advancedIsActive)
                        setProIsActive(false)
                    }}
                    icon={require('../../image/icon-advanced.svg').default}
                />

                <SelectedBlock
                    label='Pro'
                    costMonthly={15}
                    isActive={proIsActive}
                    isYear={!isLeft}
                    onClick={() => {
                        setArcadeIsActive(false)
                        setAdvancedIsActive(false)
                        setProIsActive(!proIsActive)
                    }}
                    icon={require('../../image/icon-pro.svg').default}
                />
            </div>

            <ChoiceBlock
                isLeft={isLeft}
                leftText='Monthly'
                rightText='Yearly'
                onClick={onClick}
            />
        </DefaultBlock>
    )
}