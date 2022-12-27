import "./categories.scss";
import { categories } from "../../data";
import CategoryItem from "../categorItem/CategoryItem";

const Categories = () => {
  
  return(
    <div className='categoriContainer'>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
