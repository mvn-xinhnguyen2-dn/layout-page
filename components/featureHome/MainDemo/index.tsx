import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TitleSection } from "../index";

const demoList = [
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/digital-agency",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-1.png",
    title: "Digital Agency",
  },
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/creative-agency",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-2.png",
    title: "Creative Agency",
  },
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/personal-portfolio",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-3.png",
    title: "Corporate Agency",
  },
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/home-startup",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-4.png",
    title: "Home Startup",
  },
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/corporate-agency",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-5.png",
    title: "Corporate Agency",
  },
  {
    link: "https://new.axilthemes.com/demo/react/abstrak/",
    img: "https://new.axilthemes.com/demo/react/abstrak/images/others/demo-coming.png",
    title: "",
  },
];

const MainDemo = () => {
  return (
    <section className="section-maindemo" id="splash-demo">
      <div className="maindemo container">
        <TitleSection
          title="Our templates are just ready to use"
          text="You will love all of the features in our
            Template. 100% guaranteed satisfaction."
        />
        <ul className="maindemo-list flex">
          {demoList.map((item, index) => {
            let mainDemo = <></>;
            mainDemo = (
              <Link href={item.link} key={index}>
                <li className="maindemo-item col-6">
                  <a>
                    <div className="maindemo-item-img">
                      <Image
                        src={item.img}
                        alt="image demo"
                        height={630}
                        width={630}
                      />
                    </div>
                    <h4 className="title-h4">{item.title}</h4>
                  </a>
                </li>
              </Link>
            );
            return mainDemo;
          })}
        </ul>
      </div>
      <ul className="maindemo-bgshape-list">
        <li className="shape shape-3">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-35.png"
            alt="bubble"
            width={547}
            height={998}
          />
        </li>
        <li className="shape shape-4">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/line-4.png"
            alt="bubble"
            width={1440}
            height={381}
          />
        </li>
      </ul>
    </section>
  );
};

export default MainDemo;
