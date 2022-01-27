import React from "react";

import {Container, Profile, Welcome, UserName} from './styles' ;
import Toggle from "../Toggle"
const MainHeader: React.FC = () =>{
    return (
        <Container>
            <Toggle>Toogle</Toggle>

            <Profile>
                <Welcome>Olá, 🤑</Welcome>
                <UserName>Daniel Quintal</UserName>

            </Profile>
        </Container>
    );
}

export default MainHeader;
