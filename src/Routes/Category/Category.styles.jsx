import styled from 'styled-components'
export const CategoryContainer = styled.div

`
display: grid;
grid-template-columns: repeat(4,1fr);
row-gap: 20px;
column-gap: 20px;
`;
export const CategoryTitle = styled.h2
`
display: flex;
justify-content: center;
font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
`
