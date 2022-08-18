import Link from "next/link";
import Image from "next/image";
import React from "react";
const dataContactBg = [
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-12.png",
    width: 601,
    height: 289,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-16.png",
    width: 24,
    height: 24,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-13.png",
    width: 75,
    height: 75,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-14.png",
    width: 80,
    height: 80,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-16.png",
    width: 24,
    height: 24,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-15.png",
    width: 140,
    height: 140,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-16.png",
    width: 24,
    height: 24,
  },
];

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="contact container">
        <h2 className="title-h2">
          Let&#39;s Start <br />
          Your Business Today!
        </h2>
        <p className="text">
          Missing something? Just tell us what you need by{" "}
          <u>
            <b>requesting us here.</b>
          </u>
        </p>
        <div className="btn btn-big">
          <Link href="https://themeforest.net/cart/configure_before_adding/37917149">
            <a>Buy Now</a>
          </Link>
        </div>
      </div>
      <ul className="contact-bgshape-list">
        {dataContactBg.map((item, index) => {
          let bgList = <></>;
          bgList = (
            <li className={`shape shape-${index + 1}`} key={index}>
              <Image
                src={item.img}
                alt="bg shape"
                width={item.width}
                height={item.height}
              />
            </li>
          );
          return bgList;
        })}
      </ul>
    </section>
  );
};

export default Contact;
