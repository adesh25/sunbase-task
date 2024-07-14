import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; 

const Header = () => {
    return (
        <div className='container bg-dark'>
            <div className='fluid-container text-light text-center'>
                <h3 className="mb-0">Customer List</h3>
            </div>
            <div className='d-flex justify-content-end'>
                <NavLink to='/' className="btn btn-outline-light">
                    <FontAwesomeIcon icon={faSignOutAlt} onClick={() => console.log("Logged out")} /> 
                </NavLink>
            </div>
            <div className='nav-links'>
                <div className="bg-primary p-2 d-inline-block">
                    <NavLink to='/add' className="text-light text-decoration-none">Add Customer</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
