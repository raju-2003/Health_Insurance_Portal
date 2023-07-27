import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import Homeimage from "./Homeimage";
import Footer from "./Footer";
const UI = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className="search-section">
                <SearchBar />
                <Homeimage />
                <Footer />
            </div>
        </>
    );
};

export default UI;
