import React from "react";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from "./styles";

const Dashboard: React.FC = () =>{
    const month = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}]
    

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#E44C4E">
                <SelectInput options={month} onChange={()=>{}}/>
            </ContentHeader>
            </Container>
    );
}

export default Dashboard;
