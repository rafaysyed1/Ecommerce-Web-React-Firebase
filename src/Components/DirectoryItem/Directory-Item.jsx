import './Directory-Item.styles.scss'
const DirectoryItem =({category})=>{
const {imageUrl , title} = category;
    return (
    < div className = 'directory-item-conatiner' >
    <div className='directory-background-image' style={{
     backgroundImage: `url(${imageUrl})`
    }} />
    <div className='directory-body-container'>
      <h2 >{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
)
}

export default DirectoryItem