import { Outlet } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineMailOpen } from 'react-icons/hi';

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
			<div className="bg-[#F0F0F0]">
				<div className="bg-[#000000] w-[1240px] rounded-2xl flex justify-between items-center mx-auto py-10 px-20">
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

				<div className="bg-[#F0F0F0]"></div>
			</div>
		</div>
	);
};

export default Layout;
