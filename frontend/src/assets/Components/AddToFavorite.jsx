import React, {useState} from 'react';
import "./AddToFavorite.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

function AddToFavorite(props) {
    const currentlyAFavorite = <FontAwesomeIcon style={{color: "red", height: "2rem"}} icon={faHeart}/>
    const notCurrentlyAFavorite = <FontAwesomeIcon style={{color: "gray", height: "2rem"}} icon={faHeartBroken}/>

    const [favorite, setFavorite] = useState(false)
    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "1em",
            padding: "1em",
            margin: "1em"
        }}>
            <label style={{cursor: "pointer"}}>
                <div>
                    <h4>Add to favorites:</h4>
                    {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
                    <input type="checkbox" style={{display: "none"}}
                           onClick={() => setFavorite(!favorite)}
                    >
                    </input>
                </div>
            </label>
        </div>
    );
}

export default AddToFavorite;
