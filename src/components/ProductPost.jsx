import React from "react";
import { Button } from '@mui/material';

export const ProductPost = ({ post, create, buttonDisable}) => {

    const addToCart = () => {
        create(post);
    }

    return (
        <div className="productPost">
            <strong>{post.id}. {post.productName}</strong>
            <div>
                {post.price}$
            </div>
            <div className="myButton">
                <Button variant="contained" disabled={ buttonDisable(post)} onClick={addToCart}>Добавить в корзину</Button>
            </div>
        </div>
    )
};
