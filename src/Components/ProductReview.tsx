import { FaCircleCheck, FaStarHalf } from "react-icons/fa6"
import { HiDotsHorizontal } from "react-icons/hi"
import { IoIosStar } from "react-icons/io"

type Props = {
  name: string,
  review: string,
  date: string,
}

const ProductReview = ({name, review, date}: Props) => {
  return (
    <div className="rounded-[20px] border border-[#000000]/10 px-14 py-8 space-y-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <IoIosStar className="text-[#FFC633]" />
          <IoIosStar className="text-[#FFC633]" />
          <IoIosStar className="text-[#FFC633]" />
          <IoIosStar className="text-[#FFC633]" />
          <FaStarHalf className="text-[#FFC633]" />
        </div>
        <HiDotsHorizontal className="text-[#000000]/40" />
      </div>
      <div className="flex space-x-3 items-center">
        <span className="satoshi font-bold text-[20px] leading-[22px] text-[#000000]">{name}</span>
        <FaCircleCheck className="text-[#01AB31]" />
      </div>
      <div className="space-y-5">
        <p className="satoshi text-[16px] font-normal leading-[22px] text-[#000000]/60 pr-8">&quot;{review}&quot;</p>
        <div><span className="satoshi font-medium text-[#000000]/60 text-[16px] leading-[22px]">Posted on {date}</span></div>
      </div>
    </div>
  )
}

export default ProductReview