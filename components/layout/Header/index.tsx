import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== null && headerRef.current !== null) {
        if (window.scrollY >= 80) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    });
  }, []);
  return (
    <header className="page-header">
      <div className="header-wraper" ref={headerRef}>
        <div className="header container flex">
          <div className="header-logo">
            <div className="header-logo-white">
              <Image
                src="	https://new.axilthemes.com/demo/react/abstrak/images/logo.svg"
                width={187}
                height={60}
                alt="logo-brand"
              />
            </div>
            <div className="header-logo-dark">
              <Image
                src="	https://new.axilthemes.com/demo/react/abstrak/images/logo-2.svg"
                width={187}
                height={60}
                alt="logo-brand"
              />
            </div>
            <div className="header-logo-dark-theme">
              <Image
                src="	https://new.axilthemes.com/demo/react/abstrak/images/logo-3.svg"
                width={187}
                height={60}
                alt="logo-brand"
              />
            </div>
          </div>
          <nav className="header-nav flex">
            <ul className="header-nav-list flex">
              <li className="header-nav-item">
                <Link href="#splash-demo">
                  <a>Demo</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#splsh-features">
                  <a>Feature</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#splash-why-choose">
                  <a>Why Us</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">
                  <a>Documentation</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">
                  <a>Support Ticket</a>
                </Link>
              </li>
            </ul>
            <div className="btn primary-btn">
              <Link href="#section-demo">
                <a>Buy Now</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
