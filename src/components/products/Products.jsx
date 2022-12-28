import "./products.scss";
import { popularProduct } from "../../data";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Products = () => {
  return (
    <div className='productsContainer'>
      {popularProduct.map((item) => (
        <div key={item.id} className='container'>
          <img src={item.img} />
          <div className='info'>
            <div className='icon'>
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className='icon'>
              <SearchOutlinedIcon />
            </div>
            <div className='icon'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
