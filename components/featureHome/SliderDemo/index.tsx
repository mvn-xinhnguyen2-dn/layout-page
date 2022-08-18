import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-slide-1.png",
    link: "https://new.axilthemes.com/demo/react/abstrak/digital-agency",
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-slide-2.png",
    link: "https://new.axilthemes.com/demo/react/abstrak/creative-agency",
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-slide-3.png",
    link: "https://new.axilthemes.com/demo/react/abstrak/personal-portfolio",
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-slide-4.png",
    link: "https://new.axilthemes.com/demo/react/abstrak/home-startup",
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-slide-5.png",
    link: "https://new.axilthemes.com/demo/react/abstrak/corporate-agency",
  },
];

const SliderDemo = () => {
  const settings = {
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoPlay: true,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => {
          let slideList = <></>;
          slideList = (
            <div className="single-slide" style={{ width: 828 }} key={index}>
              <Link href={item.link}>
                <a>
                  <Image
                    src={item.img}
                    alt="bubble"
                    width={828}
                    height={467}
                    priority
                  />
                </a>
              </Link>
            </div>
          );
          return slideList;
        })}
      </Slider>
    </>
  );
};

export default SliderDemo;
