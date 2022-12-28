import "./home.scss";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  );
};

export default Home;
