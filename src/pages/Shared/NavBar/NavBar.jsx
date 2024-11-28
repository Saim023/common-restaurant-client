import { Link } from "react-router-dom";

const NavBar = () => {
	const navOptions = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/menu">Menu</Link>
			</li>
			<li>
				<Link to="/order/salad">Order</Link>
			</li>
			<li>
				<Link to="/items">Items</Link>
			</li>
		</>
	);

	return (
		<>
			<div className="navbar max-w-screen-xl fixed z-10 text-white opacity-70 bg-black">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className=" lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 text-white rounded-box w-52"
						>
							{navOptions}
						</ul>
					</div>
					<Link className="ml-2 text-xl" to="/">
						Restaurant
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
				</div>
				<div className="navbar-end">
					<Link className="" to="#">
						Signup
					</Link>
					<Link className="mx-2" to="#">
						Login
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavBar;
