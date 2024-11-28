import React from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
	return (
		<div className="featured-item bg-fixed text-white pt-6 my-20">
			<SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
			<div className="md:flex items-center justify-center py-32 px-36 bg-slate-600 opacity-70">
				<div>
					<img src={featuredImg} alt="" />
				</div>
				<div className="md:ml-10">
					<h1>July 7th, 2071</h1>
					<p className="uppercase">Where can I get some?</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos nemo id quidem! Odit obcaecati velit est
						maiores provident reprehenderit mollitia sint veniam. At debitis reprehenderit expedita tempora quia illum
						commodi nam soluta beatae et, ipsam nemo quos explicabo sequi laborum, deserunt maiores atque harum ratione
						fugiat. Placeat, reprehenderit suscipit!
					</p>
					<button className="btn btn-outline mt-4 border-0 border-b-4 text-white">Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
