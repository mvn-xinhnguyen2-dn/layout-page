import React from "react";
import Image from "next/image";
import { TitleSection } from "../index";
import { FaAngleRight } from "react-icons/fa";
const dataReason = [
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-22.png",
    title: <>A Complete Product for Your Business</>,
    text: "We build a template that is rich in content and has a good user interface to deliver a premium user experience for your customers.",
    shape: <></>,
    button: <></>,
  },
  {
    img: "	https://new.axilthemes.com/demo/react/abstrak/images/icon/hart-rate.png",
    title: (
      <>
        Fast Loading
        <br />
        Speed
      </>
    ),
    text: "The website speed is very important. Hence we've created Abstrak in a way that your website will load fast, and you will get better performance.",
    shape: <></>,
    button: <></>,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-24.png",
    title: (
      <>
        Well Organized
        <br />
        Codes
      </>
    ),
    text: "The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.",
    shape: <></>,
    button: <></>,
  },
  {
    img: "https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-25.png",
    title: (
      <>
        Online
        <br />
        Documentation
      </>
    ),
    text: "Well organized and up to date",
    button: (
      <div className="btn btn-small">
        <FaAngleRight />
      </div>
    ),
    shape: (
      <ul className="bg-shape">
        <li className="shape">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-34.png"
            width="190"
            height="139"
            alt="background shape"
          />
        </li>
        <li className="shape">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/line-8.png"
            width="240"
            height="82"
            alt="background shape"
          />
        </li>
      </ul>
    ),
  },
  {
    img: "	https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-26.png",
    title: (
      <>
        Submit A<br />
        Support Ticket
      </>
    ),
    text: "We response within 1 Business day. weekends excluded.",
    button: (
      <div className="btn btn-small">
        <FaAngleRight />
      </div>
    ),
    shape: <></>,
  },
];

const Reason = () => {
  return (
    <section className="section-reason" id="splash-why-choose">
      <div className="reason container">
        <TitleSection
          title="Why buy the template from us?"
          text="Every template is built with such efforts that they are ready to meet all of our clients' expectations."
        />
        <ul className="reason-list flex">
          {dataReason.map((item, index) => {
            let ReasonList = <></>;
            ReasonList = (
              <li className="reason-item col-4" key={index}>
                <div className="reason-item-content">
                  <div className="reason-item-title flex">
                    <div className="reason-item-icon flex">
                      <Image
                        src={item.img}
                        alt="services icon"
                        height={24}
                        width={24}
                      />
                    </div>
                    <h5 className="title-h5">{item.title}</h5>
                  </div>
                  <p className="text">{item.text}</p>
                  <>{item.button}</>
                  <>{item.shape}</>
                </div>
              </li>
            );
            return ReasonList;
          })}
        </ul>
      </div>
      <div className="line-shape">
        <Image
          src="https://new.axilthemes.com/demo/react/abstrak/images/others/line-6.png"
          width="1440"
          height="380"
          alt="background shape"
        />
      </div>
    </section>
  );
};

export default Reason;
