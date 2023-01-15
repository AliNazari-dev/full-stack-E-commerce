import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import "./singleProduct.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../hooks/requestMethod";

const Single = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (q) => {
    if (q == "add") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity !== 1 ? quantity - 1 : 1);
    }
  };

  const handleAddToCart = () => {};

  return (
    <div className='singleContainer'>
      <Announcement />
      <Navbar />
      <div className='wrapper'>
        <div className='imgContainer'>
          <img src={product.img} alt='any' className='image' />
        </div>
        <div className='infoContainer'>
          <h1 className='title'>{product.title}</h1>
          <p className='desc'>{product.desc}</p>
          <span className='price'>${product.price}</span>
          <div className='filterContainer'>
            <div className='filter'>
              <span className='filterTitle'>Color : </span>
              {!product.color ? "loading" : product.color.map((color, index) => <div onClick={() => setColor(color)} key={index} className='filterColor' style={{ background: color }}></div>)}
            </div>
            <div className='filter'>
              <span className='filterTitle'>Size</span>
              <select name='Size' id='' className='filterSize' onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((s, index) => (
                  <option key={index} value={s} className='filterSizeOption'>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='addContainer'>
            <div className='amountContainer'>
              <RemoveIcon onClick={() => handleQuantity("rm")} />
              <span className='amount'>{quantity}</span>
              <AddIcon onClick={() => handleQuantity("add")} />
            </div>
            <button onClick={handleAddToCart}>ADD TO CARD</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Single;
