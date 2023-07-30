import React, {useState} from 'react';
import "./AddToFavorite.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

function AddToFavorite(props) {
    const currentlyAFavorite = <FontAwesomeIcon icon={faHeart}/>
    const notCurrentlyAFavorite = <FontAwesomeIcon icon={faHeartBroken}/>

    const [favorite, setFavorite] = useState(true)
    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "1em",
            padding: "1em",
            margin: "1em"
        }}>
            <label style={{cursor:"pointer"}}>
                {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
                <input type="checkbox" style={{display: "none"}}
                    // className={styles['favorite-button']}
                       onClick={() => setFavorite(!favorite)}
                >
                </input>
            </label>
        </div>
    );
}

export default AddToFavorite;
