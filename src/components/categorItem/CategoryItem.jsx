import './categoryItem.scss'

const CategoryItem = ({item}) => {
  return (
    <div className="categoryContainer">
      <img src={item.img} alt="" />
      <div className="info">
        <h1 className="title">{item.title}</h1>
        <button className='button'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem