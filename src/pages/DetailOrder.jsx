// import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRepeat } from "react-icons/fi"
import cp1 from "../assets/images/cphead1.png"
import OrderItem from "../components/detailOrderCard"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const detailOrder = () => {

    const token = useSelector(state => state.auth.token)
    const user = useSelector(state => state.profile.data)
    const [order, setOrder] = useState([{}])
    const [detailOrder, setDetailOrder] = useState([{}])

    const { id } = useParams()
    const getOrder = async (id) => {
        const { data: order } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/orders/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (order.success) {
            setOrder(order.results[0])
        }

        const { data: orderDetail } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/orderDetails/detail/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (order.success) {
            console.log(orderDetail.result)
            setDetailOrder(orderDetail.result)
            // console.log(setDetailOrder)
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        }),
            getOrder(id)
    }, [id, token])

    //real time
    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[#0B0909] text-[30px] font-bold">Order {order && order.orderNumber}</div>
                            <div>{formatDate(Date.now())} at {formatTime(Date.now())}</div>
                        </div>
                        <div className="flex justify-between gap-[50px]">
                            <div className="text-[22px] text-[#0B132A] font-bold">Order Information</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between pb-[15px] border-b-2">
                                <div className="flex gap-[10px]"><FiUser className="mt-[3px]" />Full Name</div>
                                <div className="text-[#0B132A] font-bold">{order && order.fullName}</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiMapPin className="mt-[3px]" />Address</div>
                                <div className="text-[#0B132A] font-bold">{order && order.address}</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiPhoneCall className="mt-[3px]" />Phone</div>
                                <div className="text-[#0B132A] font-bold">{user.phoneNumber}</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiCreditCard className="mt-[3px]" />Payment Method</div>
                                <div className="text-[#0B132A] font-bold">Cash</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiTruck className="mt-[3px]" />Shipping</div>
                                <div className="text-[#0B132A] font-bold">Dine In</div>
                            </div>
                            <div className="flex justify-between items-center py-[10px] border-b-2">
                                <div className="flex gap-[10px]"><FiRepeat className="mt-[3px]" />Status</div>
                                <div className="p-[10px] rounded-[20px] bg-orange-100  text-[orange] font-bold">{order && order.status}</div>
                            </div>
                            <div className="flex justify-between py-[20px]">
                                <div className="flex gap-[10px]">Total Transaksi</div>
                                <div className="text-[#FF8906] font-bold">{order && order.total && `Rp ${order.total.toLocaleString('id-ID')}`}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[120px]">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="text-[#0B132A] font-bold text-[22px]">Your Order</div>
                        <div className="flex flex-col justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                        {detailOrder.map((item, index) => (
        <OrderItem key={index} item={item} cp1={cp1} />
      ))}
                        </div>

                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default detailOrder