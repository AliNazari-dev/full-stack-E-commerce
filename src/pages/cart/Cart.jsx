import "./cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Announcment from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import cartimg from "../../assets/image/cartImg.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import pp from "../../assets/image/pp.jpeg";
const Cart = () => {
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
            <div className='productContainer'>
              <div className='pDetails'>
                <img className='pImg' src={cartimg} alt='' />
                <div className='details'>
                  <span className='pName'>
                    <b>Product :</b> Lacoste Men's Sport
                  </span>
                  <span className='pId'>
                    <b>ID :</b> 9899867
                  </span>
                  <div className='pColor red'></div>
                  <span className='pSize'>
                    <b>Size :</b> XL
                  </span>
                </div>
              </div>
              <div className='pPrice'>
                <div className='amountContainer'>
                  <AddIcon />
                  <span className='pAmount'>2</span>
                  <RemoveIcon/>
                </div>
                <div className='productPrice'>$30</div>
              </div>
            </div>
            <hr />
            <div className='productContainer'>
              <div className='pDetails'>
                <img className='pImg' src={pp} alt='' />
                <div className='details'>
                  <span className='pName'>
                    <b>Product :</b> Valentino Shoes
                  </span>
                  <span className='pId'>
                    <b>ID :</b>7q3423667
                  </span>
                  <div className='pColor'></div>
                  <span className='pSize'>
                    <b>Size :</b> XL
                  </span>
                </div>
              </div>
              <div className='pPrice'>
                <div className='amountContainer'>
                  <AddIcon />
                  <span className='pAmount'>2</span>
                  <RemoveIcon />
                </div>
                <div className='productPrice'>$30</div>
              </div>
            </div>
          </div>
          <div className='summary'>
            <h1 className='summaryTitle'>ORDER SUMMARY</h1>
            <div className='summaryItem'>
              <span className='summaryItemText'>Subtotal</span>
              <span className='summaryItemPrice'>$80</span>
            </div>
            <div className='summaryItem'>
              <span className='summaryItemText'>Estimated Shipping</span>
              <span className='summaryItemPrice'>$ 5.99</span>
            </div>
            <div className='summaryItem'>
              <span className='summaryItemText'>Shipping Discount</span>
              <span className='summaryItemPrice'>$ -5.99</span>
            </div>
            <div className='summaryItem total'>
              <span className='summaryItemText'>Total</span>
              <span className='summaryItemPrice'>$80</span>
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
