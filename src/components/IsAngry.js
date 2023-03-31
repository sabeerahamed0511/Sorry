import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function IsAngry() {
    const navigate = useNavigate();
    return <>
        <div id="isAngry-container">
            <h3>Chella kutty kovama irukiyadi!!! <br />{`Sorry :)`}</h3>
            <div className="btn-container">
                <div className="btn" onClick={() => navigate("/angry")}>Onnu vena po!!!</div>
                <div className="btn" onClick={() => navigate("/not-angry")}>{`Kovam la illa manichitan :)`}</div>
            </div>
        </div>
    </>
}