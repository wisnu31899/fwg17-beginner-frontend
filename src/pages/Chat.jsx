// import { Link } from "react-router-dom"
// import {TransparantNavbar} from "../components/Navbar"

const Login = () => {
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
                        <li className="w-full md:w-auto"><button className="px-5 py-2 bg-transparent border border-white rounded w-full">Sign In</button></li>
                        <li className="w-full md:w-auto"><button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded w-full">Sign Up</button></li>
                    </ul>
                </div>
            </nav>
            <header className=" flex flex-col-reverse md:flex-row h-screen">
                <div className="flex-1 flex justify-center items-center bg-gradient-to-b from-gray-600 to-black">
                    <div className="flex flex-col max-w-[70%] text-white gap-5">
                        <div className="text-[36px] font-bold">Start Your day with Coffee and Good Meals</div>
                        <div>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                            day with us for a bigger smile!</div>
                        <div><button className="w-[140px] h-[50px] bg-[#FF8906] text-black font-bold" type="submit">Get
                            Started</button></div>
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
                <div className="flex-1 flex items-center justify-center bg-[url(/asset/image/bg-homehead.png)] bg-cover bg-no-repeat bg-center">
                    <div className="px-[20px] py-[20px] flex flex-col gap-[20px] bg-[white] max-w-3xl h-[450px] border-t-[20px] rounded-[10px] border-[#FF8906]">
                        <div className="flex gap-[15px]">
                            <div><img src="./asset/icon/Ellipse 183.svg" alt="" /></div>
                            <div className="flex flex-col">
                                <div className="font-bold">Maria Angela</div>
                                <div className="text-[#FF8906]">Admin Support</div>
                            </div>
                        </div>
                        <div><hr /></div>
                        <div className="flex items-center gap-[10px]">
                            <div><img src="./asset/icon/Ellipse 184.svg" alt="" /></div>
                            <div className="bg-gray-300 py-[5px] px-[10px] rounded-[10px]">Hallo, Ada yang bisa saya bantu?</div>
                        </div>
                        <div className="flex items-center gap-[10px] self-end">
                            <div className="bg-gray-300 py-[5px] px-[10px] rounded-[10px]">Saya kesulitan mencari kopi</div>
                            <div><img src="./asset/icon/Ellipse 185.svg" alt="" /></div>
                        </div>
                        <div className="flex w-full gap-[10px] items-center mt-[150px] ">
                            <div className="flex-1"><form className="w-full" action=""><input className=" rounded-[8px] w-full h-[45px] px-[15px] border-2" type="text" placeholder="Masukan Pesan Anda" name="message" id="message" /></form></div>
                            <div className=" bg-[#FF8906] rounded-[8px] flex justify-center items-center w-[45px] h-[45px]" ><i data-feather="send"></i></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Login