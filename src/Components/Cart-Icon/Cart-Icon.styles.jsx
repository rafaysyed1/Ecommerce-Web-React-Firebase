import styled from 'styled-components'
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'

export const ShoppingIcon = styled(ShoppingSvg)
`
width: 100%;
height: 30px;
`
export const  CartIconContainer = styled.div
`
width: 40px;
height: 50px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const CartItemCount = styled.span
`
position: absolute;
font-size: 15px;
font-weight: bold;
bottom: 12px;
`