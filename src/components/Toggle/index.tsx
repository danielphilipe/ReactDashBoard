import React from "react";
import { Container , ToggleLabel, ToggleSelector} from "./styles";

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
        
        uncheckedIcon={false}
        checkedIcon={false}
        checked
        onChange={()=> {}}
        
        />
        <ToggleLabel>Dark</ToggleLabel>

    </Container>
);

export default Toggle;
