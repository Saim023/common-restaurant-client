import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter((item) => item.category === "popular");

	return (
		<section>
			<SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"}></SectionTitle>

			<div className="grid md:grid-cols-2 gap-8 mt-8 mb-8">
				{popular.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
