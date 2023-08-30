import React, {useEffect, useState} from 'react';
import {Box, Rating, Stack, Typography} from "@mui/material";
import axios from "axios";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";

function StarRating({poemRating,poemId,allRatings}) {
    const [rating, setRating] = useState(poemRating || 0);
    const {user} = useAuthContext();
    const[message,setMessage] = useState("")
    useEffect(() => {
        setRating(poemRating || 0);
    }, [poemRating]);

    const handleOnchange = async (newValue) => {
        try {
            const response = await fetch(`http://localhost:8080/api/poem/rating?id=${poemId}&rating=${newValue}&userId=${user.user.id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                }
            });
            const data = await response.json();
            if(data == null){
                setMessage("You already voted!")
            }else {
                setMessage("")
            }
            setRating(newValue);
        } catch (error) {
            setMessage("You already voted!")
            console.error("Error fetching poems:", error);
        }
    }

    return (
        <div
            style={{
                background: "rgba(255, 255, 255, 0.7)",
                borderRadius: "1em",
                padding: "1em",
                margin: "1em",
            }}
        >
            <Typography component={"legend"}>
                <h4>Rate poem</h4>
                <h6>({allRatings}) ratings</h6>
            </Typography>
            <Rating
                name={"rate_poem"}
                value={rating}
                onChange={(event, newValue) => handleOnchange(newValue)}
                size={"large"}
                precision={0.5}
            />
            <div>
                <h4 style={{color:"red"}}>{message}</h4>
            </div>
        </div>
    );
}

export default StarRating;
