import React, { useState } from "react";

import NavBar from "../navBar/NavBar";
// import Drinks from "../drinks/Drinks";
import Food from "../food/Food";
import Pizza from "../pizza/Pizza";

import drinks1 from "../../assets/drinks1.jpg";
import drinks2 from "../../assets/drinks2.jpg";
import food_esp from "../../assets/food_esp.jpg";
import food_ing from "../../assets/food_ing.jpg";
import pizzaPasta_esp from "../../assets/pizzaPasta_esp.jpg";
import pizzaPasta_ing from "../../assets/pizzaPasta_ing.jpg";

import { AiOutlineClose } from "react-icons/ai";
import { FaBookDead } from "react-icons/fa";

function MenuList({ showHome, setShowHome }) {
	const [english, setEnglish] = useState(false);
	const [drinks, setDrinks] = useState(false);
	const [food, setFood] = useState(false);
	const [pizza, setPizza] = useState(false);

	const handleLenguage = () => {
		if (english) {
			setEnglish(false);
		}
		if (!english) {
			setEnglish(true);
		}
	};

	const handleMenu = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	const handleDrinks = () => {
		if (!drinks) {
			setDrinks(true);
		}
	};
	const handleFood = () => {
		if (!food) {
			setFood(true);
		}
	};
	const handlePizza = () => {
		if (!pizza) {
			setPizza(true);
		}
	};

	if (english && drinks) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
					menu='Drinks'
				/>
				{/* <Drinks
					img1={drinks1}
					img2={drinks2}
					legalsText='All prices are in mexican pesos and include 16% TAX FEE'
				/> */}
			</section>
		);
	} else if (drinks) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
					menu='Bebidas'
				/>
				{/* <Drinks
					img1={drinks1}
					img2={drinks2}
					legalsText='Los precios son en pesos mexicanos e incluyen 16% de IVA'
				/> */}
			</section>
		);
	}

	if (english && food) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='food'
					setFood={setFood}
					menu='food'
				/>
				<Food
					img={food_ing}
					legalsText='All prices are in mexican pesos and include 16% TAX FEE'
				/>
			</section>
		);
	} else if (food) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='food'
					setFood={setFood}
					menu='alimentos'
				/>
				<Food
					img={food_esp}
					legalsText='Los precios son en pesos mexicanos e incluyen 16% de IVA'
				/>
			</section>
		);
	}

	if (english && pizza) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
					menu='Pizza & Pasta'
				/>
				<Pizza
					img={pizzaPasta_ing}
					legalsText='All prices are in mexican pesos and include 16% TAX FEE'
				/>
			</section>
		);
	} else if (pizza) {
		return (
			<section className='menu_item'>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
					menu='Pizza & Pasta'
				/>
				<Pizza
					img={pizzaPasta_esp}
					legalsText='Los precios son en pesos mexicanos e incluyen 16% de IVA'
				/>
			</section>
		);
	}

	if (!english) {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='icon-white' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='btn' onClick={handleLenguage}>
						English
					</button>
				</div>
				<section className='menuList_buttons'>
					<button className='btn' onClick={handleDrinks}>
						Bebidas
					</button>
					<button className='btn' onClick={handleFood}>
						Alimentos
					</button>
					<button className='btn' onClick={handlePizza}>
						Pizza & Pasta
					</button>
				</section>
			</section>
		);
	} else {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='icon-white' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='btn' onClick={handleLenguage}>
						Español
					</button>
				</div>
				<section className='menuList_buttons'>
					<button className='btn' onClick={handleDrinks}>
						Drinks
					</button>
					<button className='btn' onClick={handleFood}>
						Food
					</button>
					<button className='btn' onClick={handlePizza}>
						Pizza & Pasta
					</button>
				</section>
			</section>
		);
	}
}

export default MenuList;
