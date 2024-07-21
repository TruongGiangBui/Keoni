import React, { useEffect, useState,useRef  } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import { FaTimes } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const Navbar: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setShowPopup(false)
        }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
        document.removeEventListener('click', handleClick, true);
    };
}, []);
  return (
    <div className="navbar">
      <div className="navbar-plan-infor">
        <div className="navbar-plan-infor-label">Articles:</div>
        <div className="navbar-plan-infor-value">3 of 5</div>
      </div>
      <div className="navbar-plan-divider"></div>
      <div className="navbar-plan-infor">
        <div className="navbar-plan-infor-label">Current Plan:</div>
        <div className="navbar-plan-infor-value">Starter</div>
        <div className="navbar-plan-infor-icon" >
          <FaInfoCircle onClick={()=>{setShowPopup(true)}}/>
          {showPopup && (
            <div className="navbar-plan-popup" ref={ref}>
              <div className="navbar-plan-popup-arrow"></div>
              <div className="navbar-plan-popup-container">
                <div className="col-md-12 navbar-plan-popup-content">
                  <div className="navbar-plan-popup-content-box">
                    <div className="navbar-plan-popup-content-label">
                      Articles:
                    </div>
                    <div className="navbar-plan-popup-content-value">
                      {" "}
                      3 / 5
                    </div>
                  </div>
                  <div className="navbar-plan-popup-content-box">
                    <div className="navbar-plan-popup-content-label">
                      Brand Voices:
                    </div>
                    <div className="navbar-plan-popup-content-value">2 / 3</div>
                  </div>
                  <div className="navbar-plan-popup-content-box">
                    <div className="navbar-plan-popup-content-label">
                      Knowledge Base:
                    </div>
                    <div className="navbar-plan-popup-content-value">
                      456MB / 500MB
                    </div>
                  </div>
                  <div className="navbar-plan-popup-btn-box">
                    <button className="navbar-plan-upgrade-btn">
                      Upgrade now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-exit-btn">
        <FaTimes />
      </div>
    </div>
  );
};

export default Navbar;
