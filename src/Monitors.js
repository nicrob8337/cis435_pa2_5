import React, { Component } from "react";
import image from "./images/monitor.jpg"

class Monitors extends Component {
    render(){
        return(
            <div>
                <h2>Monitors</h2>
                <p>Monitors today have vast differences depending on what you plan to use them for.
                    There are gaming monitors with high refresh rates or ultra wide monitors for vast screen real estate.
                    You can always find the right monitor(s) for you! 
                </p>
                <img src={image} alt="image"/>
            </div>
        );
    }
}

export default Monitors;