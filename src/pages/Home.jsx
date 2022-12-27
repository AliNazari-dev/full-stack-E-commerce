import "./home.scss";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/Slider/Slider";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
    </div>
  );
};

export default Home;
