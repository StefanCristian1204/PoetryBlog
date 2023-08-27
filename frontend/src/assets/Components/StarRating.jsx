import React, {useEffect, useState} from 'react';
import {Box, Rating, Stack, Typography} from "@mui/material";
import axios from "axios";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";

function StarRating({poemRating,poemId}) {
    const [rating, setRating] = useState(poemRating || 0);
    const {user} = useAuthContext();

    useEffect(() => {
        setRating(poemRating || 0);
    }, [poemRating]);

    const handleOnchange = async (newValue) => {
        try {
            const response = await fetch(`http://localhost:8080/api/poem/rating?id=${poemId}&rating=${newValue}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setRating(newValue);
        } catch (error) {
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
            </Typography>
            <Rating
                name={"rate_poem"}
                value={rating}
                onChange={(event, newValue) => handleOnchange(newValue)}
                size={"large"}
                precision={0.5}
            />
        </div>
    );
}

export default StarRating;
