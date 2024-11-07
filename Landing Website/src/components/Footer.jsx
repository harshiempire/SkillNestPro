import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="py-[70px] bg-gray-10">
      <div className="container">
        <div>
          <div className="flex flex-col">
            <div className="flex items-start justify-between flex-wrap gap-8">
              <div className="footer-col">
                <h2 className="text-h2 text-white">SkillNest</h2>
                <p className="text-base !leading-[normal] text-gray-80">
                  Explore a world of knowledge and skills at your fingertips
                </p>
                <div className="flex items-center gap-x-4">
                  <a href="#">
                    <RiFacebookCircleFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiInstagramFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiTwitterFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiLinkedinBoxFill size={32} className="social-icon" />
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">Quick Links</p>
                <div className="flex flex-col gap-y-2">
                  <a href="#home" className="footer-link">
                    Home
                  </a>
                  <a href="#about" className="footer-link">
                    About
                  </a>
                  <a href="#" className="footer-link">
                    Courses
                  </a>
                  <a href="#instructors" className="footer-link">
                    Instructors
                  </a>
                  <a href="#blog" className="footer-link">
                    Blog
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">Contact information</p>
                <div className="flex flex-col gap-y-2">
                  <a href="#" className="footer-link">
                    Address: Telangana, Hyderabad
                  </a>
                  <a href="tel: +919363826091" className="footer-link">
                    Phone: (+91) 9363826091
                  </a>
                  <a href="neelampava15@gmail.com" className="footer-link">
                    Email: neelampavan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-between flex-wrap gap-4 p-10 mt-[70px] bg-gray-20 rounded-4xl ">
                <p className="text-lg text-gray-80">
                  &copy; 2023{" "}
                  <span className="text-primary-50">SkillNest </span>All rights
                  reserved
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
