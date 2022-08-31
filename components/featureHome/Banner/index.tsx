import Image from "next/image";
import React,{useCallback, useEffect} from "react";
import { Slider } from "../index";

const data = [
  { key: 1, text: "Demo Website (More Coming)", number: 5 },
  {
    key: 2,
    text: "Inner Page",
    number: 30,
  },
  {
    key: 3,
    text: "Elements",
    number: 30,
  },
];

const Banner = () => {
  useEffect(()=>{
    function animateValue(
      obj: HTMLElement | null,
      start: number,
      end: number,
      duration: number
    ) {
      let startTimestamp: null | number = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj!!.innerHTML = Math.floor(progress * (end - start) + start)
          .toLocaleString("en-US")
          .replace(",", ".");
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
        // console.log(progress);
      };
      window.requestAnimationFrame(step);
    }
    try {
      const obj_values: any = document.querySelectorAll(
        ".counter-number"
      ) as NodeListOf<HTMLScriptElement>;
      animateValue(obj_values[0], 0, 5, 1000);
      animateValue(obj_values[1], 0, 30, 1000);
      animateValue(obj_values[2], 0, 30, 1000);
    } catch (err) {}
  },[])
  return (
    <section className="section-banner">
      <div className="banner container">
        <div className="row">
          <div className="banner-content col-10">
            <h1 className="title-h1">
              Creative Agency, Corporate and Portfolio{" "}
              <span className="txt-pink">React JS</span> Template + RTL
            </h1>
            <ul className="banner-count-list flex">
              {data.map((item) => {
                let element = <></>;
                element = (
                  <li className="banner-count-item" key={item.key}>
                    <p className="text">{item.text}</p>
                    <h2 className="banner-count-number flex">
                      <span className="counter-number">{item.number}</span>+
                    </h2>
                  </li>
                );
                return element;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="banner-slider">
        <Slider />
      </div>
      <ul className="banner-bgshape-list shape-group-1">
        <li className="shape shape-1">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-36.png"
            alt="bubble"
            width={561}
            height={214}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-14.png"
            alt="bubble"
            width={48}
            height={48}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-37.png"
            alt="bubble"
            width={32}
            height={32}
          />
        </li>
        <li className="shape shape-4">
          <Image
            src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-31.png"
            alt="bubble"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </section>
  );
};

export default Banner;
