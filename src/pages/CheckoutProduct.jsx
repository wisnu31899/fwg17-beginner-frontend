import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser, FiPlus, FiPlusCircle, FiMail, FiMapPin } from "react-icons/fi"
// import cp1 from "../assets/images/cphead1.png"
import BRI from "../assets/images/BRI.svg"
import BCA from "../assets/images/BCA.svg"
import OVO from "../assets/images/OVO.svg"
import PAYPAL from "../assets/images/PAYPAL.svg"
import GOPAY from "../assets/images/GOPAY.svg"
import DANA from "../assets/images/DANA.png"
import axios from "axios"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { decToCart as actionDecToCart } from "../redux/reducers/cart"

const CheckoutProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const procesCheckout = () => {
    //     // setToken(null)
    //     // window.localStorage.removeItem('token')
    //     // dispatch(actionDecToCart())
    //     navigate('/historyorder')
    // }
    const token = useSelector(state => state.auth.token)
    const cart = useSelector(state => state.cart.data) //mapping data dari redux terkait detail product
    const user = useSelector(state => state.profile.data.id)
    const orderTotal = cart.reduce((prev, curr) => {
        return prev + curr.product.basePrice + curr.size.additionalPrice + curr.variant.additionalPrice
    }, 0)
    const tax = orderTotal * 0.1
    const total = orderTotal + tax
    console.log(orderTotal)
    // console.log(total)

    // console.log(useSelector(state => state.cart.data[0].product.id))
    // console.log(useSelector(state => state.cart.data[0].variant.id))
    // console.log(useSelector(state => state.cart.data[0].size.id))

    const processOrder = async (e) => {
        try{
            e.preventDefault();
            const { value: address } = e.target.address;
            const { value: fullName } = e.target.fullName;
            const { value: email } = e.target.email;
            const userId = user
            const totalOrder = total
            console.log(total)

            const form = new URLSearchParams();
            form.append('userId', userId); // Anda perlu mendapatkan userId dari Redux atau tempat penyimpanan data lainnya
            form.append('total', totalOrder); // Anda perlu menghitung total dari keranjang belanja
            form.append('address', address);
            form.append('fullName', fullName);
            form.append('email', email);

            const { data: order } = await axios.post('http://localhost:5050/customer/orders', form.toString(), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })


            const formOrderDetail = new URLSearchParams();
            formOrderDetail.append('productId', cart[0].product.id); // Anda perlu mendapatkan userId dari Redux atau tempat penyimpanan data lainnya
            formOrderDetail.append('productSizeId', cart[0].size.id); // Anda perlu menghitung total dari keranjang belanja
            formOrderDetail.append('productVariantId', cart[0].variant.id);
            formOrderDetail.append('orderId', order.results.id);
            formOrderDetail.append('subTotal', orderTotal);

            const {data: orderDetail} = await axios.post('http://localhost:5050/customer/orderDetails', formOrderDetail.toString(), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(orderDetail);

            setTimeout(() => {
                 dispatch(actionDecToCart())
                navigate('/historyorder')
                }, 3000);
        }catch(err){
            console.log(err)
        }
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
                                <div><Link to="/"><button
                                    className="flex justify-center items-center gap-[10px] rounded-[6px] bg-[#FF8906] w-[125px] h-[40px] font-bold text-[#0B132A]"
                                    type="submit"><FiPlus />Add Menu</button></Link></div>
                            </div>
                            <div>
                                {cart.map(product => (
                                    <div key={`product_${product.product.id}`} className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                                        <div className=""><img width="170px" height="170px" src={`http://localhost:5050/uploads/products/${product.product.image}`} alt="" /></div>
                                        <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
                                            <div className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
                                                FLASH SALE!</div>
                                            <div className="text-[#0B0909] text-[18px] font-bold">{product.product.name}</div>
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
                                                <div className="line-through font-bold text-[12px] text-[#D00000]">IDR 0</div>
                                                <div className="text-[22px] font-bold text-[#FF8906]">IDR {Number(product.product.basePrice +
                                                    product.variant.additionalPrice + product.size.additionalPrice).toLocaleString('id')}</div>
                                            </div>
                                        </div>
                                        <div className="mr-[20px] text-[red]">
                                            <FiPlusCircle />
                                        </div>
                                    </div>
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