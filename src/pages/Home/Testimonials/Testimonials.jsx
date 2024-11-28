import { useState, useEffect } from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className="py-24">
			<SectionTitle subHeading="What our clients say" heading="Testimonials"></SectionTitle>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="flex flex-col items-center justify-center px-24 py-16">
							<Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
							<p className="py-8">{review.details}</p>
							<h1 className="text-2xl text-orange-500">{review.name}</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
