const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div className="">
        <img className="w-32" src="logo.svg" alt="" />
        <p className="text-center text-sm mt-6">
          © 2024 Community Library. All rights reserved.
        </p>
      </div>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mahbubwaduzzaman">
            <img className="w-6" src="facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/waduzzaman">
            <img className="w-6" src="x.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/waduzzaman/">
            <img className="w-8" src="in.svg" alt="" />
          </a>
        
          <a href="https://www.instagram.com/">
            <img className="w-8 " src="instagram.svg" alt="" />
          </a>
        
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
