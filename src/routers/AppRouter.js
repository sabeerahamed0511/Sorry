import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Final from "../components/Final";
import IsAngry from "../components/IsAngry";
import Sorry from "../components/Sorry";

export default function AppRouter() {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IsAngry />} />
                <Route path="/angry" element={<Sorry />} />
                <Route path="/not-angry" element={<Final />} />
            </Routes>
        </BrowserRouter>
    </>
}