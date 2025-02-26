import { useState } from "react";
import Product0 from "../assets/product.png";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import { FaCheck, FaStarHalf } from "react-icons/fa6";
import classNames from "classnames";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import { RiMistFill } from "react-icons/ri";
import ProductReview from "./ProductReview";
import Prod1 from "../assets/prod1.png";
import Prod2 from "../assets/prod2.png";
import Prod3 from "../assets/prod3.png";
import Prod4 from "../assets/prod4.png";
import Product from "./Product";

const ProductDetailPage = () => {
	const [firstCol, setFirstCol] = useState(false);
	const [secondCol, setSecondCol] = useState(false);
	const [thirdCol, setThirdCol] = useState(false);
	const [currentSize, setSize] = useState("large");
	const [qty, setQty] = useState(1);
	const [currentView, setView] = useState("review");
	const reviews = [
		{
			name: "Samantha D.",
			review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
			date: "August 14, 2023"
		},
		{
			name: "Alex M.",
			review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
			date: "August 17, 2023"
		},
		{
			name: "Ethan R.",
			review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
			date: "August 20, 2023"
		},
		{
			name: "Olivia P.",
			review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
			date: "August 14, 2023"
		},
		{
			name: "Samantha D.",
			review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
			date: "August 14, 2023"
		},
		{
			name: "Samantha D.",
			review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
			date: "August 14, 2023"
		},
		{
			name: "Liam K.",
			review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
			date: "August 14, 2023"
		},
		{
			name: "Ava H.",
			review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
			date: "August 14, 2023"
		},
	];
	const likeProds = [
		{
			image: Prod1,
			name: "Polo with Contrast Trims",
			curPrice: "$212",
			oldPrice: "$242",
			discount: "20"
		},
		{
			image: Prod2,
			name: "Gradient Graphic T-shirt",
			curPrice: "$145",
			oldPrice: "",
			discount: ""
		},
		{
			image: Prod3,
			name: "Polo with Tipping Details",
			curPrice: "$180",
			oldPrice: "",
			discount: ""
		}
		,{
			image: Prod4,
			name: "Black Striped T-shirt",
			curPrice: "$120",
			oldPrice: "$150",
			discount: "30"
		}
	]
	const handleColor = (color: number) => () => {
		switch (color) {
			case 1:
				setFirstCol((prevValue) => !prevValue)
				break;
			case 2:
				setSecondCol((prevValue) => !prevValue)
				break;
			case 3:
				setThirdCol((prevValue) => !prevValue)
				break;
			// default:
			// 	break;
		}
	}
	const handleSize = (size: string) => () => {
		setSize(size);
	}
	const handleQty = (direction: string) => () => {
		switch (direction) {
			case "minus":
				if (qty===1) return;
				setQty(prevValue => prevValue - 1)
				break;
			case "plus":
				setQty(prevValue => prevValue + 1);
				break;
			// default:
			// 	break;
		}
	}
	const handleView = (view: string) => () => {
		setView(view);
	}
	return <div className="mx-28 mb-12">
		<div className="flex space-x-10">
			<div className="flex space-x-3">
				<div className="flex flex-col space-y-4">
					<img src={Product1} alt="" className="cursor-pointer" />
					<img src={Product2} alt="" className="cursor-pointer" />
					<img src={Product3} alt="" className="cursor-pointer" />
				</div>
				<div><img src={Product0} alt="product" /></div>
			</div>
			<div className="space-y-2.5">
				<h1 className="integralcf text-[#000000] text-[40px] font-bold leading-[48px]">One Life Graphic T-shirt</h1>
				<div className="flex items-center">
					<div className="flex space-x-0.5">
						<IoIosStar className="text-[#FFC633]" />
						<IoIosStar className="text-[#FFC633]" />
						<IoIosStar className="text-[#FFC633]" />
						<IoIosStar className="text-[#FFC633]" />
						<FaStarHalf className="text-[#FFC633]" />
					</div>
					<div className="satoshi font-normal leading-[21.6px] text-[12px]">45/5</div>
				</div>
				<div className="flex space-x-2">
					<span className="text-[#000000] text-[32px] leading-[43.2px] font-bold satoshi">$260</span>
					<span className="text-[#000000]/30 text-[32px] leading-[43.2px] font-bold line-through satoshi">$300</span>
					<div>
					  <div className="bg-[#FF3333]/10 rounded-[62px] px-[14px] py-[4px]"><span className="text-[#FF3333] leading-[21.6px] satoshi font-medium text-[16px]">-40%</span></div>
					</div>
				</div>
				<p className="text-[#000000]/60 leading-[22px] font-normal text-[16px] satoshi">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
				<div className="bg-[#000000]/10 h-0.5"></div>
				<div>
					<span className="block text-[#000000]/60 leading-[21.6px] font-normal md:text-[16px] satoshi">Select Colors</span>
					<div className="flex space-x-2">
						<div className="size-[39.14px] bg-[#4F4631] rounded-full flex justify-center items-center" onClick={handleColor(1)}>{firstCol && <FaCheck className="text-white" />}</div>
						<div className="size-[39.14px] bg-[#314F4A] rounded-full flex justify-center items-center" onClick={handleColor(2)}>{secondCol && <FaCheck className="text-white" />}</div>
						<div className="size-[39.14px] bg-[#31344F] rounded-full flex justify-center items-center" onClick={handleColor(3)}>{thirdCol && <FaCheck className="text-white" />}</div>
					</div>
				</div>
				<div className="bg-[#000000]/10 h-0.5"></div>
				<div>
					<span className="text-[#000000]/60 leading-[21.6px] staoshi">Choose Size</span>
					<div className="flex space-y-2 md:space-x-2">
						<div className={classNames("satoshi font-normal text-[16px] leading-[21.6px] rounded-full cursor-default py-2 px-6", {'bg-[#F0F0F0] text-[#000000]/60': currentSize!=="small", 'bg-[#000000] text-white': currentSize==="small"})} onClick={handleSize("small")}>Small</div>
						<div className={classNames("satoshi font-normal text-[16px] leading-[21.6px] rounded-full cursor-default py-2 px-6", {'bg-[#F0F0F0] text-[#000000]/60': currentSize!=="medium", 'bg-[#000000] text-white': currentSize==="medium"})} onClick={handleSize("medium")}>Medium</div>
						<div className={classNames("satoshi font-normal text-[16px] leading-[21.6px] rounded-full cursor-default py-2 px-6", {'bg-[#F0F0F0] text-[#000000]/60': currentSize!=="large", 'bg-[#000000] text-white': currentSize==="large"})}onClick={handleSize("large")}>Large</div>
						<div className={classNames("satoshi font-normal text-[16px] leading-[21.6px] rounded-full cursor-default py-2 px-6", {'bg-[#F0F0F0] text-[#000000]/60': currentSize!=="x-large", 'bg-[#000000] text-white': currentSize==="x-large"})}onClick={handleSize("x-large")}>X-Large</div>
					</div>
				</div>
				<div className="bg-[#000000]/10 h-0.5"></div>
				<div className="flex space-x-3">
					<div className="flex space-x-6 items-center bg-[#F0F0F0] rounded-full px-8 py-3 w-auto">
						<FaMinus className="cursor-default text-[#000000]" onClick={handleQty("minus")} />
						<span>{qty}</span>
						<FaPlus className="cursor-default text-[#000000]" onClick={handleQty("plus")} />
					</div>
					<div className="bg-[#000000] satoshi font-medium leading-[21.6px] text-[16px] text-[#FFFFFF] text-center px-54 rounded-4xl py-3 w-full cursor-pointer">Add to Cart</div>
				</div>
			</div>
		</div>
		<div className="flex mt-16 mb-8">
			<div className={classNames(
				"w-full satoshi font-normal cursor-default text-[20px] pb-3 leading-[22px] text-center", 
				{"text-[#000000]/60 border-b border-[#000000]/10": currentView!=="detail", 
				"text-[#000000] border-b-2 border-[#000000]": currentView==="detail"
				})}>
					<span onClick={handleView("detail")}>Product Details</span>
				</div>
			<div className={classNames(
				"w-full satoshi font-normal cursor-default text-[20px] pb-3 leading-[22px] text-center", 
				{"text-[#000000]/60 border-b border-[#000000]/10": currentView!=="review", 
				"text-[#000000] border-b-2 border-[#000000]": currentView==="review"
				})}>
					<span onClick={handleView("review")}>Rating & Reviews</span>
				</div>
			<div className={classNames(
				"w-full satoshi font-normal cursor-default text-[20px] pb-3 leading-[22px] text-center", 
				{"text-[#000000]/60 border-b border-[#000000]/10": currentView!=="faq", 
				"text-[#000000] border-b-2 border-[#000000]": currentView==="faq"
				})}>
					<span onClick={handleView("faq")}>FAQs</span>
			</div>
		</div>
		<div>
			<div className="flex justify-between">
				<div><span className="satoshi font-bold text-[24px] text-[#000000] leading-[32.4px] pr-2">All Reviews</span><span className="satoshi font-normal text-[16px] text-[#000000]/60 leading-[22px]">(451)</span></div>
				<div className="flex space-x-2.5 items-center">
					<div className="bg-[#F0F0F0] rounded-full size-[42px] flex items-center justify-center">
						<RiMistFill className="rotate-90" />
						</div>
					<div className="flex space-x-4 items-center bg-[#F0F0F0] rounded-4xl px-4 py-2">
						<span>Latest</span>
						<IoIosArrowDown />
					</div>
					<div className="satoshi font-medium text-[16px] leading-[21.6px] bg-[#000000] text-[#FFFFFF] rounded-[62px] px-4 py-2 cursor-default">Write a Review</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 mt-12">
				{
					reviews.map((review, index) => <ProductReview name={review.name} review={review.review} date={review.date} key={index}/>)
				}
			</div>
			<div className="flex items-center justify-center mt-8">
				<div className="border border-[#000000]/10 px-20 py-5 rounded-full satoshi font-medium text-[16px] leading-[21.6px] text-[#000000] cursor-pointer hover:bg-[#000000]/10 duration-500">Load More Reviews</div>
			</div>
			<div>
				<p className="text-[#000000] text-[48px] leading-[57.6px] integralcf font-bold text-center mt-16 mb-14">You might also like</p>
				<div className="flex space-x-5">
					{
						likeProds.map((prod, index) => <Product image={prod.image} name={prod.name} curPrice={prod.curPrice} oldPrice={prod.oldPrice} discount={prod.discount} key={index} />)
					}
				</div>
			</div>
		</div>
	</div>;
};

export default ProductDetailPage;
