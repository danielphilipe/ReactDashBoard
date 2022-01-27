import styled from 'styled-components';

export const Container = styled.div`
      grid-area: CT;
      color: ${props => props.theme.colors.white};
      padding: 25px;
      background-color: ${props => props.theme.colors.primary};
`;