import { ICarouselSettings } from "../interfaces/carousel";

const carouselSettings: ICarouselSettings = {
  dots: false,
  speed: 1000,
  infinite: false,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default carouselSettings;
