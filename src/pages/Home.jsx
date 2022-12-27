import "./home.scss";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Categories from "../components/categories/Categories";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
    </div>
  );
};

export default Home;
