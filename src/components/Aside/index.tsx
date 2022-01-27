import React from "react";
import logoImg from '../../assets/logo.svg';
import {Container,Header,LogImg,MenuContainer,MenuItemLink,Tittle} from './styles' ;
import {MdDashboard, MdArrowDownward,MdArrowUpward,MdExitToApp} from 'react-icons/md';

const Aside: React.FC = () =>{
    return (
        <Container>

            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Tittle>Minha carteira</Tittle>
            </Header>
           
           
           <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    DashBoard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
           </MenuContainer>
        </Container>
    );
}

export default Aside;
