import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import "./singleProduct.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Single = () => {
  return (
    <div className='singleContainer'>
      <Announcement />
      <Navbar />
      <div className='wrapper'>
        <div className='imgContainer'>
          <img src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='any' className='image' />
        </div>
        <div className='infoContainer'>
          <h1 className='title'>Air Jordan Shoes</h1>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora itaque consectetur! Delectus sapiente temporibus beatae porro, rem pariatur assumenda, quasi fuga tempora labore sunt vel possimus totam, ullam quaerat.</p>
          <span className='price'>$20</span>
          <div className='filterContainer'>
            <div className='filter'>
              <span className='filterTitle'>Color</span>
              <div className='filterColor' style={{ background: "black" }}></div>
              <div className='filterColor' style={{ background: "darkblue" }}></div>
              <div className='filterColor' style={{ background: "gray" }}></div>
            </div>
            <div className='filter'>
              <span className='filterTitle'>Size</span>
              <select name='Size' id='' className='filterSize'>
                <option value='' className='filterSizeOption'>
                  XS
                </option>
                <option value='' className='filterSizeOption'>
                  S
                </option>
                <option value='' className='filterSizeOption'>
                  M
                </option>
                <option value='' className='filterSizeOption'>
                  L
                </option>
                <option value='' className='filterSizeOption'>
                  XL
                </option>
              </select>
            </div>
          </div>
          <div className='addContainer'>
            <div className='amountContainer'>
              <RemoveIcon />
              <span className='amount'>1</span>
              <AddIcon />
            </div>
            <button>ADD TO CARD</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Single;
