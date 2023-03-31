import { useContext} from "react"
import { useNavigate } from "react-router-dom";
import { SorryBaby } from "../contexts/SorryContext"

export default function Message({pls}) {
    const {addYes, addNo} = useContext(SorryBaby);
    const navigate = useNavigate();
    return <>
        <div id="sorry-container">
            <div className="msg">
                <h3>{pls} Mannipaaya!!!</h3>
                <div className="yesOrNo">
                    <h4 onClick={() => {
                        addYes();
                        navigate("/not-angry");
                    }}>Yes</h4>
                    <h4 onClick={addNo}>No</h4>
                </div>
            </div>
        </div>
    </>
}