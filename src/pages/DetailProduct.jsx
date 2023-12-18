import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const DetailProduct = () => {
    return (
        <>
            <Navbar />
            <header className="bg-[lightpink] flex flex-col md:flex-row h-screen my-[50px]">
                <div className="flex-1 flex justify-center md:justify-end items-center">
                    <div className="w-[80%] items-center flex-col flex gap-[20px]">
                        <div><img width="450px" src="./asset/image/dphead1.png" alt="" /></div>
                        <div className="flex gap-[20px]">
                            <div><img width="135px" src="./asset/image/dphead2.png" alt="" /></div>
                            <div><img width="135px" src="./asset/image/dphead3.png" alt="" /></div>
                            <div><img width="135px" src="./asset/image/dphead4.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center text-[#4F5665]">
                    <div className="flex  flex-col w-[80%] gap-[10px]">
                        <div
                            className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                            FLASH SALE!</div>
                        <div className="font-bold text-[#0B0909] text-[48px]">Hazelnut Latte</div>
                        <div className="flex items-center gap-[10px]">
                            <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                            <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                            <div>5.0</div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <div>200+ Review</div>
                            <div className="w-[3px] h-[23px] bg-[#4F5665]"></div>
                            <div>Recommendation</div>
                            <div><i className="text-[#FF8906]" data-feather="thumbs-up"></i></div>
                        </div>
                        <div>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time
                            instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48
                            hours.</div>
                        <div className="flex w-[115px] h-[35px] border-2 rounded">
                            <div className="flex-1 flex items-center justify-center border-2 rounded border-[#FF8906]"><i
                                data-feather="minus"></i></div>
                            <div className="flex-1 flex items-center justify-center">1</div>
                            <div className="flex-1 flex items-center justify-center border-2 rounded bg-[#FF8906] border-[#FF8906]">
                                <i data-feather="plus"></i>
                            </div>
                        </div>
                        <div>Choose Size</div>
                        <div className="flex justify-between gap-[30px]">
                            <div className="flex-1"><button className=" w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                type="submit">Regular</button></div>
                            <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                type="submit">Medium</button></div>
                            <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                type="submit">Large</button></div>
                        </div>
                        <div>Hot/Ice?</div>
                        <div className="flex gap-[30px] justify-between">
                            <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                type="submit">Ice</button></div>
                            <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                type="submit">Hot</button></div>
                        </div>
                        <div className="flex gap-[30px] justify-between">
                            <div className="flex-1"><button
                                className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906] hover:bg-[#FF8906] rounded-[6px]"
                                type="submit">Buy</button></div>
                            <div className="flex-1"><button
                                className="flex justify-center items-center gap-[10px] w-full h-[40px] border-2 hover:border-[#FF8906] font-bold text-[#FF8906] rounded-[6px]" type="submit"><i data-feather="shopping-cart"></i>add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-[lightgreen] flex md:pt-[0px] pt-[450px] h-[1350px] md:h-[800px] justify-center">
                <div className="w-[90%] flex flex-col gap-[25px]">
                    <div className="text-[#0B0909] text-[48px] font-bold">Rekommendation <span className="text-[#8E6447]">For You</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <div className="bg-[lightblue] flex flex-col">
                            <div><img className="w-[100%]" src="./asset/image/dpsec1.png" alt="" /></div>
                            <div
                                className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px] ml-[20px] -mt-[430px] md:-mt-[-30px]">
                                FLASH SALE!</div>
                            <div className=" flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] mt-[300px] md:mt-[150px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="flex gap-[10px] items-center">
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div>5.0</div>
                                        </div>
                                        <div className="flex items-center gap-[10px]">
                                            <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                            <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                        </div>
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
                        <div className="bg-[lightblue] flex flex-col">
                            <div><img className="w-[100%]" src="./asset/image/dpsec1.png" alt="" /></div>
                            <div
                                className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px] ml-[20px] -mt-[430px] md:-mt-[-30px]">
                                FLASH SALE!</div>
                            <div className=" flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] mt-[300px] md:mt-[150px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="flex gap-[10px] items-center">
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div>5.0</div>
                                        </div>
                                        <div className="flex items-center gap-[10px]">
                                            <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                            <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                        </div>
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
                        <div className="bg-[lightblue] flex flex-col">
                            <div><img className="w-[100%]" src="./asset/image/dpsec1.png" alt="" /></div>
                            <div
                                className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px] ml-[20px] -mt-[430px] md:-mt-[-30px]">
                                FLASH SALE!</div>
                            <div className=" flex justify-center items-center">
                                <div className="flex items-center justify-center bg-[white] w-[90%] mt-[300px] md:mt-[150px]">
                                    <div className="flex flex-col gap-[10px] mx-[15px] my-[25px]">
                                        <div className="text-[24px] font-bold text-[#0B132A]">Hazelnut Latte</div>
                                        <div>You can explore the menu that we provide with fun and have their own taste and make
                                            your
                                            day better.</div>
                                        <div className="flex gap-[10px] items-center">
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div><i className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" data-feather="star"></i></div>
                                            <div>5.0</div>
                                        </div>
                                        <div className="flex items-center gap-[10px]">
                                            <div className="line-through text-[12px] text-[#D00000]">IDR 20.000</div>
                                            <div className="text-[22px] text-[#FF8906]">IDR 10.000</div>
                                        </div>
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
                    <div className="flex justify-center gap-[10px] items-center">
                        <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]">1</div>
                        <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]">2</div>
                        <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]">3</div>
                        <div className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]">4</div>
                        <div><button className="text-[#FF8906]" type="submit"><i
                            className="text-[white] fill-[#FF8906] w-[40px] h-[40px]"
                            data-feather="arrow-right-circle"></i></button></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DetailProduct