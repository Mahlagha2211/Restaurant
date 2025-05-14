import React, { useContext, useEffect, useState } from "react";
import "../cssStyle/Nav.css";
import { FaShoppingBag } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import FoodContex from "../Context/FoodContex";
import NavItems from "./NavItems";
import Cart from "./ShoppingCartComponents/Cart";
import Modal from "react-modal";
import Login from "./Login";
import SignIn from "./SignIn";
import { RxCross2 } from "react-icons/rx";
import { Offcanvas } from "bootstrap";

export default function Nav() {
  const { counter, totalPrice } = useContext(FoodContex);
  const [opening, setOpening] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [signIn, setsignIn] = useState(false);
  const handelOpening = () => {
    setOpening(true);
    setsignIn(true);
  };
  const handleClosingModal = () => {
    setOpening(false);
    setLogIn(false);
    setsignIn(false);
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, []);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark ">
        <div className=" container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../../image/logo.jpg" alt="" />
          </a>
          <div className="d-flex shop">
            <div
              className="account"
              style={{ color: "lightgray" }}
              onClick={handelOpening}
            >
              <VscAccount style={{ fontSize: "30px" }} />
            </div>
            <div
              className="position-relative"
              type="button"
              onClick={() => {
                const cartCanvas = new Offcanvas("#offcanvasCart", {
                  backdrop: true,
                });
                cartCanvas.show();
              }}
            >
              <FaShoppingBag className="shop1" />
              <span className="counter1">{counter}</span>
            </div>
          </div>
          {/* دکمه نمایش منوی Offcanvas برای صفحات کوچک */}
          <button
            className="navbar-toggler d-md-none"
            type="button"
            onClick={() => {
              const navbarCanvas = new Offcanvas("#offcanvasNavbar", {
                backdrop: true, 
              });
              navbarCanvas.show();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* منوی عادی برای صفحات بزرگ */}
          <div className="collapse navbar-collapse d-none d-md-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItems />
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas برای صفحات کوچک */}
      <div
        className="offcanvas  offcanvas-end d-md-none  "
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Lunch Hour
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <NavItems />
          </ul>
        </div>
      </div>
      <div
        className="offcanvas  offcanvas-end "
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
            Cart
          </h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cart />
        </div>
        <div className="checkOut">
          <div className="d-flex justify-content-between">
            <p>TotalPrice:</p>
            <p>{totalPrice}$</p>
          </div>
          <p className="text-center payment">CheckOut</p>
        </div>
      </div>
      {opening && (
        <Modal
          isOpen={opening}
          onRequestClose={handleClosingModal}
          className="ReactmodalContent"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <RxCross2 onClick={handleClosingModal} className="rxCross" />
          {logIn && <Login setsignIn={setsignIn} setLogIn={setLogIn} />}

          {signIn && <SignIn setsignIn={setsignIn} setLogIn={setLogIn} />}
        </Modal>
      )}
    </React.Fragment>
  );
}
