import React from "react";
import preloader from "../../assets/img/preloader.svg"

const Preloader = () => {
    return <div style={{'display': 'flex', 'justifyContent': 'center', 'minHeight': '100px'}}><img src={preloader} alt="Preloader"/></div>
}

export default Preloader
