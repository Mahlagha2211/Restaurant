import "../../cssStyle/HomePageStyle/Footer.css";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import FoodContex from "../../Context/FoodContex";

export default function Footer() {
  const categoriesName = [
    "breakfast",
    "pizza",
    "burger",
    "Sandwich",
    "steak",
    "chicken",
  ];
  const categoriesName1 = ["taco", "sushi", "soup", "salad", "cake"];
  const { setMenuCategory } = useContext(FoodContex);
  const categoryItem = (e) => {
    setMenuCategory(e.target.innerHTML);
    window.scrollTo(0, 0);
  };
  const changepage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="row topFooter">
        <div className="col-md-3 col-12 logo  ">
          <img src="/image/logo.jpg" alt="" />
        </div>
        <div className="pagesChange col-md-3 col-4">
          <h5>Pages</h5>
          <div className="d-flex flex-column align-items-md-baseline">
            <NavLink
              to="/"
              onClick={() => changepage()}
              className={`footerLinks`}
            >
              Home
            </NavLink>

            <NavLink
              to="/Menu"
              onClick={() => changepage()}
              className={`footerLinks`}
            >
              Menu
            </NavLink>

          </div>
        </div>
        <div className="pagesChange col-md-4 col-sm-5 col-5 ">
          <h5>Menu</h5>
          <div className="d-flex  row">
            <div className="d-flex flex-column col-sm-6 col-8 ">
              {categoriesName.map((categoryName) => (
                <NavLink
                  key={categoryName}
                  to="/Menu"
                  onClick={(e) => categoryItem(e)}
                  className="footerLinks"
                >
                  {categoryName}
                </NavLink>
              ))}
            </div>
            <div className="col-sm-6 col-3 d-flex flex-column secendcategory ">
              {categoriesName1.map((categoryName) => (
                <NavLink
                  key={categoryName}
                  to="/Menu"
                  onClick={(e) => categoryItem(e)}
                  className="footerLinks"
                >
                  {categoryName}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-2 col-3  contact  text-center ">
          <h5>Contact</h5>
          <div className="communicate text-center">
            <FaFacebookF />
            <FaTelegramPlane />
            <GrInstagram />
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <p>All rights to this site belong to Burger House.</p>
      </div>
    </div>
  );
}
