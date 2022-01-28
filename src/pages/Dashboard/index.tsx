import React from "react";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from "./styles";

const Dashboard: React.FC = () =>{
    const month = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'}]
    

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#E44C4E">
                <SelectInput options={month}/>
            </ContentHeader>
            </Container>
    );
}

export default Dashboard;
