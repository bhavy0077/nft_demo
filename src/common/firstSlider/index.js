import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyleSlider } from "./style";
import "./style.css";

export default function FirstSlider({ data }) {
  const classes = useStyleSlider();

  const settings = {
    arrow: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className={classes.content}>
        <h2> Buy and Showcase</h2>
        <Slider {...settings}>
          {data.map((card, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div className={classes.article}>
                <img
                  className={classes.cardImage}
                  src={card.banner_image_url}
                  alt="background"
                />
                <h6 className={classes.header}>{card.name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
