import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FilterProduct, { FilterProductMobile } from "../components/FilterProduct"
import { FiCircle, FiArrowRightCircle, FiMenu, FiArrowLeftCircle } from "react-icons/fi"
import img1sec1 from "../assets/images/ps1-1.png"
import img1sec2 from "../assets/images/ps1-2.png"
import React, { useState, useEffect } from "react"
import { getProductUpload } from "./Home"
import { CardProductDetail } from "../components/CardProduct"


const Product = () => {

    //pemanggilan component getproductUpload dan card product by limit
    const [productUpload, setProductUpload] = useState([{
    }])
    
    //pemanggilan pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const totalPages = 5;

    useEffect(() => {
        getProductUpload(setProductUpload, 6, currentPage, '')
    }, [currentPage])


    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        buttons.push(
            <button className="text-[#FF8906]" key="prev" onClick={handlePrevPage} disabled={currentPage === 1}>
                <FiArrowLeftCircle className="text-[white] fill-[#FF8906] w-[40px] h-[40px]" />
            </button>
        );
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button className="flex justify-center items-center border-none rounded-full bg-[#E8E8E8] text-[#A0A3BD] w-[33px] h-[33px]" key={i} onClick={() => handlePageClick(i)} disabled={currentPage === i}>
                    {i}
                </button>
            );
        }
        buttons.push(
            <button className="text-[#FF8906]" key="next" onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FiArrowRightCircle className="text-[white] fill-[#FF8906] w-[40px] h-[40px]" />
            </button>
        );
        return buttons;
    };



    // const [data, setData] = React.useState([
    //     {
    //         promo: 'FLASH SALE!',
    //         name: 'Hazelnut Latte',
    //         description:'You can explore the menu that we provide with fun and have their own taste and make your day better.',
    //         rating: '5.0',
    //         discount: 20000,
    //         price: 10000,
    //         image: box1,
    //         cardButton: true      
    //     },
    //     {
    //         promo: 'FLASH SALE!',
    //         name: 'Hazelnut Latte',
    //         description:'You can explore the menu that we provide with fun and have their own taste and make your day better.',
    //         rating: '5.0',
    //         discount: 20000,
    //         price: 10000,
    //         image: box2,         
    //     }
    // ])


    const [menuFilter, setMenuFilter] = React.useState(false)

    return (
        <>
            <div className={`${!menuFilter ? 'hidden' : 'fixed'} md:hidden z-10 flex-col w-full max-w-[190px]`}>
                <div className="text-orange-500 text-[18px]">Our <span className="text-orange-200">Product</span></div>
                <FilterProductMobile />
            </div>
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
                    <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]" />
                    <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]" />
                    <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]" />
                    <FiCircle className="hover:text-[#FF8906] hover:fill-[#FF8906] text-[#A0A3BD] fill-[#A0A3BD]" />
                </div>
            </section>
            <section className="flex justify-center md:pb-[100px]">
                <div className=" flex gap-[20px] h-[1600px] md:h-[1900px] w-full md:w-[80%]">
                    <div className="hidden md:flex flex-col w-full max-w-[300px]">
                        <div className="text-[#0B0909] text-[48px]">Our <span className="text-[#8E6447]">Product</span></div>
                        <FilterProduct />
                    </div>
                    <div className="flex-1 flex flex-col gap-[50px] pt-[75px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                            {productUpload && productUpload.map((item, index) => (
                                <CardProductDetail
                                    key={String(index)}
                                    id={item.idProduct}
                                    isPromo={true}
                                    cardButton={true}
                                    name={item.productName}
                                    description={item.description}
                                    basePrice={item.basePrice}
                                    image={item.image}

                                />
                            ))}
                        </div>
                        <div className="flex justify-center gap-[10px] items-center">
                            {renderPaginationButtons()}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <div className="md:hidden">
                <div className="fixed bottom-3 right-3 bg-[#FF8906] w-7 h-7 rounded-full flex justify-center items-center"><button onClick={() => setMenuFilter(!menuFilter)}><FiMenu size={20} /></button></div>
            </div>
        </>
    )
}

export default Product