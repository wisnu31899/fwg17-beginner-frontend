//untuk penggunaan navbar atau tag lain yang berulang misal tag footer
// import Navbar from "../components/navbar"
// karena <a> tidak bisa dugunakan maka diganti dengan tag <Link> akan tetapi harus diimport terlebih dahulu
import { Link } from "react-router-dom"
// import TransparantNavbar from "../components/TransparantNavbar"
import React from "react"
import Footer from "../components/Footer"
import { FiCoffee, FiSearch, FiShoppingCart, FiCheck, FiStar, FiSend, FiArrowLeftCircle, FiArrowRightCircle, FiCircle, FiMessageCircle, FiMenu } from "react-icons/fi"
import CardProduct from "../components/CardProduct"
import box1 from "../assets/images/sec2-box1.png"
import box2 from "../assets/images/sec2-box2.png"
import box3 from "../assets/images/sec2-box3.png"
import box4 from "../assets/images/sec2-box4.png"
import homesec3 from "../assets/images/bg-homesec3.png"
import homesec4 from "../assets/images/bg-homesec4.png"
import ellipse1 from"../assets/images/Ellipse 183.svg"
import ellipse2 from"../assets/images/Ellipse 184.svg"
import ellipse3 from"../assets/images/Ellipse 185.svg"




