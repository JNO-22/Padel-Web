import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useEffect, useState } from "react";
const Layout = () => {
  // topbar hide on scroll

  const [show, setShow] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > prevScrollPosition) {
        setShow(false);
      } else {
        // if scrolling up
        setShow(true);
      }
      // asigna el valor previo de scroll
      setPrevScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollPosition]);

  return (
    <div className="Layout">
      <div className="Side-bar" style={{ top: show ? "0" : "-100px" }}>
        <div className="Side-bar-links">
          <Link to="/" className="Side-bar-element">
            Home
          </Link>

          <Link to="/login" className="Side-bar-element">
            Login
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
