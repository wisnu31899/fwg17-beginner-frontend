import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const CheckoutProduct = () => {
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className=" h-[60px] flex items-center text-[#0B0909] text-[48px] mb-[40px]">Payment Details</div>
                        <div className="flex justify-between">
                            <div className="text-[#0B132A] font-bold text-[22px]">Your Order</div>
                            <div><button
                                className="flex justify-center items-center gap-[10px] rounded-[6px] bg-[#FF8906] w-[125px] h-[40px] font-bold text-[#0B132A]"
                                type="submit"><i data-feather="plus"></i>Add Menu</button></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                            <div className=""><img width="170px" height="170px" src="./asset/image/cphead1.png" alt="" /></div>
                            <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
                                <div
                                    className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="text-[#0B0909] text-[18px] font-bold">Hazelnut Latte</div>
                                <div className="flex gap-[10px] items-center">
                                    <div>2pcs</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Regular</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Ice</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Dine In</div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="line-through font-bold text-[12px] text-[#D00000]">IDR 40.000</div>
                                    <div className="text-[22px] font-bold text-[#FF8906]">IDR 20.000</div>
                                </div>
                            </div>
                            <div className="mr-[20px] text-[red]"><i data-feather="plus-circle"></i></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                            <div className=""><img width="170px" height="170px" src="./asset/image/cphead1.png" alt="" /></div>
                            <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
                                <div
                                    className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="text-[#0B0909] text-[18px] font-bold">Hazelnut Latte</div>
                                <div className="flex gap-[10px] items-center">
                                    <div>2pcs</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Regular</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Ice</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Dine In</div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="line-through font-bold text-[12px] text-[#D00000]">IDR 40.000</div>
                                    <div className="text-[22px] font-bold text-[#FF8906]">IDR 20.000</div>
                                </div>
                            </div>
                            <div className="mr-[20px] text-[red]"><i data-feather="plus-circle"></i></div>
                        </div>
                        <div className=" flex flex-col gap-[20px]">
                            <div>Payment Info & Delivery</div>
                            <form className="w-full flex flex-col gap-5" action="">
                                <div className="flex gap-3 flex-col">
                                    <label className=" text-[#0B132A] font-bold" htmlFor="email">Email</label>
                                    <input className="text-[#4F5665] border-solid border-2 rounded-lg px-16 py-3" htmlFor="email" id="email" type="email" placeholder="Enter Your Email" />
                                    <div className="text-[#4F5665] -mt-[40px] ml-4" ><i data-feather="mail"></i></div>
                                </div>
                                <div className="flex gap-3 flex-col mt-5">
                                    <label className="text-[#0B132A] font-bold" htmlFor="fullname">Full Name</label>
                                    <input className="text-[#4F5665] border-solid border-2 rounded-lg px-16 py-3" htmlFor="fullname" id="fullname" type="text" placeholder="Enter Your Full Name" />
                                    <div className="text-[#4F5665] -mt-[40px] ml-4"><i data-feather="user"></i></div>
                                </div>
                                <div className="flex gap-3 flex-col mt-2">
                                    <label className="mt-3 text-[#0B132A] font-bold" htmlFor="address">Address</label>
                                    <input className="text-[#4F5665] border-solid border-2 rounded-lg px-16 py-3" htmlFor="address" id="address" type="text" placeholder="Enter Your address" />
                                    <div className="text-[#4F5665] -mt-[40px] ml-4" ><i data-feather="map-pin"></i></div>
                                </div>
                            </form>
                            <div className="text-[#0B132A] font-bold mt-5">Delivery</div>
                            <div className="flex justify-between gap-[30px]">
                                <div className="flex-1"><button className=" w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Dine In</button></div>
                                <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Door Delivery</button></div>
                                <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Pick Up</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[150px]">
                    <div className="w-[90%] flex flex-col">
                        <div className="text-[#0B132A] text-[22px] font-bold">Total</div>
                        <div className="flex flex-col justify-center bg-[#E8E8E84D] gap-[20px] px-[20px] py-[10px]">
                            <div className="flex justify-between">
                                <div className="font-bold">Order</div>
                                <div className="font-bold text-[#0B132A]">Idr. 40.000</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-bold">Delivery</div>
                                <div className="font-bold text-[#0B132A]">Idr. 0</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-bold">Tax</div>
                                <div className="font-bold text-[#0B132A]">Idr. 4.000</div>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <div className="font-bold">Sub Total</div>
                                <div className="font-bold text-[#0B132A]">Idr. 44.000</div>
                            </div>
                            <div><button className=" flex justify-center items-center rounded-[6px] bg-[#FF8906] w-full h-[40px] font-bold text-[#0B132A]" type="submit">Checkout</button></div>
                            <div>We Accept</div>
                            <div className="flex justify-between">
                                <div><Link to="/#"><img src="./asset/icon/BRI.svg" alt="" /></Link></div>
                                <div><Link to="/#"><img src="./asset/icon/DANA.png" alt="" /></Link></div>
                                <div><Link to="/#"><img src="./asset/icon/BCA.svg" alt="" /></Link></div>
                                <div><Link to="/#"><img src="./asset/icon/GOPAY.svg" alt="" /></Link></div>
                                <div><Link to="/#"><img src="./asset/icon/OVO.svg" alt="" /></Link></div>
                                <div><Link to="/#"><img src="./asset/icon/PAYPAL.svg" alt="" /></Link></div>
                            </div>
                            <div>*Get Discount if you pay with Bank Central Asia</div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default CheckoutProduct