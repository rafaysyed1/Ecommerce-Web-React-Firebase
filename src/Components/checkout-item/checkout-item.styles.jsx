import styled from 'styled-components'

export const CheckoutItemContainer = styled.div
`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
export const CheckoutImageContainer = styled.div
`
      width: 23%;
      padding-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
`;
export const CheckOutProductName = styled.span
`
width: 23%;
`
export const CheckOutProductQuantity = styled.span
`
width: 23%;
display: flex;
.value {
  margin: 0 15px;
}
`
export const CheckOutProductPrice = styled.span
`
width: 23%;
`
export const Arrow = styled.div
`
cursor: pointer;
`
export const CheckOutRemoveButton = styled.div
`
padding-left: 12px;
cursor: pointer;

`