import React, { useState } from 'react';
import './App.css';
import { PostList } from './components/PostList';
import { CartList } from './components/CartList';

function App() {

	const products = [
		{ id: 1, productName: 'Chips', price: 50 },
		{ id: 2, productName: 'Cola', price: 200 },
		{ id: 3, productName: 'Rice', price: 100 },
		{ id: 4, productName: 'Cake', price: 500 },
		{ id: 5, productName: 'Juice', price: 30 },
		{ id: 6, productName: 'Bread', price: 10 },
		{ id: 7, productName: 'Sausages', price: 250 },
		{ id: 8, productName: 'Cheese', price: 450 }
	]

	const [basketProducts, setbasketProducts] = useState([])

	const createPost = (newBasketProduct) => {
		setbasketProducts([...basketProducts, { ...newBasketProduct, counter: 1 }])
	}

	const removePost = (postIndex) => {
		setbasketProducts(basketProducts.filter((elem, index) => index !== postIndex))
	}

	const cartCleaning = () => {
		setbasketProducts([])
	}

	const buttonDisable = (post) => {
		if (basketProducts.length === 0) {
			return false;
		}
		const idArray = basketProducts.map((el) => el.id)
		return idArray.indexOf(post.id) === -1 ? false : true
	}

	const setIncrementCounter = (post) => {
		setbasketProducts(
			basketProducts.map((elem) => post.id === elem.id
				?
				{
					...elem,
					counter: elem.counter + 1
				}
				:
				elem)
		)
	}

	const setDecrementCounter = (post) => {
		setbasketProducts(
			basketProducts.map((elem) => post.id === elem.id && post.counter > 1
				?
				{
					...elem,
					counter: elem.counter - 1
				}
				:
				elem)
		)
	}

	return (
		<div className="App">
			<div className="post_list">
				<PostList posts={products} create={createPost} buttonDisable={buttonDisable} />
			</div>
			<div className="basket">
				<CartList posts={basketProducts} removePost={removePost} setIncrementCounter={setIncrementCounter} setDecrementCounter={setDecrementCounter} cartCleaning={cartCleaning} />
			</div>

		</div>
	);
}

export default App;
