import { FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

import logo from "../../assets/images/Logo.png";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import FooterList from "../../components/FooterList";
import { supportLinks } from "../../../data/FooterData";
import { quickLinks } from "../../../data/FooterData";
import { communityLinks } from "../../../data/FooterData";
const Footer = () => {
  return (
    <>
      <footer className=" text-[var(--primary-text-color)] border-b border-[#FED29C]">
        <Container>
          <div className="flex flex-wrap justify-between px-5 mb-14">
            {/* Logo */}
            <div className="w-full md:w-[35%] mb-6 md:mb-0">
              <img src={logo} alt="logo-footer" />
              <p className="mt-7 mb-8 max-w-[349px]">
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampde
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-[30px] h-[30px] rounded-full border border-[var(--primary-bg-color)] flex justify-center items-center">
                  <Link to="/">
                    <FaLinkedinIn />
                  </Link>
                </div>

                <div className="w-[30px] h-[30px] rounded-full border border-[var(--primary-bg-color)] flex justify-center items-center">
                  <Link to="/">
                    <FaInstagramSquare />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] rounded-full border border-[var(--primary-bg-color)] flex justify-center items-center">
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
            {/* Support */}
            <div className="w-full sm:w-1/2 md:w-[21%] mb-6 md:mb-0">
              <h3 className="font-bold text-xl mb-4">Support</h3>
              <FooterList listData={supportLinks} />
            </div>
            {/* Quick Links */}
            <div className="w-full sm:w-1/2 md:w-[21%] mb-6 md:mb-0">
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <FooterList listData={quickLinks} />
            </div>
            {/* Community */}
            <div className="w-full sm:w-1/2 md:w-[21%] mb-6 md:mb-0">
              <h3 className="font-bold text-xl mb-4">Community</h3>
              <FooterList listData={communityLinks} />
            </div>
          </div>
        </Container>
      </footer>
      <Container>
        <div className="py-[30px] flex justify-between">
          <p className="text-sm">
            Copyright &copy; 2023 All rights reserved by Eyeglass
          </p>
          <div>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of service</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
