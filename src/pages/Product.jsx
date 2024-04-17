import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"
import axios from "axios"
// import FilterProduct, { FilterProductMobile } from "../components/FilterProduct"
import { FiCheck, FiCircle, FiMenu } from "react-icons/fi"
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
    const totalPages = 5;

    const getSearchProduct = async (e, limit, page) => {
        e.preventDefault()
        const {value: search} = e.target.search
        const { data } = await axios.get( `${import.meta.env.VITE_BACKEND_URL}/products`, {
            params: {
                // bestSeller: true,
                search,
                limit,
                page
            }
        })
        setProductUpload(data.results)
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        }),
            getProductUpload(setProductUpload, 6, currentPage)
            getSearchProduct(6, currentPage)
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
                        <form onSubmit={getSearchProduct} action=""
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
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="favorite" name="favorite" />
                                <div>Favorite Product</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="coffee">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="coffee" name="coffee" />
                                <div>Coffee</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="non">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="non" name="non" />
                                <div>Non Coffee</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="food">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="food" name="food" />
                                <div>Foods</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="add">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="add" name="add" />
                                <div>Add-On</div>
                            </label>
                            <div>Sort By</div>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="Buy1get1">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="Buy1get1" name="Buy1get1" />
                                <div>Buy1get1</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="flash">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="flash" name="flash" />
                                <div>Flash Sale</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="birthday">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="birthday" name="birthday" />
                                <div>Birthday Package</div>
                            </label>
                            <label className=" relative flex items-center gap-[40px]" htmlFor="cheap">
                                <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
                                </div>
                                <input
                                    className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                    type="checkbox" id="cheap" name="cheap" />
                                <div>Cheap</div>
                            </label>
                            {/* <div>Range Price</div>
                            <label htmlFor="">
                                <input className="w-[100%]" type="range" name="price" id="price" min="5.000" max="1.000.000" step="" />
                            </label> */}
                            <button className="rounded-[8px] bg-[#FF8906] py-[10px]" type="submit">Apply Filter</button>

                            {/* {filteredProducts.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.type}
                </div> */}
                        </form>
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
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageClick={handlePageClick}
                            handlePrevPage={handlePrevPage}
                            handleNextPage={handleNextPage}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product