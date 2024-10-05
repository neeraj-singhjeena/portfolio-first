// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       <div
//         className="container nav_bar"
//         data-aos="fade-down"
//         data-aos-duration="1000"
//       >
//         <div className="left nav_items">portfolio</div>
//         <div className="right">
//           <a href="#Home" className="nav_items">
//             Home
//           </a>
//           <a href="#Skills" className="nav_items">
//             Skills
//           </a>
//           <a href="#projects" className="nav_items">
//             projects
//           </a>
//           <a href="#Content" className="nav_items">
//             Content
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav_bar">
        <div className="left nav_items">Portfolio</div>

        {/* Hamburger Menu for small screens */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>

        {/* Right-side navigation */}
        <div className={`right ${menuOpen ? "nav_open" : ""}`}>
          <a href="#Home" className="nav_items">
            Home
          </a>
          <a href="#Skills" className="nav_items">
            Skills
          </a>
          <a href="#Projects" className="nav_items">
            Projects
          </a>
          <a href="#Content" className="nav_items">
            Content
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
