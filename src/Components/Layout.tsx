import { Link, Outlet } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { PiFacebookLogoFill } from 'react-icons/pi';
import { IoLogoInstagram } from 'react-icons/io';
import { FaSnapchat } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { RiMastercardFill } from 'react-icons/ri';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcApplePay } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa6';

const Layout = () => {
	return (
		<div>
			<div className="bg-[#000000] flex justify-between items-center  pl-[600px] pr-28 py-4">
				<div className="lato font-normal text-[14px] leading-[18.9px] text-[#FFFFFF]">
					Sign up and get 20% off to your first order.{' '}
					<span className="font-medium text-[14px] leading-[18.9px] text-[#FFFFFF] underline">
						Sign Up Now
					</span>
				</div>
				<IoMdClose className="text-white text-2xl" />
			</div>
			<div className="bg-white py-7">
				<div className="flex space-x-10 items-center w-[1240px] mx-auto">
					<div className="lato font-semibold text-[32px] leading-[38.4px] text-[#000000]">
						SHOP.CO
					</div>
					<div className="flex items-center lato font-normal text-[16px] leading-[21.6px] text-[#000000] space-x-8">
						<div>
							<div className=" flex items-center space-x-1 lato font-normal text-[16px] leading-[21.6px] text-[#000000]">
								<span>shop</span>
								<span>
									<RiArrowDropDownLine />
								</span>
							</div>
						</div>
						<span>On Sale</span>
						<span>New Arrivals</span>
						<span>Brands</span>
					</div>

					<div className="bg-[#F0F0F0] items-center rounded-4xl flex space-x-5 py-3.5 pl-6  w-[557px]">
						<FiSearch className="text-[#00000066] text-2xl" />
						<span className="lato font-normal text-[16px] leading-[21.6px] text-[#00000066]">
							Search for products...
						</span>
					</div>
					<div>
						<div className="flex space-x-8 text-2xl">
							<LuShoppingCart />
							<VscAccount />
						</div>
					</div>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
			<div className="bg-[#F0F0F0] mt-32 relative pt-20 ">
				<div className="bg-[#000000] w-[1240px] rounded-2xl flex justify-between items-center  py-10 px-20 absolute -top-24 right-64">
					<h2 className="lato font-bold text-[40px] leading-[45px] text-[#FFFFFF] w-[551px] ">
						STAY UPTO DATE ABOUT OUR LATEST OFFERS
					</h2>
					<div className="space-y-6">
						<div className="bg-white flex space-x-4 rounded-3xl py-3 pl-3 pr-24">
							<HiOutlineMailOpen className="text-2xl" />
							<span className="font-normal text-[16px] leading-[21.6px] text-[#00000066]">
								Enter your email address
							</span>
						</div>
						<div className="bg-white rounded-3xl py-3 items-center flex justify-center ">
							<p className="font-medium text-[16px] leading-[21.6px] text-[#000000]">
								Subscribe to Newsletter
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-center py-16 w-[1240px] mx-auto">
					<div className="space-y-9">
						<h1 className="font-bold text-[33.45px] leading-[40.15px] text-[#000000]">SHOP.CO</h1>
						<p className="font-normal text-[14px] leading-[22px] text-[#00000099] w-[248px]">
							We have clothes that suits your style and which you’re proud to wear. From women to
							men.
						</p>
						<div className="flex space-x-6 items-center">
							<AiFillTwitterCircle className="text-2xl" />
							<PiFacebookLogoFill className="text-2xl" />
							<IoLogoInstagram className="text-2xl" />
							<FaSnapchat className="text-2xl" />
						</div>
					</div>
					<div className="space-y-7">
						<h1 className="font-medium text-[16px] leading-[18px] text-[#000000]">COMPANY</h1>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">About</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Features</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Works</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Career</p>
					</div>
					<div className="space-y-7">
						<h1 className="font-medium text-[16px] leading-[18px] text-[#000000]">HELP</h1>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Customer</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">
							Delivery Details
						</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">
							Terms & Conditions
						</p>
						<p>
							<Link to={''} className="font-normal text-[16px] leading-[19px] text-[#00000099]">
								Privacy Policy
							</Link>
						</p>
					</div>
					<div className="space-y-7">
						<h1 className="font-medium text-[16px] leading-[18px] text-[#000000]">FAQ</h1>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Account</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">
							Manage Deliveries
						</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Orders</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Payments</p>
					</div>
					<div className="space-y-7">
						<h1 className="font-medium text-[16px] leading-[18px] text-[#000000]">RESOURCES</h1>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">Free eBooks</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">
							development Tutorial
						</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">How to -Blog</p>
						<p className="font-normal text-[16px] leading-[19px] text-[#00000099]">
							Youtube playlist
						</p>
					</div>
				</div>
				<hr className="bg-[#0000001A] h-1 w-[1240px] mx-auto" />
				<div className=" flex justify-between pb-16 pt-5 mx-auto w-[1240px]">
					<span className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
						© 2000-2021, All rights reserved
					</span>
					<div>
						<div className="flex space-x-2">
							<FaCcVisa className="text-2xl  text-[#1434CB]" />
							<RiMastercardFill className="text-2xl" />
							<FaCcPaypal className="text-2xl" />
							<FaCcApplePay className="text-2xl" />
							<FaGooglePay className="text-2xl " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
