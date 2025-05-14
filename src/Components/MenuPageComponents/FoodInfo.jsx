import { useContext, useState } from "react";
import "../../cssStyle/MenuPageStyle/FoodInfo.css";
import { FaShoppingCart } from "react-icons/fa";
import FoodContex from "../../Context/FoodContex";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

export default function FoodInfo({ MenuFood, isOpen, setIsOpen }) {
  const { menuFood, dispatch, cartFood, menuCategory } = useContext(FoodContex);
  const [number, setNumber] = useState(1);
  const [selectedFood, setSelectedFood] = useState({});

  const comments = [
    {
      name: "Ahura",
      comment: "very good pizza",
      date: "1403/12/24",
    },
    {
      name: "mahlagha",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "mahan",
      comment: "very good pizza",
      date: "1403/12/22",
    },
    {
      name: "mehrana",
      comment: "very good pizza",
      date: "1403/5/11",
    },
    {
      name: "fateme",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "zahra",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "tavakoli",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "amir",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "hadipur",
      comment: "very good pizza",
      date: "1403/09/16",
    },
    {
      name: "masoome",
      comment: "very good pizza",
      date: "1403/09/16",
    },
  ];

  // Add to Shopping Cart Functionality
  const addToShoppingCart = async (e) => {
    let findItem = await menuFood.find(
      (items) => items.idMeal == e.currentTarget.id
    );
    const prevcart = await cartFood.find(
      (items) => items.id == findItem.idMeal
    );
    if (prevcart == undefined) {
      findItem = { ...findItem, count: 1 };
      dispatch({ type: "add", payload: findItem });
      toast.success(`${findItem.strMeal} added to your cart!`);
    } else {
      findItem = { ...findItem, count1: 1 };
      dispatch({ type: "Increment", payload: findItem });
      toast.success(`${findItem.strMeal} added to your cart!`);
    }
  };

  // Open Modal and Set Selected Food
  const openModal = (foodInfo) => {
    setSelectedFood(foodInfo); // Set the clicked food info
    setIsOpen(true); // Open the modal
  };

  // Close Modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedFood(null);
    setNumber(1);
  };
  const handelminus = () => {
    if (number - 1 != 0) {
      setNumber(number - 1);
    }
  };
  const addingFood = async () => {
    const prevcart = await cartFood.find(
      (items) => items.id == selectedFood.idMeal
    );
    const newAdd = { ...selectedFood, count: number };

    if (prevcart == undefined) {
      const newAdd = { ...selectedFood, count: number };
      dispatch({ type: "add", payload: newAdd });
      toast.success(`${selectedFood.strMeal} added to your cart!`);
    } else {
      const newAdd = { ...selectedFood, count1: number };
      dispatch({ type: "Increment", payload: newAdd });
      toast.success(`${selectedFood.strMeal} added to your cart!`);
    }
    closeModal();
  };

  return (
    <>
      <div className={`row foodRow d-flex flex-wrap`}>
        {MenuFood.map((foodInfo) => (
          <div
            className="foodContainer d-flex flex-column"
            key={foodInfo.idMeal}
            onClick={() => openModal(foodInfo)} // Open modal on click
          >
            <img src={foodInfo.strMealThumb} />
            <p className="foodName mt-auto">{foodInfo.strMeal}</p>
            <div className="foodprice d-flex justify-content-between align-items-baseline">
              <p className="price">$11.99</p>
              <FaShoppingCart
                id={foodInfo.idMeal}
                style={{ cursor: "pointer" }}
                className="shopping"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from triggering modal
                  addToShoppingCart(e);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="ReactModal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(2px)",
            },
          }}
        >
          <div className="modalContainer">
            <RxCross2
              onClick={closeModal}
              className="cancleModal"
              style={{ cursor: "pointer" }}
            />

            <img
              className="imgItem"
              src={selectedFood.strMealThumb}
              alt={selectedFood.strMeal}
            />
            <div className="p-3 modal-info">
              <RxCross2
                onClick={closeModal}
                className="cancleModal1"
                style={{ cursor: "pointer" }}
              />
              <h4
                className="titleModal"
                style={{ textShadow: "0 0 1px black" }}
              >
                {selectedFood.strMeal}
              </h4>

              <div>
                <h6
                  className="Ingredient"
                  style={{ textShadow: "0 0 1px black" }}
                >
                  Ingredients:
                </h6>
                <p className="ingredient">
                  {selectedFood.strIngredient1} ,{selectedFood.strIngredient2} ,{" "}
                  {selectedFood.strIngredient3},{selectedFood.strIngredient4} ,
                  {selectedFood.strIngredient5} , {selectedFood.strIngredient6}
                </p>
              </div>
              <div className="money">
                <h6
                  className=" d-inline"
                  style={{ textShadow: "0 0 1px black" }}
                >
                  Price:
                </h6>
                <span className="fs-5">$11.99</span>
              </div>
              <div className="d-flex justify-content-between">
                <div className=" containerNumber">
                  <FaMinus className="minusPlus" onClick={handelminus} />
                  <span
                    className={`mx-2
                   `}
                  >
                    {number}
                  </span>
                  <FaPlus
                    className="minusPlus"
                    onClick={() => setNumber(number + 1)}
                  />
                </div>
                <div className="addCart " onClick={addingFood}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
          {comments.length > 0 ? (
            <SimpleBar className="scrollContainer" autoHide={false}>
              <div className="comments">
                {comments.map((comment) => (
                  <div className="comment ">
                    <div className="userInfo">
                      <div className="d-flex align-items-center">
                        <FaCircleUser className="userIcon" />
                        <p className="userName">{comment.name}</p>
                      </div>
                      <span className="userDate">{comment.date}</span>
                    </div>
                    <p className="usercomment ">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </SimpleBar>
          ) : null}
        </Modal>
      )}
    </>
  );
}
