import "./newsLetter.scss";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const NewsLetter = () => {
  return (
    <div className='Newscontainer'>
      <h1 className='title'>NewsLetter</h1>
      <div className='desc'>get timely updates from your favorite products</div>
      <div className='inputContainer'>
        <input type='text' placeholder='Your Email' />
        <button>
          <SendOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
