// Buat file baru dengan nama CheckoutItem.js
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const CheckoutItem = ({ product, cp1 }) => {
  return (
    <div className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
      <div className="">
        <img
          width="170px"
          height="170px"
          src={
            product.product.image
              ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${product.product.image}`
              : cp1
          }
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
        <div className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
          FLASH SALE!
        </div>
        <div className="text-[#0B0909] text-[18px] font-bold">
          {product.product.name}
        </div>
        <div className="flex gap-[10px] items-center">
          <div>1pcs</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>{product.size.size}</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>{product.variant.name}</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>Dine In</div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="line-through font-bold text-[12px] text-[#D00000]">
            IDR 0
          </div>
          <div className="text-[22px] font-bold text-[#FF8906]">
            IDR{" "}
            {Number(
              product.product.basePrice +
                product.variant.additionalPrice +
                product.size.additionalPrice
            ).toLocaleString("id")}
          </div>
        </div>
      </div>
      <div className="mr-[20px] text-[red]">
        <FiPlusCircle />
      </div>
    </div>
  );
};

export default CheckoutItem;
