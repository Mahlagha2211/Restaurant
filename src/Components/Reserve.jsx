import { useContext, useState } from "react";
import "../cssStyle/Reserve.css";
import Modal from "react-modal";
import { FaPhone } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import FoodContex from "../Context/FoodContex";
export default function Reserve({ isOpen }) {
  const { reserveModal, setReserveModal } = useContext(FoodContex);
  const closeReserveModal = () => {
    setReserveModal(false);
  };
  return (
    <>
      {/* <div
        className="Reserve d-flex justify-content-center align-items-center"
        style={
          reserveModal || isOpen
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
        onClick={() => setReserveModal(true)}
      >
        <GiHamburger className="hamburgerIcon" />
        <p>Reserved</p>
      </div> */}
      {reserveModal && (
        <Modal
          className="reserveModal"
          isOpen={reserveModal}
          onRequestClose={closeReserveModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <RxCross2 onClick={closeReserveModal} className="outModal" />
          <img src="/image/environment4.jpg" alt="" />
          <div className=" d-flex justify-content-center align-items-center">
            <p className="d-flex flex-column">
              For reservations and special events such as birthday, you can
              contact us. We create memorable moments for you and your loved
              ones by providing a suitable space and quality services. For more
              information and to make a reservation, please call the numbers
              below.
              <span>
                <FaPhone /> : 013-44444444
              </span>
              <span>
                <FaMobileAlt /> : 09999999999
              </span>
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
