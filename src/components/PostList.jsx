import React from "react";
import { ProductPost } from "./ProductPost.jsx";

export const PostList = ({posts, create, buttonDisable}) => {

    return (
        <div>
            <h1>Магазин продуктов</h1>
            {posts.map((post, index) => 
                <ProductPost post={post} key={index} create={create} buttonDisable={buttonDisable}/>
            )}
        </div>

    )
};
