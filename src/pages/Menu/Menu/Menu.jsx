import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "./../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./../MenuCategory/MenuCategory";

const Menu = () => {
	const [menu] = useMenu();
	const offered = menu.filter((item) => item.category === "offered");
	const desserts = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const salad = menu.filter((item) => item.category === "salad");
	const soup = menu.filter((item) => item.category === "soup");
	return (
		<div>
			<Helmet>
				<title>Menu</title>
			</Helmet>

			{/* Main menu */}
			<Cover img={menuImg} title="Our Menu"></Cover>

			{/* Offered items */}
			<SectionTitle subHeading="Don't miss" heading="Today's offer"></SectionTitle>
			<MenuCategory items={offered}></MenuCategory>

			{/* Dessert items */}
			<MenuCategory items={desserts} title="desserts" img={dessertImg}></MenuCategory>

			{/* Pizza items */}
			<MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

			{/* Salad items */}
			<MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

			{/* Soup items */}
			<MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
		</div>
	);
};

export default Menu;
