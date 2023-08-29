import { Routes, Route } from "react-router-dom";
import FirstPage from "../page/FirstPage/FirstPage";
import SecondPage from "../page/SecondPage/SecondPage";
import ThirdPage from "../page/ThirdPage/ThirdPage";
import { useState } from "react";
import FourthPage from "../page/FourthPage/FourthPage";
import FifthPage from "../page/FifthPage/FifthPage";

export default function RoutesPage({children}: any) {
    const [plan, setPlan] = useState('')
    const [monthCost, setMonthCost] = useState(0)
    const [isMonth, setIsMonth] = useState(false)
    const [isActiveOnlineService, setIsActiveOnlineService] = useState(false)
    const [isActiveLargerStorage, setIsActiveLargerStorage] = useState(false)
    const [isActiveCustomizableProfile, setIsActiveCustomizableProfile] = useState(false)

    const onClickSecond = (plan: 'arcade' | 'advanced' | 'pro', monthCost: number, isMonth: boolean) => {
        setPlan(plan)
        setMonthCost(monthCost)
        setIsMonth(isMonth)
    }

    const onClickThird = (isActiveOnlineService: boolean, isActiveLargerStorage: boolean, isActiveCustomizableProfile: boolean) => {
        setIsActiveCustomizableProfile(isActiveCustomizableProfile)
        setIsActiveLargerStorage(isActiveLargerStorage)
        setIsActiveOnlineService(isActiveOnlineService)
    } 
    
    return (
        <Routes>
            <Route path='/' element={ <FirstPage/> } />
            <Route path='/second' element={ <SecondPage onClickButtonNext={onClickSecond}/> } />
            <Route path='/third' element={ <ThirdPage isMonth={isMonth} onClick={onClickThird}/> } />
            <Route 
                path='/fourth' 
                element={ 
                    <FourthPage            
                        plan={plan}
                        monthCost={monthCost}
                        isMonth={isMonth}
                        isActiveOnlineService={isActiveOnlineService}
                        isActiveLargerStorage={isActiveLargerStorage}
                        isActiveCustomizableProfile={isActiveCustomizableProfile}
                    /> 
                } 
            />
            <Route path='/fifth' element={ <FifthPage />} />
        </Routes>
    )
}