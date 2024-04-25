import "slick-carousel";

export class App {
  init() {
    $(".large-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
          },
        },
      ],
    });

    /* related products slider */
    $(".logos-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 400,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });

    $(".hero-slider").slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      // autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
          },
        },
      ],
    });

    $(".testimonial-slider").slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 500,
    });

    $(".protect-benefits-slider").slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: "unslick",
        },
      ],
    });
  }

  slickSLider() {}
}
