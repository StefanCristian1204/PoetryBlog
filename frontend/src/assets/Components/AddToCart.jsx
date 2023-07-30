import React from 'react';
import Button from '@mui/material/Button';
import {ShoppingCart} from "@mui/icons-material";


function AddToCart(props) {
    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "1em",
            padding: "1em",
            margin: "1em"
        }}>
            <Button variant="contained" endIcon={<ShoppingCart />}>
                Add Poem To Cart
            </Button>
        </div>
    );
}

export default AddToCart;
