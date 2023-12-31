import { BackgroundImage, DirectoryBodyContainer, DirectoryItemContainer } from './Directory-Item.styles';
import { useNavigate } from 'react-router-dom';
const DirectoryItem =({category})=>{
const {imageUrl , title,route} = category;
const navigate = useNavigate();

const onNavigateHandler = ()=>{
  navigate(route);
}
    return (
    <DirectoryItemContainer onClick = {onNavigateHandler}>
    <BackgroundImage 
      imageUrl = {imageUrl} />
    <DirectoryBodyContainer>
      <h2 >{title}</h2>
      <p>Shop Now</p>
    </DirectoryBodyContainer>
  </DirectoryItemContainer>
)
}

export default DirectoryItem