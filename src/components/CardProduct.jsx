
import { FiShoppingCart, FiStar } from "react-icons/fi"
import box1 from "../assets/images/sec2-box1.png"


export const CardProductDetail = ({ isPromo, name, description, rating, discount, basePrice, image, cardButton }) => {
    return (
        <div className=" flex flex-col relative flex-1 p-3">
            {isPromo && <div className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">FLASH SALE!</div>}
            <div>{image !== null ? <img className="h-60 rounded" src={`http://localhost:5050/uploads/products/${image}`} alt="" /> : <img className="h-60 rounded" src={box1} alt="" />}</div>
            <div className="shadow-lg bg-white rounded p-3 m-5 -mt-10 flex flex-col flex-1 gap-5">
                <div className="text-3xl font-bold">{name}</div>
                <div className="flex1">{description}</div>
                <div className="flex gap-[10px] items-center">
                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" />
                    </div>
                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" />
                    </div>
                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" />
                    </div>
                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" />
                    </div>
                    <div>{rating}</div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <div className="line-through text-[12px] text-[#D00000]">IDR {discount.toLocaleString('id')}</div>
                    <div className="text-[22px] text-[#FF8906]">IDR {basePrice.toLocaleString('id')}</div>
                </div>
                <div className="flex gap-5">
                    <button className="h-10 rounded bg-orange-500 flex items-center justify-center flex-1 border-2 border-orange-500">Buy</button>
                    {cardButton && <button className="h-10 rounded bg-transparent px-5 border-2 border-orange-500 text-orange"><FiShoppingCart /></button>}
                </div>
            </div>
        </div>
    )
}

const CardProduct = ({name,description, basePrice, image, cardButton})=>{
return(
    <div className=" flex flex-col flex-1 p-3">
        <img className="h-60 rounded" src={image} alt="" />
        <div className="shadow-lg bg-white rounded p-3 m-5 -mt-10 flex flex-col flex-1 gap-5">
            <div className="text-3xl font-bold">{name}</div>
            <div className="flex1">{description}</div>
            <div className="text-2xl font-bold text-orange-500">IDR {basePrice.toLocaleString('id')}</div>
            <div className="flex gap-5">
                <button className="h-10 rounded bg-orange-500 flex items-center justify-center flex-1 border-2 border-orange-500">Buy</button>
                {cardButton && <button className="h-10 rounded bg-transparent px-5 border-2 border-orange-500 text-orange"><FiShoppingCart/></button>}
            </div>
        </div>
    </div>
)
}



export default CardProduct