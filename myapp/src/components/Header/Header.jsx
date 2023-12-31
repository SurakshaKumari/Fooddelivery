import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import logo from "../../assets/images/res-logo.png";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";
import { hydrate } from "react-dom";


const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
const menuRef = useRef(null);
  const headerRef = useRef(null);
  // const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getMealTime = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return 'Breakfast';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Lunch';
    } else {
      return 'Dinner';
    }
  };
  console.log(menuRef?.current?.classList.value);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* <div className="logo" onClick={() => navigate("/home")}> */}
          {/* <img src={""} alt="logo" /> */}
          <div style={{marginTop: "3px"}}>
          <p>It's {getMealTime()} time</p>
          </div>
          {/* </div> */}
        
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

         
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
