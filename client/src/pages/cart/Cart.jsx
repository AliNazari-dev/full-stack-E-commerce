import "./cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Announcment from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className='cartContainer'>
      <Announcment />
      <Navbar />
      <div className='wrapper'>
        <h1 className='title'>YOUR BAG</h1>
        <div className='top'>
          <button className='topbutton'>COUNTINUE SHOPPING</button>
          <div className='topTexts'>
            <span className='toptext '>Shopping Bag (2)</span>
            <span className='toptext'>Whishlist (0)</span>
          </div>
          <button className='topbutton filled'>CHECKOUT NOW</button>
        </div>
        <div className='bottom'>
          <div className='info'>
            {cart.products.map((product) => (
              <div className='productContainer'>
                <div className='pDetails'>
                  <img className='pImg' src={product.img} alt='' />
                  <div className='details'>
                    <span className='pName'>
                      <b>Product :</b> {product.title}
                    </span>
                    <span className='pId'>
                      <b>ID : </b>
                      {product._id}
                    </span>
                    <div className='pColor' style={{ background: product.color }}></div>
                    <span className='pSize'>
                      <b>Size :</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className='pPrice'>
                  <div className='amountContainer'>
                    <AddIcon />
                    <span className='pAmount'>{product.quantity}</span>
                    <RemoveIcon />
                  </div>
                  <div className='productPrice'>${product.price * product.quantity}</div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className='summary'>
            <h1 className='summaryTitle'>ORDER SUMMARY</h1>
            <div className='summaryItem'>
              <span className='summaryItemText'>Subtotal</span>
              <span className='summaryItemPrice'>${cart.total}</span>
            </div>
            <div className='summaryItem'>
              <span className='summaryItemText'>Estimated Shipping</span>
              <span className='summaryItemPrice'>$ {}</span>
            </div>
            <div className='summaryItem'>
              <span className='summaryItemText'>Shipping Discount</span>
              <span className='summaryItemPrice'>$ -5.99</span>
            </div>
            <div className='summaryItem total'>
              <span className='summaryItemText'>Total</span>
              <span className='summaryItemPrice'>${cart.total}</span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
