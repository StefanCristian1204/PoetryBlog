import React, {useEffect, useState} from 'react';
import {Box, Rating, Stack, Typography} from "@mui/material";
import axios from "axios";

function StarRating({poemRating}) {
    const [rating, setRating] = useState(poemRating || 0);

    useEffect(() => {
        setRating(poemRating || 0);
    }, [poemRating]);

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
                onChange={(event, newValue) => setRating(newValue)}
                size={"large"}
                precision={0.5}
            />
        </div>
    );
}

export default StarRating;
