import './CategoryItem.styles.scss'
const CategoryItem =({category})=>{
const {imageUrl , title} = category;
    return (
    < div className = 'category-conatiner' >
    <div className='category-background-image' style={{
     backgroundImage: `url(${imageUrl})`
    }} />
    <div className='category-body-container'>
      <h2 >{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
)
}

export default CategoryItem