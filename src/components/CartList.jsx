import React from "react";
import { Button } from '@mui/material';
import { CartPost } from "./CartPost";

export const CartList = ({posts, removePost, setIncrementCounter, setDecrementCounter, cartCleaning}) => {

    const getTotalCost = (posts) => {
        return posts.reduce((acc, post) => acc + post.price * post.counter, 0);
    } 

    return (
        <div className="listCart">
            <h1>Корзина</h1>
            {posts.length === 0 ? "Корзина пуста" : 
                posts.map((post, index) =>  <CartPost post={post} number={index + 1} key={index} removePost={removePost}  index={index} setIncrementCounter={setIncrementCounter} setDecrementCounter={setDecrementCounter}/>
            )}
            <p>Итоговая стоимость: {getTotalCost(posts)}</p>
           {posts.length === 0 ? '' : <Button variant = "outlined" onClick={() => {
                alert(`Вы потратили ${getTotalCost(posts)}$`)
                cartCleaning()
            }}>Купить</Button>}
        </div>
    )
};
