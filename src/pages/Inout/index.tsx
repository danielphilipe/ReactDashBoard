import React from "react";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from "./styles";

const Inout: React.FC = () =>{
    const month = [
        {value: 'Janeiro', label: 'Janeiro'},
        {value: 'Fevereiro', label: 'Fevereiro'},
        {value: 'Março', label: 'Março'}]
    

    return (
        <Container>
            <ContentHeader title="List" lineColor="#E44C4E">
                <SelectInput options={month}/>
            </ContentHeader>
            </Container>
    );
}

export default Inout;
