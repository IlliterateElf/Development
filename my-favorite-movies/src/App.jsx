import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </BrowserRouter>
        )
    }
}