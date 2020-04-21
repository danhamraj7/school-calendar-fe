import Nav from './Nav';
import React, {useState} from 'react'
import BotNav from './NavigationComponents/BotNav'
import MobileEvents from './eventComponents/MobileEvents'
import styled from 'styled-components'
import Dashboard from './Dashboard'

const Mobile = () => {

    const [NavState, setNavState] = useState(0) // 0 = calendar, 1 = events, 2 = groups

    const NavBar = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 83vh;`
    if(NavState === 0){
    return(
        <div>hello moto
            <Dashboard/>
            <Nav NavState={NavState} setNavState={setNavState} />
        </div>
    )
    } else if(NavState === 1){
        return(
        <div>hello im events
            <MobileEvents setNavState={setNavState}></MobileEvents>
            <Nav NavState={NavState} setNavState={setNavState} />
        </div>
        )
    } else if(NavState === 2){
        return(
            <div>hello im groups
            <Nav NavState={NavState} setNavState={setNavState} />
        </div>
        )
    }
}

export default Mobile
