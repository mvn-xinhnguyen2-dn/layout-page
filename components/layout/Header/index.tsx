import React,{ useEffect } from 'react'
import Image from "next/future/image";
import Link from 'next/link'


const Header = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== null && headerRef.current!==null) {
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
      <div className="header container flex" >
          <div className="header-logo">
            <Image src="	https://new.axilthemes.com/demo/react/abstrak/images/logo.svg" width={187} height={60} alt="logo-brand"/>
            <Image src="	https://new.axilthemes.com/demo/react/abstrak/images/logo-2.svg" width={187} height={60} alt="logo-brand"/>
          </div>
          <nav className="header-nav flex">
            <ul className="header-nav-list flex">
              <li className="header-nav-item">
                <Link href="#section-demo">Demo</Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">Feature</Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">Why Us</Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">Documentation</Link>
              </li>
              <li className="header-nav-item">
                <Link href="#section-demo">Support Ticket</Link>
              </li>
            </ul>
            <div className="btn primary-btn">
              <Link href="#section-demo">Buy Now</Link>
            </div>
          </nav>
      </div>

      </div>
    </header>
  )
}

export default Header