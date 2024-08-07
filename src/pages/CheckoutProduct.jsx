import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser, FiPlus, FiPlusCircle, FiMail, FiMapPin } from "react-icons/fi"
import cp1 from "../assets/images/cphead1.png"
import BRI from "../assets/images/BRI.svg"
import BCA from "../assets/images/BCA.svg"
import OVO from "../assets/images/OVO.svg"
import PAYPAL from "../assets/images/PAYPAL.svg"
import GOPAY from "../assets/images/GOPAY.svg"
import DANA from "../assets/images/DANA.png"
import axios from "axios"
import React from "react"
import CheckoutItem from "../components/checkoutCard"
import { useSelector, useDispatch } from "react-redux"
import { decToCart as actionDecToCart } from "../redux/reducers/cart"

const CheckoutProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const cart = useSelector(state => state.cart.data) //mapping data dari redux terkait detail product
    const user = useSelector(state => state.profile.data.id)
    const orderTotal = cart.reduce((prev, curr) => {
        return prev + curr.product.basePrice + curr.size.additionalPrice + curr.variant.additionalPrice
    }, 0)
    const tax = orderTotal * 0.1
    const total = orderTotal + tax

    const processOrder = async (e) => {
        try {
            e.preventDefault();
            const { value: address } = e.target.address;
            const { value: fullName } = e.target.fullName;
            const { value: email } = e.target.email;
            const userId = user;
            const totalOrder = total;
    
            const form = new URLSearchParams();
            form.append('userId', userId);
            form.append('total', totalOrder);
            form.append('address', address);
            form.append('fullName', fullName);
            form.append('email', email);
    
            const { data: order } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/orders`, form.toString(), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(order.results.id);
            const orderId = order.results.id;
    
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                const formOrderDetail = new URLSearchParams(); // Membuat objek URLSearchParams baru untuk setiap iterasi
                formOrderDetail.append('productId', item.product.id);
                formOrderDetail.append('productSizeId', item.size.id);
                formOrderDetail.append('productVariantId', item.variant.id);
                formOrderDetail.append('orderId', orderId);
                const subTotal = calculateSubTotal(item); // Menghitung subTotal untuk setiap item
                formOrderDetail.append('subTotal', subTotal);
                await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/orderDetails`, formOrderDetail.toString(), {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
    
            dispatch(actionDecToCart());
            navigate('/historyorder');
        } catch (err) {
            console.log(err);
        }
    };
    
    const calculateSubTotal = (item) => {
        // Menghitung subtotal berdasarkan harga dasar produk, tambahan harga dari ukuran, dan tambahan harga dari varian
        const productPrice = item.product.basePrice;
        const sizeAdditionalPrice = item.size.additionalPrice || 0;
        const variantAdditionalPrice = item.variant.additionalPrice || 0;
    
        const subTotal = productPrice + sizeAdditionalPrice + variantAdditionalPrice;
        
        return subTotal;
    };

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])

    return (
        <>
            <Navbar />
            <header className="">
                <form onSubmit={processOrder} className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]" action="">
                    <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                        <div className="w-[90%] flex flex-col gap-[20px]">
                            <div className=" h-[60px] flex items-center text-[#0B0909] text-[48px] mb-[40px]">Payment Details</div>
                            <div className="flex justify-between">
                                <div className="text-[#0B132A] font-bold text-[22px]">Your Order</div>
                                <div><Link to="/product"><button
                                    className="flex justify-center items-center gap-[10px] rounded-[6px] bg-[#FF8906] w-[125px] h-[40px] font-bold text-[#0B132A]"
                                    type="submit"><FiPlus />Add Menu</button></Link></div>
                            </div>
                            <div>
                            {cart &&
              cart.map((product, index) => (
                <CheckoutItem key={`product_${product.product.id}`} product={product} cp1={cp1}  index={index} />
              ))}

                            </div>
                            <div className=" flex flex-col gap-[20px]">
                                <div>Payment Info & Delivery</div>
                                <div className="w-full flex flex-col gap-5">
                                    <label className="flex flex-col gap-[5px]" htmlFor="email">
                                        <div className="text-[#0B132A] font-bold">Email</div>
                                        <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                                            <div ><FiMail /></div>
                                            <input className="w-full  text-[black]" id="email" name="email" type="email" placeholder="Enter Your Email" />
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-[5px]" htmlFor="fullName">
                                        <div className="text-[#0B132A] font-bold">Full Name</div>
                                        <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                                            <div className=""><FiUser /></div>
                                            <input className="w-full  text-[black]" id="fullName" name="fullName" type="text" placeholder="Enter Your Full Name" />
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-[5px]" htmlFor="address">
                                        <div className="text-[#0B132A] font-bold">Address</div>
                                        <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                                            <div ><FiMapPin /></div>
                                            <input className="w-full  text-[black]" id="address" name="address" type="text" placeholder="Enter Your Address" />
                                        </div>
                                    </label>
                                </div>
                                <div className="text-[#0B132A] font-bold">Delivery</div>
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
                                    <div className="font-bold text-[#0B132A]">IDR {Number(orderTotal).toLocaleString('id')}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Delivery</div>
                                    <div className="font-bold text-[#0B132A]">IDR 0</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Tax</div>
                                    <div className="font-bold text-[#0B132A]">IDR {Number(tax).toLocaleString('id')}</div>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="font-bold">Sub Total</div>
                                    <div className="font-bold text-[#0B132A]">IDR {Number(total).toLocaleString('id')}</div>
                                </div>
                                <div>
                                    <button
                                        className=" flex justify-center items-center rounded-[6px] bg-[#FF8906] w-full h-[40px] font-bold text-[#0B132A]"
                                        type="submit">Checkout</button>
                                </div>
                                <div>We Accept</div>
                                <div className="flex justify-between">
                                    <div>
                                        <Link to="/#"><img src={BRI} alt="" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><img src={DANA} alt="" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><img src={BCA} alt="" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><img src={GOPAY} alt="" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><img src={OVO} alt="" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><img src={PAYPAL} alt="" /></Link>
                                    </div>
                                </div>
                                <div>*Get Discount if you pay with Bank Central Asia</div>
                            </div>
                        </div>
                    </div>
                </form>
            </header>
            <Footer />
        </>
    )
}

export default CheckoutProduct