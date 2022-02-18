import React, {useMemo, useState, useEffect} from "react";

import uuid from "uuidv4";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import { useParams } from "react-router-dom";

import listOfMonths from '../../Utils/months';

import gains from '../../Repositories/gains';
import expenses from '../../Repositories/expenses';
import formatCurrency from '../../Utils/formatCurrency';
import formatDate from '../../Utils/formatDate';

import { Container, Content, Filters } from "./styles";

interface IData {
    id: string
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const Inout: React.FC = () =>{
    
    const [data,setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [frequencySelected,setFrequencySelected] = useState(['recurrent','eventual']);
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

    const months = useMemo(()=>{

        return listOfMonths.map((month,index)=>{
            return {
                value: index +1,
                label: month
            };
        })
            
        
    },[props]);
   
        const year = useMemo(()=>{
            let uniqueYears: number[] = [];
            props.request.forEach(element => {
                const date = new Date(element.date);
                const year = date.getFullYear();

                if(!uniqueYears.includes(year)){
                    uniqueYears.push(year);
                }
            });

            return uniqueYears.map(year => {
                return {
                    value: year,
                    label: year
                };
            });

        },[props]);

        const handleFrequencyClick = (frequency: string) =>{
            const alreadySelected = frequencySelected.findIndex(item=> item === frequency);

            if(alreadySelected >= 0){
                console.log('ja selecionou')
            }
        }

        useEffect(() =>{
       
            const filteredDate = props.request.filter(item =>{
            const date = new Date(item.date);
            const month = String(date.getMonth() +1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected
       });


       const formattedDate = filteredDate.map(item=>{
           
        return {
            id: uuid(),
            description: item.description,
            amountFormatted: formatCurrency(Number(item.amount)),
            frequency: item.frequency,
            dateFormatted: formatDate(item.date),
            tagColor: item.frequency === 'recorrente' ? '#4E41F0':'#E44C4E'
        }
        });
        setData(formattedDate);
       
        console.log(data);

        },[props,monthSelected,yearSelected]);

    return (
        <Container>
            <ContentHeader title={props.title} lineColor={props.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={year} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent"
                onClick={() => handleFrequencyClick('recurrent')}>
                    Recorrentes
                </button>

                <button 
                type="button"
                className="tag-filter tag-filter-eventual"
                onClick={() => handleFrequencyClick('eventual')}>

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
