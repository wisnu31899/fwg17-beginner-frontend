//untuk penggunaan navbar atau tag lain yang berulang misal tag footer
// import Navbar from "../components/navbar"
// karena <a> tidak bisa dugunakan maka diganti dengan tag <Link> akan tetapi harus diimport terlebih dahulu
import { Link } from "react-router-dom"
// import TransparantNavbar from "../components/TransparantNavbar"
import Footer from "../components/Footer"



const Home = () => {
    return (
        <>
            <nav id="navbar"
                className="shadow bg-[rgba(11, 9, 9, 0.13)] fixed fill-[#FFFFFF] text-[#FFFFFF] px-20 h-[60px] py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full">
                <div className="flex flex-col md:flex-row flex-1 w-full gap-10 md:gap-0">
                    <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
                        <div className="flex gap-[10px] md:gap-[20px]">
                            <i className="fill-[#FFFFFF]" data-feather="coffee"></i>
                            <h1>Coffee Shop</h1>
                        </div>
                        <ul className="flex gap-10 md:hidden">
                            <li><i data-feather="shopping-cart"></i></li>
                            <li><button><i data-feather="menu"></i></button></li>
                        </ul>
                    </div>
                    <ul id="menuItems2" className="hidden md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full">
                        <li className="w-full md:w-auto"><a className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" href="#">Home</a></li>
                        <li className="w-full md:w-auto"><a className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" href="#">Product</a></li>
                    </ul>
                </div>
                <div id="menuItems1" className="hidden flex-1 md:flex w-full">
                    <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
                        <li className="w-full md:w-auto hidden md:block"><a href="#"><i data-feather="search"></i></a></li>
                        <li className="w-full md:w-auto hidden md:block"><a href="#"><i data-feather="shopping-cart"></i></a></li>
                        <li className="w-full md:w-auto"><button className="px-5 py-2 bg-transparent border border-black text-black font-bold  rounded w-full">Sign In</button></li>
                        <li className="w-full md:w-auto"><button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded w-full">Sign Up</button></li>
                    </ul>
                </div>
            </nav>
            <header className="flex flex-col-reverse md:flex-row h-screen">
                <div className="flex-1 flex justify-center items-center bg-gradient-to-b from-gray-600 to-black">
                    <div className="flex flex-col max-w-[70%] text-white gap-5">
                        <div className="text-[36px] font-bold">Start Your day with Coffee and Good Meals</div>
                        <div>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                            day with us for a bigger smile!</div>
                        <div><button className="w-[140px] h-[50px] bg-[#FF8906] text-black font-bold" type="submit"><a href="./product.html">Get Started</a></button></div>
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
                <div className="flex-1 bg-[url(/asset/image/bg-homehead.png)] bg-cover bg-no-repeat bg-center"></div>
            </header>
            <section className="flex flex-col-reverse md:flex-row h-screen">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col gap-[25px] max-w-[70%] text-[#4F5665]">
                        <div className="flex justify-center items-center gap-[20px]">
                            <div className="h-[68px] w-[10px] bg-[#FF8906]"></div>
                            <div className="text-[#0B132A] font-bold text-[38px]">We Provide <span className="text-[#8E6447]">Good
                                Coffee</span> and <span className="text-[#8E6447]">Healthy Meals</span></div>
                        </div>
                        <div>You can explore the menu that we provide with fun and have their own taste and make your day
                            better.</div>
                        <div className="flex gap-[10px] text-[14px]"><i className="bg-[#2FAB73] rounded-full text-[white]"
                            data-feather="check"></i>High quality beans</div>
                        <div className="flex gap-[10px] text-[14px]"><i className="bg-[#2FAB73] rounded-full text-[white]"
                            data-feather="check"></i>Healthy meals, you can request the ingredients</div>
                        <div className="flex gap-[10px] text-[14px]"><i className="bg-[#2FAB73] rounded-full text-[white]"
                            data-feather="check"></i>Chat with our staff to get better experience for ordering</div>
                        <div className="flex gap-[10px] text-[14px]"><i className="bg-[#2FAB73] rounded-full text-[white]"
                            data-feather="check"></i>Free member card with a minimum purchase of IDR 200.000.</div>
                    </div>
                </div>
                <div className="flex-1 bg-[url(/asset/image/bg-homesec1.png)] bg-cover bg-no-repeat bg-center"></div>
            </section>
            <section className="h-[1700px] md:h-screen flex justify-center text-[#4F5665] md:my-[50px]">
                <div className="max-w-[90%] flex flex-col justify-center items-center gap-[25px]">
                    <div className="text-[#0B132A] text-[48px] font-bold">Here is People's <span
                        className="text-[#8E6447]">Favorite</span></div>
                    <div className="h-[7px] w-[68px] text-[white] bg-[#FF8906]">a</div>
                    <div>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</div>
                    <div className="flex flex-col md:flex-row gap-[40px]">
                        <div className="flex flex-col">
                            <div><img className="w-[100%]" src="./asset/image/sec2-box1.png" alt="" /></div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] -mt-[80px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 20.000</div>
                                        <div className="flex items-center justify-between gap-[10px]">
                                            <div className="flex-1"><button
                                                className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                                type="submit"><a href="./detail-product.html">Buy</a></button></div>
                                            <div className="w-[60px]"><button
                                                className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                                type="submit"><i data-feather="shopping-cart"><a href="./detail-product.html"></a></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div><img className="w-[100%]" src="./asset/image/sec2-box2.png" alt="" /></div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] -mt-[80px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 20.000</div>
                                        <div className="flex items-center justify-between gap-[10px]">
                                            <div className="flex-1"><button
                                                className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                                type="submit"> Buy</button></div>
                                            <div className="w-[60px]"><button
                                                className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                                type="submit"><i data-feather="shopping-cart"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-col hidden">
                            <div><img className="w-[100%]" src="./asset/image/sec2-box3.png" alt="" /></div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] -mt-[80px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 20.000</div>
                                        <div className="flex items-center justify-between gap-[10px]">
                                            <div className="flex-1"><button
                                                className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                                type="submit"> Buy</button></div>
                                            <div className="w-[60px]"><button
                                                className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                                type="submit"><i data-feather="shopping-cart"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-col hidden">
                            <div><img className="w-[100%]" src="./asset/image/sec2-box4.png" alt="" /></div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] -mt-[80px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 20.000</div>
                                        <div className="flex items-center justify-between gap-[10px]">
                                            <div className="flex-1"><button
                                                className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                                type="submit"> Buy</button></div>
                                            <div className="w-[60px]"><button
                                                className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                                type="submit"><i data-feather="shopping-cart"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div><img src="./asset/image/bg-homesec3.png" alt="" /></div>
                </div>
            </section>
            <section className="md:mt-[0px] mt-[100px] h-screen flex text-[white] bg-gradient-to-b from-gray-600 to-black gap-[20px]">
                <div className="flex-1 hidden md:flex justify-end items-center">
                    <div><img src="./asset/image/bg-homesec4.png" alt="" /></div>
                </div>
                <div className="flex-1 flex md:justify-start justify-center items-center">
                    <div className="flex flex-col justify-center gap-[25px] w-[80%]">
                        <div className="text-[16px] font-bold">TESTIMONI</div>
                        <div className="md:hidden"><img src="./asset/image/bg-homesec4.png" alt="" /></div>
                        <div className="flex items-center gap-[20px]">
                            <div className="w-[7px] h-[68px] text-[white] bg-[#FF8906]"></div>
                            <div className="text-[48px] font-bold">Viezh Robert</div>
                        </div>
                        <div className="text-[#FF8906]">Manager Coffe Shop</div>
                        <div>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals
                            tho. I like it here!! Very recommended!</div>
                        <div className="flex gap-[30px]">
                            <div><i className="text-[#FF8906] fill-[#FF8906]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906]" data-feather="star"></i></div>
                            <div>5.0</div>
                        </div>
                        <div className="flex gap-[10px]">
                            <div><button type="submit"><i className="text-[black] fill-[#FF8906] w-[40px] h-[40px]"
                                data-feather="arrow-left-circle"></i></button></div>
                            <div><button className="text-[#FF8906]" type="submit"><i
                                className="text-[black] fill-[#FF8906] w-[40px] h-[40px]"
                                data-feather="arrow-right-circle"></i></button></div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div><i className="fill-[#DDE0E4] text-[#DDE0E4] w-[20px] h-[20px]" data-feather="circle"></i></div>
                            <div><i className="fill-[#DDE0E4] text-[#DDE0E4] w-[20px] h-[20px]" data-feather="circle"></i></div>
                            <div><i className="fill-[#DDE0E4] text-[#DDE0E4] w-[20px] h-[20px]" data-feather="circle"></i></div>
                            <div><i className="fill-[#DDE0E4] text-[#DDE0E4] w-[20px] h-[20px]" data-feather="circle"></i></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home