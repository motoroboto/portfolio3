import React from "react";


function Footer() {
    const style = {
        color: "gray",
        paddingRight: "10px",
        paddingBottom: "5px",
        fontFamily: "Roboto",
        fontSize: "13px",
    };
    return (
        <div style={style}>
            <p align='right'>Robert Cullen-Keel also makes music <a href='https://robertcullen.bandcamp.com/'><i class="fab fa-bandcamp"></i></a> <a href='https://soundcloud.com/robertcullen'><i class="fab fa-soundcloud"></i></a> </p>
        </div >
    );
}

export default Footer;