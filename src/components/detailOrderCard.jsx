import React from "react";

const OrderItem = ({ item, cp1 }) => {
  return (
    <div className="flex flex-1 gap-[10px] py-[10px]">
      <div className="">
        <img
          width="170px"
          height="170px"
          src={
            item.productImage
              ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${item.productImage}`
              : cp1
          }
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
        <div className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
          FLASH SALE!
        </div>
        <div className="text-[#0B0909] text-[18px] font-bold">
          {item.productName}
        </div>
        <div className="flex gap-[10px] items-center">
          <div>1pcs</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>{item.productSize}</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>{item.productVariant}</div>
          <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
          <div>Dine In</div>
        </div>
        <div className="flex items-center gap-[10px]">
          {/* <div className="line-through font-bold text-[12px] text-[#D00000]">0</div> */}
          <div className="text-[22px] font-bold text-[#FF8906]">
            {item && item.orderSubtotal && `Rp ${item.orderSubtotal.toLocaleString('id-ID')}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
