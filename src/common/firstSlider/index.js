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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <div className={classes.content}>
      <h2> Showcase</h2>
      <Slider {...settings}>
        {data.map((card, index) => (
          <>
            <div key={index} style={{ position: "relative" }}>
              <img src={card.banner_image_url} className={classes.cardImage} />
              <div style={{ position: "absolute" }}>{card.name}</div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
