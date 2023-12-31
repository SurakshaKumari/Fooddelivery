import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Thanklogo from "../assets/images/rider.png";
import Home from "./Home";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <div style={{marginTop: "5px", alignItems:"center"}}>
          <h3>"Congratulations! Your   Order Has Been Placed!"</h3>
          <img src={Thanklogo} alt="thankyou image" />
          <button style={{marginRight:"70%", marginTop:"15px"}} className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/home">
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
