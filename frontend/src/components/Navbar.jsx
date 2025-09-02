import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import {data} from "../restAPI.json";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {

    const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">MORE'S Kitchen</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            {
                data[0].navbarLinks.map((e) => {
                    return(
                        <Link to={e.link} key={e.id} spy="true" smooth="true" duration={500}>
                            {e.title}
                        </Link>
                    )
                })
            }
        </div>
        <div className="menuBtn">OUR MENU</div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
