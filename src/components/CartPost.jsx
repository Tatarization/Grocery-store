import React from "react";
import { Button } from '@mui/material';

export const CartPost = ({post, removePost, number, index, setIncrementCounter, setDecrementCounter}) => {

    return (
        <div className="basketpost">
            <div>{number}. {post.productName}</div>
            <div className = "counter">
                {post.counter}
                <Button variant = "outlined" onClick={() => setIncrementCounter(post)}>+</Button>
                <Button variant = "outlined" onClick={() => setDecrementCounter(post)}>-</Button>
            </div>
            <p>{post.price * post.counter}$</p>
            <Button variant = "contained" onClick={()=>removePost(index)}>Удалить из корзины</Button>
        </div>
    )
};
