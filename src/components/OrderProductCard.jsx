// OrderCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiRepeat, FiRefreshCcw } from 'react-icons/fi';
import ho1 from "../assets/images/ho1.png"


const OrderCard = ({ orderNumber, date, total, status, id }) => {
    return (
        <div className="flex justify-between bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
            <div className=""><img width="100px" height="100px" src={ho1} alt="" /></div>
            <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-[10px]">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                        fill="none">
                        <path
                            d="M12.6664 1.99996C12.4793 1.79072 12.2502 1.62323 11.9941 1.50837C11.7379 1.39351 11.4605 1.33386 11.1798 1.33329H4.81976C4.53753 1.33158 4.25814 1.38961 3.99994 1.50359C3.74175 1.61756 3.5106 1.7849 3.32169 1.99458C3.13279 2.20427 2.9904 2.45156 2.90389 2.72021C2.81738 2.98886 2.78871 3.27277 2.81976 3.55329L3.85976 12.8866C3.91414 13.3781 4.14863 13.8319 4.51797 14.1607C4.88731 14.4894 5.36533 14.6696 5.85976 14.6666H10.1398C10.6342 14.6696 11.1122 14.4894 11.4815 14.1607C11.8509 13.8319 12.0854 13.3781 12.1398 12.8866L13.1798 3.55329C13.2085 3.27282 13.1776 2.98944 13.0892 2.72173C13.0007 2.45403 12.8566 2.20806 12.6664 1.99996ZM10.7998 12.74C10.7816 12.9038 10.7035 13.0551 10.5804 13.1646C10.4572 13.2742 10.2979 13.3343 10.1331 13.3333H5.85976C5.69495 13.3343 5.53561 13.2742 5.4125 13.1646C5.28938 13.0551 5.21122 12.9038 5.19309 12.74L4.51976 6.66662H11.4798L10.7998 12.74ZM11.6264 5.33329H4.37309L4.15976 3.40662C4.14926 3.31309 4.15868 3.2184 4.18741 3.12878C4.21614 3.03915 4.26351 2.95662 4.32642 2.88662C4.38875 2.81756 4.46485 2.76231 4.54981 2.72442C4.63478 2.68653 4.72673 2.66684 4.81976 2.66662H11.1798C11.2728 2.66684 11.3647 2.68653 11.4497 2.72442C11.5347 2.76231 11.6108 2.81756 11.6731 2.88662C11.736 2.95662 11.7834 3.03915 11.8121 3.12878C11.8408 3.2184 11.8503 3.31309 11.8398 3.40662L11.6264 5.33329ZM9.33309 12C9.5099 12 9.67947 11.9297 9.8045 11.8047C9.92952 11.6797 9.99976 11.5101 9.99976 11.3333V8.66662C9.99976 8.48981 9.92952 8.32024 9.8045 8.19522C9.67947 8.07019 9.5099 7.99996 9.33309 7.99996C9.15628 7.99996 8.98671 8.07019 8.86169 8.19522C8.73666 8.32024 8.66643 8.48981 8.66643 8.66662V11.3333C8.66643 11.5101 8.73666 11.6797 8.86169 11.8047C8.98671 11.9297 9.15628 12 9.33309 12ZM6.66643 12C6.84324 12 7.01281 11.9297 7.13783 11.8047C7.26285 11.6797 7.33309 11.5101 7.33309 11.3333V8.66662C7.33309 8.48981 7.26285 8.32024 7.13783 8.19522C7.01281 8.07019 6.84324 7.99996 6.66643 7.99996C6.48961 7.99996 6.32004 8.07019 6.19502 8.19522C6.07 8.32024 5.99976 8.48981 5.99976 8.66662V11.3333C5.99976 11.5101 6.07 11.6797 6.19502 11.8047C6.32004 11.9297 6.48961 12 6.66643 12Z"
                            fill="#4F5665" />
                    </svg></div>
                    <div>No. Order</div>
                </div>
                <div className="text-[#0B132A] text-[12px] font-bold">{orderNumber}</div>
                <div><Link className="text-[#FF8906] className Properties underline" to={`/customer/orders/${id}`}>Views Order Detail</Link></div>
            </div>
            <div className="flex gap-[5px] flex-col">
                <div className="flex items-center gap-[10px]">
                    <div><FiCalendar /></div>
                    <div>Date</div>
                </div>
                <div className="text-[#0B132A] text-[12px] font-bold">{date}</div>
            </div>
            <div className="flex gap-[5px] flex-col">
                <div className="flex items-center gap-[10px]">
                    <div><FiRepeat /></div>
                    <div>Total</div>
                </div>
                <div className="text-[#0B132A] text-[12px] font-bold">{total}</div>
            </div>
            <div className="flex gap-[5px] flex-col">
                <div className="flex items-center gap-[10px]">
                    <div><FiRefreshCcw /></div>
                    <div>Status</div>
                </div>
                <div className="p-[10px] text-[14px] flex justify-center items-center text-[#FF8906] rounded-[24px] bg-orange-200">{status}</div>
            </div>
        </div>
    );
}

export default OrderCard;