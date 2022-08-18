import React from "react";
import Image from "next/image";
import { TitleSection } from "../index";
const dataServices = [
  {
    key: 1,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/react.png",
    title: (
      <>
        Powered by <br />
        React
      </>
    ),
    text: "Our Template is Perfect for all devices. It is made by React Structure. React JS was designed to provide high performance in mind.",
  },
  {
    key: 2,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/code-2.png",
    title: (
      <>
        Reusable
        <br />
        Components
      </>
    ),
    text: "All the Components of this template are reusable. We made abstrak using functional components. You can reuse any components",
  },
  {
    key: 3,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/sass.png",
    title: (
      <>
        Sass
        <br />
        Available
      </>
    ),
    text: "Sass is more stable, powerful, and elegant because it is an extension of CSS. So, it is easy for designers and developers to work more efficiently and quickly.",
  },
  {
    key: 4,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/loading.png",
    title: (
      <>
        Fast Loading
        <br />
        Speed
      </>
    ),
    text: "The website speed is very important. Hence we've created Abstrak in a way that your website will load fast, and you will get better performance.",
  },
  {
    key: 5,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/responsive.png",
    title: (
      <>
        Fully
        <br />
        Responsive
        <br />
        Layout
      </>
    ),
    text: "All the pages of this template are responsive. We used the Bootstrap framework to build the website. It's the best in class.",
  },
  {
    key: 6,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-13.png",
    title: (
      <>
        Modern
        <br />
        Design
      </>
    ),
    text: "Abstrak is a modern creative design for Creative, Digital, Corporate agencies, etc. Abstrak is a perfect solution for your digital agency",
  },
  {
    key: 7,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/code.png",
    title: (
      <>
        Well Organized
        <br />
        Codes
      </>
    ),
    text: "The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.",
  },
  {
    key: 8,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-20.png",
    title: (
      <>
        Lifetime
        <br />
        Update
      </>
    ),
    text: "Purchase our template only once and get lifetime updates. We keep updating our products to stay up to date with the latest trends and technology.",
  },
  {
    key: 9,
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-21.png",
    title: (
      <>
        Mobile
        <br /> Optimized
      </>
    ),
    text: "All the pages of this template are optimized. We used the Bootstrap framework to build the website. It's the best in class.",
  },
];

const Services = () => {
  return (
    <section className="section-services bg-dark" id="splsh-features">
      <div className="services container">
        <TitleSection
          title="We have Impressive Features"
          text="You will love all of the features in our template. 100% guaranteed satisfaction."
        />
        <ul className="services-list flex">
          {dataServices.map((item: any) => {
            let servicesList = <></>;
            servicesList = (
              <li className="services-item col-4" key={item.key}>
                <div className="services-item-content">
                  <div className="services-item-img mb-30">
                    <Image
                      src={item.img}
                      alt="services icon"
                      height={48}
                      width={48}
                    />
                  </div>
                  <h5 className="title-h5 mb-30">{item.title}</h5>
                  <p className="text">{item.text}</p>
                </div>
              </li>
            );
            return servicesList;
          })}
        </ul>
      </div>
      <ul className="services-bgshape-list">
        <li className="shape shape-1">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/circle-1.png"
            alt="circle"
            width={663}
            height={663}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/line-3.png"
            alt="line"
            width={550}
            height={550}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-5.png"
            alt="bubble"
            width={105}
            height={106}
          />
        </li>
      </ul>
    </section>
  );
};

export default Services;
