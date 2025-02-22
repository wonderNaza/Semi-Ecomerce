import star1 from '../assets/star1.png';
import star2 from '../assets/star2.png';
const Homepage = () => {
	return (
		<div className="bg-[url(assets/Rectangle.png)] bg-cover py-24 relative px-20">
			<img src={star1} alt="star logo" className="absolute right-32" />
			<img src={star2} alt=" star logo2" className=" absolute right-[800px] bottom-[250px]" />
			<div className="space-y-7">
				<h1 className="w-[577px] lato font-bold text-[#000000] text-[64px] leading-[64px]">
					FIND CLOTHES THAT MATCHES YOUR STYLE
				</h1>
				<p className="lato font-normal text-[16px] leading-[22px] text-[#00000099] w-[545px]">
					Browse through our diverse range of meticulously crafted garments, designed to bring out
					your individuality and cater to your sense of style.
				</p>
				<div className="bg-[#000000] rounded-4xl text-[#FFFFFF] w-[200px] flex items-center justify-center py-5 text[16px] leading-[21.6px] font-medium">
					Shop Now
				</div>
				<div className="w-[596px] flex">
					<div className=" border-r-[#0000001A] border-r pr-6">
						<h3 className="w-[107px] font-bold text-[40px] leading-[54px] text[#000000]">200+</h3>
						<p className=" font-normal text-[16px] leading-[22px] text-[#00000099]">
							International Brands
						</p>
					</div>
					<div className=" border-r-[#0000001A] border-r px-4">
						<h3 className="w-[146px] font-bold text-[40px] leading-[54px] text-[#000000]">
							2,000+
						</h3>
						<p className=" font-normal text-[16px] leading-[22px] text-[#00000099]">
							High-Quality Products
						</p>
					</div>
					<div className="px-3.5">
						<h3 className="w-[171px] font-bold text-[40px] leading-[54px] text-[#000000]">
							30,000+
						</h3>
						<p className="font-normal text-[16px] leading-[22px] text-[#00000099]">
							Happy Customers
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
