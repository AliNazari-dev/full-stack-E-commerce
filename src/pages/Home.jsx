import "./home.scss";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
    </div>
  );
};

export default Home;
