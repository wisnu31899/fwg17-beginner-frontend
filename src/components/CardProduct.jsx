
import { FiShoppingCart } from "react-icons/fi"

const CardProduct = ({name,description, price, image, cardButton})=>{
return(
    <div className=" flex flex-col flex-1 p-3">
        <img className="h-60 rounded" src={image} alt="" />
        <div className="shadow-lg bg-white rounded p-3 m-5 -mt-10 flex flex-col flex-1 gap-5">
            <div className="text-3xl font-bold">{name}</div>
            <div className="flex1">{description}</div>
            <div className="text-2xl font-bold text-orange-500">IDR {price.toLocaleString('id')}</div>
            <div className="flex gap-5">
                <button className="h-10 rounded bg-orange-500 flex items-center justify-center flex-1 border-2 border-orange-500">Buy</button>
                {cardButton && <button className="h-10 rounded bg-transparent px-5 border-2 border-orange-500 text-orange"><FiShoppingCart/></button>}
            </div>
        </div>
    </div>
)
}



export default CardProduct