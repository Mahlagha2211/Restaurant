import { NavLink, Link } from "react-router-dom";
import "../cssStyle/Nav.css";
import { useContext } from "react";
import FoodContex from "../Context/FoodContex";
import { Offcanvas } from "bootstrap";

export default function NavItems() {
  const { reserveModal, setReserveModal } = useContext(FoodContex);
  const closeOffcanvasBook = () => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");
    const bsOffcanvas =
      Offcanvas.getInstance(offcanvasEl) || new Offcanvas(offcanvasEl);
    bsOffcanvas.hide();
    setReserveModal(!reserveModal);
  };
  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "navItem" : ""}`}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Menu"
          className={({ isActive }) => `nav-link ${isActive ? "navItem" : ""}`}
        >
          Menu
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => closeOffcanvasBook()}>
          Book
        </Link>
      </li>
      
    </>
  );
}
