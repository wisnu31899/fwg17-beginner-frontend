import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiCircle, FiCheck, FiStar, FiShoppingCart, FiArrowRightCircle } from "react-icons/fi"
import img1sec1 from "../assets/images/ps1-1.png"
import img1sec2 from "../assets/images/ps1-2.png"

const Product = () => {
    return (
        <>
            <Navbar />
            <header className="h-[305px] flex items-center justify-center bg-[url(.././assets/images/ph1.png)] bg-cover bg-no-repeat bg-center">
                <div className="max-w-[900px] text-[#FFF] text-[48px] font-bold">We Provide Good Coffee and Healthy Meals</div>
            </header>
            <section className=" text-[black]  flex flex-col gap-[20px]">
                <div className="font-bold text-[48px] pl-[40px]">Today <span className="text-[#8E6447]">Promo</span></div>
                <div className="flex flex-col md:flex-row justify-between gap-[20px]">
                    <div className="flex-1 p-[10px] flex h-[110px] bg-[#88B788] rounded-[20px]">
                    <div><img src={img1sec1} alt="" /></div>
                        <div className=" flex flex-col">
                            <div className=" font-bold">HAPPY MOTHER'S DAY!</div>
                            <div>Get one of our favorite menu for free!</div>
                            <div className="text-[white]"><Link to="#">Klaim Kupon</Link></div>
                        </div>
                    </div>
                    <div className="flex-1 p-[10px] flex h-[110px] bg-[#88B788] rounded-[20px]">
                        <div><img src={img1sec1} alt="" /></div>
                        <div className=" flex flex-col">
                            <div className=" font-bold">HAPPY MOTHER'S DAY!</div>
                            <div>Get one of our favorite menu for free!</div>
                            <div className="text-[white]"><Link to="#">Klaim Kupon</Link></div>
                        </div>
                    </div>
                    <div className="flex-1 p-[10px] flex h-[110px] bg-[#88B788] rounded-[20px]">
                        <div><img src={img1sec1} alt="" /></div>
                        <div className=" flex flex-col">
                            <div className=" font-bold">HAPPY MOTHER'S DAY!</div>
                            <div>Get one of our favorite menu for free!</div>
                            <div className="text-[white]"><Link to="#">Klaim Kupon</Link></div>
                        </div>
                    </div>
                    <div className="flex-1 p-[10px] flex h-[110px] bg-[#F5C361] rounded-[20px]">
                        <div><img className="h-[100px]" src={img1sec2} alt="" /></div>
                        <div className=" flex flex-col">
                            <div className=" font-bold">Get a cup of coffee for free on sunday morning</div>
                            <div>Only at 7 to 9 AM</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[10px] pl-[40px]">
                <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]"/>
                  <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]"/>
                  <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]"/>
                  <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]"/>
                </div>
            </section>
            <section className="flex justify-center md:pb-[100px]">
                <div className="flex gap-[20px] h-[1600px] md:h-[1950px] w-full md:w-[80%]">
                    <div className="flex flex-col w-full max-w-[300px]">
                        <div className="text-[#0B0909] text-[48px]">Our <span className="text-[#8E6447]">Product</span></div>
                        <form action=""
                            className="gap-[15px] max-w-[385px] p-[30px] rounded-[16px] text-[white] bg-[black] flex flex-col">
                            <div className="flex justify-between">
                                <div>Filter</div>
                                <button type="reset" className="hover:text-orange-400">Reset Filter</button>
                            </div>
                            <label className="flex flex-col gap-[5px]" htmlFor="search">
                                <div>Search</div>
                                <input className="p-[15px] text-[black]" type="text" id="search" name="search"
                                    placeholder="Search Your Product" />
                            </label>
                            <div>Category</div>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="favorite">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="favorite" name="favorite" />
                                    <div>Favorite Product</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="coffee">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="coffee" name="coffee" />
                                    <div>Coffee</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="non">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="non" name="non" />
                                    <div>Non Coffee</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="food">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="food" name="food" />
                                    <div>Foods</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="add">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="add" name="add" />
                                    <div>Add-On</div>
                            </label>
                            <div>Sort By</div>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="Buy1get1">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="Buy1get1" name="Buy1get1" />
                                    <div>Buy1get1</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="flash">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="flash" name="flash" />
                                    <div>Flash Sale</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="birthday">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="birthday" name="birthday" />
                                    <div>Birthday Package</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="cheap">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10"/>
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="cheap" name="cheap" />
                                    <div>Cheap</div>
                            </label>
                            <div>Range Price</div>
                            <label htmlFor="">
                                <input className="w-[100%]" type="range" name="price" id="price" min="5.000" max="1.000.000" step="" />
                            </label>
                            <button className="rounded-[8px] bg-[#FF8906] py-[10px]" type="submit">Apply Filter</button>
                        </form>
                    </div>
                    <div className="flex-1 flex flex-col gap-[50px] pt-[75px]">
                        <div className="flex gap-[20px]">
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-1.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                         <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-2.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                        <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-1.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                         <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-2.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                        <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-1.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                    <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                         <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div
                                    className="absolute m-[15px] flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="h-[300px] bg-[url(../assets/images/ps2-2.png)] bg-cover bg-no-repeat bg-center"></div>
                                <div className="flex flex-col gap-3 mx-5 bg-white -my-10 p-10">
                                    <div className="text-[22px] te-[black] font-bold">Hazelnut Latte</div>
                                    <div className="text-[#4F5665]">You can explore the menu that we provide with fun and have their
                                        own taste and make your day better.</div>
                                    <div className="flex gap-[10px] items-center">
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]"/>
                                        </div>
                                        <div>5.0</div>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                        <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div className="flex-1"><button
                                            className="rounded-md font-bold border-none bg-[#FF8906] text-[black] h-[35px] w-full"
                                            type="submit">Buy</button></div>
                                        <div className="w-[60px]"><button
                                            className="rounded-md flex border-[#FF8906] text-[#FF8906] justify-center items-center border-2 h-[35px] w-full"
                                            type="submit"><FiShoppingCart size={20}/></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-[10px] items-center">
                            <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]"><a href="#">1</a></div>
                            <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]"><a href="#">2</a></div>
                            <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]"><a href="#">3</a></div>
                            <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]"><a href="#">4</a></div>
                            <div><button className="text-[#FF8906]" type="submit"><FiArrowRightCircle className="text-[white] fill-[#FF8906] w-[40px] h-[40px]" /></button></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product