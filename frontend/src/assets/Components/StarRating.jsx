import React, {useState} from 'react';
import {Box, Rating, Stack, Typography} from "@mui/material";

function StarRating(props) {
    const [value, setValue] = useState(0);
    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "1em",
            padding: "1em",
            margin: "1em"
        }}>
            <Typography component={"legend"}>Rate poem</Typography>
                <Rating
                    name={"rate_poem"}
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    size={"large"}
                />
        </div>
    );
}

export default StarRating;
