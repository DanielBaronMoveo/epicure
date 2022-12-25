import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { ThreeCircles } from "react-loader-spinner";
import CarouselSettings from "../../utils/carouselSettings";
import Restaurant from "../../interfaces/restaurant";
import { Dish } from "../../interfaces/dish";

interface CarouselProps {
  data: Dish[] | Restaurant[] | null;
  Content: React.FC<{ item: any; isChef: boolean | undefined }>;
  isChef?: boolean | undefined;
}

const Carousel = ({ data, isChef, Content }: CarouselProps): JSX.Element => {
  const renderContent = () => {
    if (!data) {
      return (
        <div className="loader">
          <ThreeCircles
            height="100"
            width="100"
            color="#F9F4EA"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      );
    } else {
      return (
        <Slider className="slider" {...CarouselSettings}>
          {data.map((item: Dish | Restaurant) => (
            <Content key={item._id} item={item} isChef={isChef} />
          ))}
        </Slider>
      );
    }
  };
  return renderContent();
};

export default Carousel;
