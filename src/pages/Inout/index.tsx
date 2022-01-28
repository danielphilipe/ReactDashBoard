import React, {useMemo, useState, useEffect} from "react";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import { useParams } from "react-router-dom";

import gains from '../../Repositories/gains';
import expenses from '../../Repositories/expenses';

import { Container, Content, Filters } from "./styles";

interface IData {
    id: number
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const Inout: React.FC = () =>{
    
    const [data,setData] = useState<IData[]>([]);

    const type = useParams();

    const props = useMemo(() => {
        return type.type === 'in' ? {
            title: 'Entrada',
            lineColor: '#F7931B',
            request: gains
        } : {
            title: 'Saída',
            lineColor: '#E44C4E',
            request: expenses
        }
    },[type.type])

    const month = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'}]
    const year = [
        {value: 2022, label: 2022}]

        useEffect(() =>{
       const response = props.request.map(item =>{
                return {
                    id: Math.random()*data.length,
                    description: item.description,
                    amountFormatted: item.amount,
                    frequency: item.frequency,
                    dateFormatted: item.date,
                    tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'
                }
            })
            setData(response);
        })

    return (
        <Container>
            <ContentHeader title={props.title} lineColor={props.lineColor}>
                <SelectInput options={month}/>
                <SelectInput options={year}/>
            </ContentHeader>

            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button 
                type="button"
                className="tag-filter tag-filter-eventual">

                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item =>(
                        <HistoryFinanceCard
                         key={item.id}
                         tagColor={item.tagColor}
                         title={item.description}
                         subtitle={item.dateFormatted}
                         amount={item.amountFormatted}
                        />
                    ))
                }
               
            </Content>
            </Container>
    );
}

export default Inout;
