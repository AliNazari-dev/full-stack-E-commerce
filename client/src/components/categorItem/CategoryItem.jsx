import { NavLink } from "react-router-dom";
import "./categoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className='categoryContainer'>
      <img src={item.img} alt='' />
      <div className='info'>
        <h1 className='title'>{item.title}</h1>
        <NavLink to={`/products/${item.cat}`}>
          <button className='button'>SHOP NOW</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryItem;