const Home = () => {
    
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [menuChat, setMenuChat] = React.useState(false)
    const [search, setSearch] = React.useState(false)
    return (
        <>
        {/* overvlowhidden untuk menyembunyikan menu di humberger menu */}
        <nav
                className={`${!menuOpen ? 'h-[80px]' : ''}shadow bg-[rgba(11, 9, 9, 0.13)] fixed fill-[#FFFFFF] text-[#FFFFFF] px-20 py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full`}>
                <div className="flex flex-col md:flex-row flex-1 w-full gap-2 md:gap-0">
                    <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
                        <div className="flex gap-[10px] md:gap-[20px]">
                            <FiCoffee className="fill-[#FFFFFF]" />
                            <h1>Coffee Shop</h1>
                        </div>
                        <ul className="flex gap-10 md:hidden">
                            <li><FiShoppingCart /></li>
                            <li><button onClick={() => setMenuOpen(!menuOpen)}><FiMenu /></button></li>
                        </ul>
                    </div>
                    <ul className={`${!menuOpen ? 'hidden' : ''} md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full`}>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/">Home</Link></li>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/product">Product</Link></li>
                    </ul>
                </div>
                <div className={`${!menuOpen ? 'hidden' : ''} flex-1 md:flex w-full`}>
                    <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
                    <li className=" w-full md:w-auto hidden md:block">
                            <button className="flex items-center relative" onClick={()=>setSearch(!search)}><input className={`${!search? 'hidden' : '' } text-black px-1 py-2`} type="text" placeholder="Search" /><FiSearch size={30} className="text-black -ml-[30px]"/></button>
                        </li>
                        <li className="w-full md:w-auto"><Link to="/login"><button className="px-5 py-2 bg-transparent border border-black text-black font-bold  rounded w-full">Sign In</button></Link></li>
                        <li className="w-full md:w-auto"><Link to="/register"><button className="px-5 py-2 bg-orange-500 border text-black font-bold border-orange-500 rounded w-full">Sign Up</button></Link></li>
                    </ul>
                </div>
            </nav>
            <header className="flex flex-col-reverse md:flex-row md:h-screen h-[1200px]">
                <div className="flex-1 flex justify-center items-center bg-gradient-to-b from-gray-600 to-black">
                    <div className="flex flex-col max-w-[70%] text-white gap-5">
                        <div className="text-[36px] font-bold">Start Your day with Coffee and Good Meals</div>
                        <div>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                            day with us for a bigger smile!</div>
                        <div><Link to=""><button className="w-[140px] h-[50px] bg-[#FF8906] text-black font-bold" type="submit">Get Started</button></Link></div>
                        <div className="flex justify-between divide-x">
                            <div className="flex items-center flex-col flex-1">
                                <div className="text-3xl font-bold text-[#FF8906]">90+</div>
                                <div>Staff</div>
                            </div>
                            <div className="flex items-center flex-col flex-1">
                                <div className="text-3xl font-bold text-[#FF8906]">30+</div>
                                <div>Stores</div>
                            </div>
                            <div className="flex items-center flex-col flex-1">
                                <div className="text-3xl font-bold text-[#FF8906]">800+</div>
                                <div>Costumer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center bg-[url(../assets/images/bg-homehead.png)] bg-cover bg-no-repeat bg-center">
                    <div className={`${!menuChat ? 'hidden' : ''} px-[20px] py-[20px] flex flex-col gap-[20px] bg-[white] max-w-3xl h-[450px] border-t-[20px] rounded-[10px] border-[#FF8906]`}>
                        <div className="flex gap-[15px]">
                            <div><img src={ellipse1} alt="" /></div>
                            <div className="flex flex-col">
                                <div className="font-bold">Maria Angela</div>
                                <div className="text-[#FF8906]">Admin Support</div>
                            </div>
                        </div>
                        <div><hr /></div>
                        <div className="flex items-center gap-[10px]">
                            <div><img src={ellipse2} alt="" /></div>
                            <div className="bg-gray-300 py-[5px] px-[10px] rounded-[10px]">Hallo, Ada yang bisa saya bantu?</div>
                        </div>
                        <div className="flex items-center gap-[10px] self-end">
                            <div className="bg-gray-300 py-[5px] px-[10px] rounded-[10px]">Saya kesulitan mencari kopi</div>
                            <div><img src={ellipse3} alt="" /></div>
                        </div>
                        <div className="flex w-full gap-[10px] items-center mt-[150px] ">
                            <div className="flex-1"><form className="w-full" action=""><input className=" rounded-[8px] w-full h-[45px] px-[15px] border-2" type="text" placeholder="Masukan Pesan Anda" name="message" id="message" /></form></div>
                            <div className=" bg-[#FF8906] rounded-[8px] flex justify-center items-center w-[45px] h-[45px]" ><FiSend size={30}/></div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="flex flex-col-reverse md:flex-row md:h-screen h-[900px]">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col gap-[25px] max-w-[70%] text-[#4F5665]">
                        <div className="flex justify-center items-center gap-[20px]">
                            <div className="h-[68px] w-[10px] bg-[#FF8906]"></div>
                            <div className="text-[#0B132A] font-bold text-[38px]">We Provide <span className="text-[#8E6447]">Good
                                Coffee</span> and <span className="text-[#8E6447]">Healthy Meals</span></div>
                        </div>
                        <div>You can explore the menu that we provide with fun and have their own taste and make your day
                            better.</div>
                        <div className="flex gap-[10px] text-[14px]"><FiCheck className="bg-[#2FAB73] rounded-full text-[white]" />High quality beans</div>
                        <div className="flex gap-[10px] text-[14px]"><FiCheck className="bg-[#2FAB73] rounded-full text-[white]" />Healthy meals, you can request the ingredients</div>
                        <div className="flex gap-[10px] text-[14px]"><FiCheck className="bg-[#2FAB73] rounded-full text-[white]" />Chat with our staff to get better experience for ordering</div>
                        <div className="flex gap-[10px] text-[14px]"><FiCheck className="bg-[#2FAB73] rounded-full text-[white]" />Free member card with a minimum purchase of IDR 200.000.</div>
                    </div>
                </div>
                <div className="flex-1 bg-[url(../assets/images/bg-homesec1.png)] bg-cover bg-no-repeat bg-center"></div>
            </section>
            <section className="h-[2500px] md:h-screen flex justify-center text-[#4F5665] md:my-[50px]">
                <div className="max-w-[90%] flex flex-col justify-center items-center gap-[25px]">
                    <div className="text-[#0B132A] text-[48px] font-bold">Here is People's <span
                        className="text-[#8E6447]">Favorite</span></div>
                    <div className="h-[7px] w-[68px] text-[white] bg-[#FF8906]">a</div>
                    <div>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</div>
                    <div className="flex flex-col md:flex-row gap-[10px]">
                    <CardProduct cardButton={true} image={box1} price={20000} name="Hazelnut Latte" description="You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better." />
                    <CardProduct image={box2} price={20000} name="Hazelnut Latte" description="You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better." />
                    <CardProduct cardButton={true} image={box3} price={20000} name="Hazelnut Latte" description="You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better." />
                    <CardProduct image={box4} price={20000} name="Hazelnut Latte" description="You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better." />
                    </div>

                </div>
            </section>
            <section className="h-[500px] md:h-screen flex justify-center text-[#4F5665] md:my-[100px]">
                <div className="max-w-[80%] flex flex-col justify-center items-center gap-[25px]">
                    <div className="text-[#0B132A] text-[48px] font-bold"><span className="text-[#8E6447]">Visit Our Store</span> in the
                        Spot on the Map Below</div>
                    <div className="h-[7px] w-[68px] text-[white] bg-[#FF8906]">p</div>
                    <div>You can explore the menu that we provide with fun and have their own taste and make your day better.
                    </div>
                    <div><img src={homesec3} alt="" /></div>
                </div>
            </section>
            <section className="md:mt-[0px] mt-[100px] h-screen flex text-[white] bg-gradient-to-b from-gray-600 to-black gap-[20px]">
                <div className="flex-1 hidden md:flex justify-end items-center">
                    <div><img src={homesec4} alt="" /></div>
                </div>
                <div className="flex-1 flex md:justify-start justify-center items-center">
                    <div className="flex flex-col justify-center gap-[25px] w-[80%]">
                        <div className="text-[16px] font-bold">TESTIMONI</div>
                        <div className="md:hidden"><img src={homesec4} alt="" /></div>
                        <div className="flex items-center gap-[20px]">
                            <div className="w-[7px] h-[68px] text-[white] bg-[#FF8906]"></div>
                            <div className="text-[48px] font-bold">Viezh Robert</div>
                        </div>
                        <div className="text-[#FF8906]">Manager Coffe Shop</div>
                        <div>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals
                            tho. I like it here!! Very recommended!</div>
                        <div className="flex gap-[30px]">
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906]" /></div>
                            <div>5.0</div>
                        </div>
                        <div className="flex gap-[10px]">
                            <div><button type="submit"><FiArrowLeftCircle className="text-[black] fill-[#FF8906] w-[40px] h-[40px]" /></button></div>
                            <div><button className="text-[#FF8906]" type="submit"><FiArrowRightCircle className="text-[black] fill-[#FF8906] w-[40px] h-[40px]" /></button></div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div><FiCircle className="fill-[#DDE0E4] text-[#DDE0E4] hover:text-[#FF8906] hover:fill-[#FF8906] w-[20px] h-[20px]" /></div>
                            <div><FiCircle className="fill-[#DDE0E4] text-[#DDE0E4] hover:text-[#FF8906] hover:fill-[#FF8906] w-[20px] h-[20px]" /></div>
                            <div><FiCircle className="fill-[#DDE0E4] text-[#DDE0E4] hover:text-[#FF8906] hover:fill-[#FF8906] w-[20px] h-[20px]" /></div>
                            <div><FiCircle className="fill-[#DDE0E4] text-[#DDE0E4] hover:text-[#FF8906] hover:fill-[#FF8906] w-[20px] h-[20px]" /></div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
            <div>
                <div className="fixed bottom-10 right-10 bg-[#FF8906] w-20 h-20 rounded-full flex justify-center items-center"><button onClick={() => setMenuChat(!menuChat)}><FiMessageCircle size={70} /></button></div>
            </div>
        </>
    )
}

export default Home