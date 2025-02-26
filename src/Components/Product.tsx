import { FaStarHalf } from "react-icons/fa6"
import { IoIosStar } from "react-icons/io"

type Props = {
  image: string,
  name: string,
  curPrice: string,
  oldPrice: string,
  discount: string
}

const Product = ({image, name, curPrice, oldPrice, discount}: Props) => {
  return (
    <div>
      <div className="bg-[#F0EEED] w-[295px] rounded-[20px] flex items-center justify-center">
        <img src={image} alt="product" className="cursor-pointer rounded-3xl hover:border hover:border-black/80" />
      </div>
      <div className="space-y-0.5">
        <div className="satoshi font-bold text-[20px] leading-[27px] text-[#000000]">{name}</div>
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
        <div className="flex space-x-2 items-center">
          <span className="text-[#000000] leading-[32.4px] text-[24px] font-bold satoshi">{curPrice}</span>
          <span className="text-[#000000]/40 leading-[32.4px] text-[24px] font-bold line-through satoshi">{oldPrice}</span>
          {discount && <div className="bg-[#FF3333]/10 rounded-[62px] px-[14px] py-[4px]"><span className="text-[#FF3333] leading-[21.6px] satoshi font-medium text-[16px]">-{discount}%</span></div>}
        </div>
      </div>
    </div>
  )
}

export default Product