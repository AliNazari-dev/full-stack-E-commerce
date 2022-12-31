import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
        <div className='left'>
          <h1 className='logo'>Alex</h1>
          <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor maxime dolorum debitis id dolore suscipit nostrum fuga repellendus, veritatis qui? Odio vel consectetur incidunt obcaecati, aperiam accusamus eveniet magni?</p>
          <div className='socialContainer'>
            <div className='socialIcon'>
              <InstagramIcon style={{ color: "#e47440" }} />
            </div>
            <div className='socialIcon'>
              <FacebookIcon style={{ color: "#3B5999" }} />
            </div>
            <div className='socialIcon'>
              <YouTubeIcon style={{ color: "red" }} />
            </div>
            <div className='socialIcon'>
              <TwitterIcon style={{ color: "#55ACEE" }} />
            </div>
          </div>
        </div>
        <div className='center'>
          <h3 className='title'>Useful Links</h3>
          <ul className='list'>
            <li className='listItem'>Home</li>
            <li className='listItem'>Cart</li>
            <li className='listItem'>Man Fashion</li>
            <li className='listItem'>Woman Fashion</li>
            <li className='listItem'>Accessories</li>
            <li className='listItem'>My Account</li>
            <li className='listItem'>Order Tracking</li>
            <li className='listItem'>Wish List</li>
            <li className='listItem'>Terms & Condition</li>
          </ul>
        </div>
        <div className='right'>
          <h3 className='title'>Contact us</h3>
          <div className='contactItem'>
            <LocationOnIcon className='icon' style={{ color: "red" }} />
            Iran , tehran , ekbatan town B2
          </div>
          <div className='contactItem'>
            <GitHubIcon className='icon' style={{ color: "#000" }} />
            AliNazari-Dev
          </div>
          <div className='contactItem'>
            <EmailIcon className='icon' style={{ color: "gray" }} />
            Alinazarii7394@gmail.com
          </div>
        </div>
      </div>
      <div className='copyright'>
        Designed & Developed with
        <FavoriteIcon style={{color:"red",margin:"0px 10px"}}/> By Ali Nazari
      </div>
    </>
  );
};

export default Footer;
