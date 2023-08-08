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
            <Button onClick={() => {
                alert('clicked');
            }} variant="contained"  endIcon={<ShoppingCart />}>
                <h6>Add Poem To Cart</h6>
            </Button>
        </div>
    );
}

export default AddToCart;
