import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faRegistered } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import DisplayProducts from "./displayproducts";
import ShowCart from "./showcart"
import LogIn from "./login"

function NavBar(props) {
    return (
        <Router>
            <div className="navbar p-5 bg-info">
                <h1>
                    <Link to="/" className="text-decoration-none text-white">
                    <span className="px-2">Shop 2</span> 
                    <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white"/>eact</Link>
                </h1>
                
                <p className="text-white">
                <Link to="/showcart">
                    <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3 text-white"/>
                </Link>
                <span className="font-weight-bold text-white">{props.totalValue}</span> items</p>
            </div>
            
            <Routes>
                <Route 
                    exact path="/" 
                    element={
                        <DisplayProducts 
                            products={props.prods}
                            OnQuantityChange={props.handleQuantityChange}
                        />}
                >

                </Route>
                <Route 
                    path="/showcart" 
                    element={
                        <ShowCart 
                            cartitems={props.prods}
                            totalQuantity={props.totalValue}
                        />}
                >
                </Route>
                <Route 
                    path="/login" 
                    element={
                        <LogIn checkoutitems={props.prods}/>}
                >
                </Route>
            </Routes>
        </Router>
    )
}
 
export default NavBar;