import React from "react";
import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Countries/>
        </div>
    );
};

export default Home;
