export interface ICarouselSettings {
  dots: boolean;
  speed: number;
  infinite: boolean;
  slidesToShow: number;
  swipeToSlide: boolean;
  slidesToScroll: number;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      initialSlide: number;
    };
  }[];
}
