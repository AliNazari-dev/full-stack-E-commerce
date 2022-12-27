import "./slider.scss";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItem } from "../../data";
import { useState } from "react";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className='sliderContainer'>
      <div className='arrow' onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div className='wrapperSlider'>
        {sliderItem.map((slider) => (
          <div className='slide' key={slider.id} style={{ backgroundColor: `${sliderItem[sliderIndex]}` }}>
            <div className='imageContainer'>
              <img src={sliderItem[sliderIndex].img} alt='coverImage' />
            </div>
            <div className='infoContainer'>
              <h1 className='title'>{sliderItem[sliderIndex].title}</h1>
              <p className='desc'>{sliderItem[sliderIndex].descc}</p>
              <button className='button'>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className='arrow' onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
