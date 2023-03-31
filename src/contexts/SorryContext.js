import React, { createContext, useState } from "react";
import Final from "../components/Final";
import Message from "../components/Message";
import Reply from "../components/Reply";

export const SorryBaby = createContext();

export default function SorryContext({ children }) {

    const [pls, setPls] = useState("");
    const [msg, setMsg] = useState([<Message />])
    const [boo, setBoo] = useState(true);

    return <>
        <SorryBaby.Provider value={{
            msg,
            addNo: (() => {
                if (boo){
                    setPls(ex => ex + " pls! ");
                    setMsg((arr => [...arr, <Reply />]));
                    setTimeout(() => setMsg((arr => [...arr, <Message pls={pls}/>])), 2000);
                }
            }),
            addYes : (() => {
                if(boo) {
                    setBoo(false);
                }
            })
        }} >
        {children}
    </SorryBaby.Provider>
    </>
}