import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiCalendar, FiChevronDown, FiRepeat, FiRefreshCcw } from "react-icons/fi"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import OrderCard from "../components/OrderProductCard"

const HistoryOrder = () => {
    const [orders, setOrders] = useState([{}])
    // const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    // const cart = useSelector(state => state.cart.data)
    // console.log(cart[0].product.image)

    const getOrder = async () => {
        try{
            const { data } = await axios.get( `${import.meta.env.VITE_BACKEND_URL}/customer/orders`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        // cb(data.results)
        setOrders(data.results)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getOrder(setOrders)
    }, [])

    const getFormattedDate = (timestamp) => {
        const createdAtDate = new Date(timestamp);
        const day = createdAtDate.getDate();
        const month = createdAtDate.getMonth() + 1;
        const year = createdAtDate.getFullYear();
        // Menggunakan template literals untuk menggabungkan nilai day, month, dan year
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    };
    
    
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[30px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="flex items-center gap-[30px]">
                            <div className="text-[#0B0909] text-[48px] font-bold">History Order</div>
                            <div className="flex justify-center items-center bg-[#E8E8E8] h-[40px] w-[40px] font-bold">2</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between gap-[50px]">
                            <div
                                className="flex-1 h-[60px] flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                                <div
                                    className="flex justify-center items-center w-[120px] bg-[#FFF] h-[40px] text-[#0B132A] font-bold">
                                    On Progress</div>
                                <div className="text-[#0B132A] font-bold">Sending Goods</div>
                                <div className="text-[#0B132A] font-bold">Finish Order</div>
                            </div>
                            <div
                                className="h-[60px] flex justify-between items-center bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                                <div><FiCalendar size={20} /></div>
                                <div className="text-[#0B132A] font-bold">January2023</div>
                                <div><FiChevronDown /></div>
                            </div>
                        </div>
                        <div>
                            {orders && orders.map((order, index) => (
                                <OrderCard
                                    id={order.id}
                                    key={index}
                                    orderNumber={order.orderNumber}
                                    date={getFormattedDate(order.createdAt)}
                                    total={order.total}
                                    status={order.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[0px] md:pt-[170px]">
                    <div className="w-[60%] flex flex-col text-[#4F5665]">
                        <div className="flex flex-col justify-center bg-[#E8E8E8] gap-[10px] px-[20px] py-[10px]">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_39_663)">
                                    <path d="M2 24C2 8 8 2 24 2C40 2 46 8 46 24C46 40 40 46 24 46C8 46 2 40 2 24Z" fill="#0B0909" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5398 32.96H17.9998C17.0944 32.9495 16.2297 32.5824 15.5932 31.9384C14.9567 31.2944 14.5997 30.4255 14.5998 29.52V21.62L12.1598 17.44C12.0582 17.264 12.0046 17.0644 12.0044 16.8612C12.0042 16.6579 12.0574 16.4582 12.1587 16.282C12.2599 16.1058 12.4057 15.9593 12.5814 15.8571C12.7571 15.755 12.9566 15.7008 13.1598 15.7H32.5398C32.9949 15.6974 33.446 15.785 33.867 15.958C34.288 16.1309 34.6705 16.3857 34.9923 16.7075C35.3141 17.0293 35.5689 17.4118 35.7418 17.8328C35.9148 18.2538 36.0025 18.7049 35.9998 19.16V29.52C35.9998 29.9734 35.9102 30.4224 35.7361 30.8411C35.5619 31.2597 35.3067 31.6399 34.9852 31.9596C34.6636 32.2793 34.2821 32.5322 33.8624 32.7039C33.4427 32.8756 32.9932 32.9626 32.5398 32.96Z" fill="#A15808" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5401 32.2999H18.0001C17.0913 32.2894 16.2235 31.9196 15.5864 31.2713C14.9494 30.623 14.5948 29.7489 14.6001 28.8399V20.9399L12.1601 16.7599C12.057 16.5855 12.0022 16.3866 12.0015 16.1839C12.0007 15.9813 12.054 15.782 12.1559 15.6068C12.2578 15.4316 12.4046 15.2867 12.5811 15.187C12.7576 15.0874 12.9575 15.0366 13.1601 15.0399H32.5401C32.9936 15.0373 33.443 15.1243 33.8627 15.296C34.2824 15.4677 34.664 15.7207 34.9855 16.0404C35.3071 16.3601 35.5622 16.7402 35.7364 17.1589C35.9105 17.5776 36.0001 18.0265 36.0001 18.4799V28.8399C36.0028 29.2951 35.9151 29.7462 35.7422 30.1672C35.5692 30.5882 35.3145 30.9706 34.9926 31.2925C34.6708 31.6143 34.2883 31.869 33.8673 32.042C33.4464 32.2149 32.9952 32.3026 32.5401 32.2999Z" fill="white" />
                                    <path d="M32.1201 18.8201H18.5001C17.992 18.8201 17.5801 19.232 17.5801 19.7401C17.5801 20.2482 17.992 20.6601 18.5001 20.6601H32.1201C32.6282 20.6601 33.0401 20.2482 33.0401 19.7401C33.0401 19.232 32.6282 18.8201 32.1201 18.8201Z" fill="#FF8906" />
                                    <path d="M32.1201 22.48H18.5001C17.992 22.48 17.5801 22.8919 17.5801 23.4C17.5801 23.9081 17.992 24.32 18.5001 24.32H32.1201C32.6282 24.32 33.0401 23.9081 33.0401 23.4C33.0401 22.8919 32.6282 22.48 32.1201 22.48Z" fill="#FF8906" />
                                    <path d="M28.4201 26.22H18.5001C17.992 26.22 17.5801 26.6319 17.5801 27.14C17.5801 27.6481 17.992 28.06 18.5001 28.06H28.4201C28.9282 28.06 29.3401 27.6481 29.3401 27.14C29.3401 26.6319 28.9282 26.22 28.4201 26.22Z" fill="#FF8906" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_663">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className="text-[18px] font-bold">Send Us Message</div>
                            <div>if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</div>
                            <div><Link to="/"><button className="h-[40px] rounded-[6px] bg-[#FF8906] text-[black] font-bold w-full" type="submit">Send Message</button></Link></div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default HistoryOrder