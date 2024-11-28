import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<>
			<section>
				<SectionTitle subHeading={"From 11am to 10pm"} heading={"Order online"}></SectionTitle>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{
						clickable: true
					}}
					modules={[Pagination]}
					className="mySwiper mt-12 mb-12"
				>
					<SwiperSlide>
						<img src={Slide1} alt="" />
						<h3 className="text-2xl uppercase text-white text-center -mt-16">Salad</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Slide2} alt="" />
						<h3 className="text-2xl uppercase text-white text-center -mt-24">Pizza</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Slide3} alt="" />
						<h3 className="text-2xl uppercase text-white text-center -mt-24">Soup</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Slide4} alt="" />
						<h3 className="text-2xl uppercase text-white text-center -mt-24">Cake</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Slide5} alt="" />
						<h3 className="text-2xl uppercase text-white text-center -mt-24">Salad</h3>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
};

export default Category;
