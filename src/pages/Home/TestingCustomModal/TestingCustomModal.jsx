/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Modal from "srcComponentsCustomModalModal";

const TestingCustomModal = () => {
	const [showModal, setShowModal] = useState(false);
	useState;
	const [showModal2, setShowModal2] = useState(false);
	useState;
	const [showModal3, setShowModal3] = useState(false);
	useState;
	return (
		<div>
			<h1>This is Banner</h1>
			{/* <img src={BannerImg} alt="" /> */}

			<section>
				<div className="p-10 text-center">
					<h1 className="text-3xl mb-5">This is modal</h1>
					<button
						className="text-white bg-blue-700 hover:bg-blue-800 hover:outline-none font-medium text-sm rounded-lg px-5 py-2 text-center mr-5"
						onClick={() => setShowModal(true)}
					>
						Text Modal
					</button>
					<button
						className="text-white bg-blue-700 hover:bg-blue-800 hover:outline-none font-medium text-sm rounded-lg px-5 py-2 text-center mr-5"
						onClick={() => setShowModal2(true)}
					>
						Video Modal
					</button>
					<button
						className="text-white bg-blue-700 hover:bg-blue-800 hover:outline-none font-medium text-sm rounded-lg px-5 py-2 text-center mr-5"
						onClick={() => setShowModal3(true)}
					>
						Form Modal
					</button>
					<Modal isVisible={showModal} onClose={() => setShowModal(false)}>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-5">Modal Title</h3>
							<p className="text-justify mb-5 font-normal text-gray-500">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus voluptatibus quod expedita
								fugit ratione possimus reiciendis ducimus, voluptatum incidunt quae accusantium consectetur mollitia cum
								sequi neque sit. Recusandae numquam, quis inventore facere nulla dicta iure mollitia. Laudantium,
								molestiae repellendus ea quibusdam assumenda laborum magnam molestias in architecto perspiciatis
								deleniti, autem placeat dolorem voluptates enim aspernatur. Laudantium, ea voluptas repudiandae
								reprehenderit rem facilis animi, quasi velit modi, provident reiciendis ab eum. Cum sunt esse inventore,
								dolorum vitae labore possimus optio, atque deleniti nisi accusamus iste? Quo maxime quibusdam
								recusandae. Consequatur quisquam ducimus earum accusantium esse, assumenda odit ab molestias provident!
							</p>
						</div>
					</Modal>
					<Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
						<iframe
							width="100%"
							height="315"
							src="https://www.youtube.com/embed/NQzmGewcaAM?si=fyiCeEZGz-n-J6ty"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</Modal>

					<Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
						<div className="py-6 px-6 lg:px-8 text-left">
							<h2 className="mb-4 text-xl font-medium text-gray-900">Signin to your account</h2>
							<form className="space-y-6" action="#">
								<div>
									<label for="email" className="block mb-2 text-sm font-medium text-gray-900">
										Enter your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-900 focus:border-blue-500 block w-full p-2"
										placeholder="name@company.com"
										required
									/>
								</div>

								<div>
									<label for="password" className="block mb-2 text-sm font-medium text-gray-900">
										Enter your password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-900 focus:border-blue-500 block w-full p-2"
										placeholder="********"
										required
									/>
								</div>
								<div className="flex justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												type="checkbox"
												value=""
												className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-blue-300 "
												required
											/>
										</div>
										<label for="remember" className="ml-2 text-sm font-medium text-gray-900">
											Remember me
										</label>
									</div>
									<a className="text-sm text-blue-700 hover:underline" href="#">
										Lost password?
									</a>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-blue-700 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
								>
									Singin
								</button>
							</form>
						</div>
					</Modal>
				</div>
			</section>
		</div>
	);
};

export default TestingCustomModal;
