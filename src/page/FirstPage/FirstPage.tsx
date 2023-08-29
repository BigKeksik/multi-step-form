import { useState } from 'react'
import Block from '../../UI/Block/Block'
import Input from '../../UI/Input/Input'
import Step from '../../UI/Step/Step'
import styles from './FirstPage.module.css'
import DarkButton from '../../UI/Button/DarkButton/DarkButton'
import { useNavigate } from 'react-router-dom'
import PropgressBlock from '../../UI/ProgressBlock/ProgressBlock'
import DefaultBlock from '../../UI/DefaultBlock/DefaultBlock'

export default function FirstPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        if (!name.split(' ')[1]) {
            setNameError(true)
            return
        }

        if (!email.includes('@') || !email.split('@')[1].includes('.') || email.split('@').includes('@') || email.split('@')[1].split('.')[1].length < 2) {
            setEmailError(true)
            return
        }

        if (!phone.includes('+') || phone.length < 12 || Number(phone.match(/[^0-9]/)?.length) > 1) {
            setPhoneError(true)
            return
        }

        navigate('/second', {replace: true})
    }

    return (
        <DefaultBlock
            selectedIndex={1}
            title='Personal info'
            description='Please provide your name, email address, and phone number.'
            buttonLabel='Next Step'
            onClickButton={onClick}
        >
            <div className={styles.inputBlock}>
                <Input
                    label='Name'
                    value={name}
                    placeholder='e.g. Stephen King'
                    errorMessage='Enter the correct name'
                    isError={nameError}
                    onChange={(e: any) => {
                        setName(e.target.value)
                        setNameError(false)
                    }}
                />

                <Input
                    label='Email Address'
                    value={email}
                    placeholder='e.g. stephenking@lorem.com'
                    errorMessage='Enter the correct email'
                    isError={emailError}
                    onChange={(e: any) => {
                        setEmail(e.target.value)
                        setEmailError(false)
                    }}
                />

                <Input
                    label='Phone Number'
                    value={phone}
                    placeholder='e.g. +1 234 567 890'
                    errorMessage='Enter the correct number'
                    isError={phoneError}
                    onChange={(e: any) => {
                        setPhone(e.target.value)
                        setPhoneError(false)
                    }}
                />
            </div>                    
        </DefaultBlock>
    )
}