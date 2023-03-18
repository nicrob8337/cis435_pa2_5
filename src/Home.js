import React, { Component } from "react";
import image from "./images/network.jpg";


class Home extends Component {
    render(){
        return(
            <div className="home">
                <h2>Computers R Us</h2>
                <p>Welcome to our computer store, where we strive to provide the latest and greatest technology to meet your computing needs.</p>
                <img src={image} alt="image"/>
            </div>
        );
    }
}

export default Home;