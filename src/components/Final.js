import React from "react";

export default function Final() {
    return <>
        <div id="final-container">
            <audio src={require("../songs/Mainaru-Vetti-Katti(PagalWorldl).mp3")} autoPlay onLoad={(e) => e.target.load()} />
            <div id="img-container">
                <img id="dance" src="https://bestanimations.com/media/dancers/1920214489dancing-baby2.gif"/>
            </div>
        </div>
    </>
}