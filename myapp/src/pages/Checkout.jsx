import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Thanklogo from "../assets/images/rider.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";


const Checkout = () => {
  const dispatch = useDispatch();
  const handleReturnBack = () => {
    // Dispatch the action to reset the cart when returning back
    dispatch(cartActions.checkoutComplete());
  };
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <div style={{marginTop: "5px", alignItems:"center"}}>
          <h3>"Congratulations! Your   Order Has Been Placed!"</h3>
          <img src={Thanklogo} alt="thankyou image" />
          <button style={{marginRight:"70%", marginTop:"15px"}} className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/home" onClick={handleReturnBack}>
                    Return Back<i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
          </div>
         
        </div>  
      </div>
    </>
  );
};

export default Checkout;
