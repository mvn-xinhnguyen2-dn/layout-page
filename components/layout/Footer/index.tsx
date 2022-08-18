import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer container flex">
        <div className="footer-copyright col-5">
          © 2022. All rights reserved by Axilthemes
        </div>
        <ul className="footer-social-list col-2 flex">
          <li className="footer-social-item mr-25">
            <Link href="https://www.facebook.com/axilthemes">
              <a>
                <FaFacebookF />
              </a>
            </Link>
          </li>
          <li className="footer-social-item">
            <Link href="https://dribbble.com/axilweb/">
              <a>
                <BiBasketball />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="footer-link-list col-5 flex">
          <li className="footer-link-item px-30">
            <Link href="https://themeforest.net/user/axilthemes/portfolio">
              <a>More Themes</a>
            </Link>
          </li>
          <li className="footer-link-item pl-30">
            <Link href="/demo/react/abstrak/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
