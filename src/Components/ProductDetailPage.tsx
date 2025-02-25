import { useState } from "react";
import Product from "../assets/product.png";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import { FaCheck, FaStarHalf } from "react-icons/fa6";
import classNames from "classnames";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const ProductDetailPage = () => {
	const [firstCol, setFirstCol] = useState(false);
	const [secondCol, setSecondCol] = useState(false);
	const [thirdCol, setThirdCol] = useState(false);
	const [currentSize, setSize] = useState("large");
	const [qty, setQty] = useState(1);
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
	return <div className="mx-28 mb-12">
		<div className="flex space-x-10">
			<div className="flex space-x-3">
				<div className="flex flex-col space-y-4">
					<img src={Product1} alt="" className="cu cursor-pointer" />
					<img src={Product2} alt="" className="cu cursor-pointer" />
					<img src={Product3} alt="" className="cu cursor-pointer" />
				</div>
				<div><img src={Product} alt="product" /></div>
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
	</div>;
};

export default ProductDetailPage;
