import React, { useContext } from "react";
import { SorryBaby } from "../contexts/SorryContext";

export default function Sorry() {
    const { msg } = useContext(SorryBaby);
    return <>
        <div id="msg-container">
            <div>
                <audio src={require("../songs/Mannipaaya.mp3")} autoPlay onLoad={e => e.target.load()} />
            </div>
            {msg.map(m => m)}
        </div>
    </>
}