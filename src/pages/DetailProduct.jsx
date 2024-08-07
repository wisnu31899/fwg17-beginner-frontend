import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"
import { FiShoppingCart, FiStar, FiThumbsUp, FiMinus, FiPlus } from "react-icons/fi"
import dp1 from "../assets/images/dphead1.png"
import dp2 from "../assets/images/dphead2.png"
import dp3 from "../assets/images/dphead3.png"
import dp4 from "../assets/images/dphead4.png"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { CardProductDetail } from "../components/CardProduct"
import { getProductUpload } from "./Home"
import { useDispatch } from "react-redux"
import { addToCard as addToCartAction } from "../redux/reducers/cart"

const DetailProduct = () => {

    const [product, setProduct] = React.useState([{}])//ambil detail product by id
    const [localSelector, setLocalSelector] = React.useState({
        product: null,
        variant: null,
        size: null
    })

    const { id } = useParams()
    const getDetailProduct = async (id) => {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        if (data.success) {
            setProduct(data.results)
            setLocalSelector({
                product: data.results,
                variant: data.results.variants[0],
                size: data.results.sizes[0]
            })
        }
    }
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        }),
            getDetailProduct(id)
    }, [id])


    //pemanggilan component getproductUpload dan card product by limit
    const [productUpload, setProductUpload] = useState([{
    }])

    //pemanggilan pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 9;

    useEffect(() => {
        getProductUpload(setProductUpload, 3, currentPage)
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

    //add product ke addToCart dan hsil masuk ke checkoutProduct
    const dispatch = useDispatch()//panggil useDispatch untuk simpan sementara detail product dari addCart untuk ditampilkan/ditotalkan di halaman checkoutProduct
    const navigate = useNavigate()// pindah halaman ke halaman checkoutproduct
    const addCart = () => {
        dispatch(addToCartAction(localSelector))
        navigate('/checkoutproduct')
    }


    //count jumlah pemesanan
    const [countProduct, setCountProduct] = React.useState(0)

    const addQuantity = () => {
        setCountProduct(countProduct + 1)
    }
    const decQuantity = () => {
        setCountProduct(countProduct - 1)
    }


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
            <header className=" flex flex-col md:flex-row h-screen my-[50px]">
                <div className="flex-1 flex justify-center md:justify-end items-center">
                    <div className="w-[80%] items-center flex-col flex gap-[20px]">
                        <div><img width="450px" src={product.image ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${product.image}` : dp1} alt="" /></div>
                        <div className="flex gap-[20px]">
                            <div><img width="135px" src={dp2} alt="" /></div>
                            <div><img width="135px" src={dp3} alt="" /></div>
                            <div><img width="135px" src={dp4} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center text-[#4F5665]">
                    <div className="flex  flex-col w-[80%] gap-[10px]">
                        <div
                            className="flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[135px] h-[35px]">
                            FLASH SALE!</div>
                        <div className="font-bold text-[#0B0909] text-[48px]">{product.name}</div>
                        <div className="flex items-center gap-[10px]">
                            <div className="line-through text-[12px] text-[#D00000]">IDR {product.basePrice}</div>
                            <div className="text-[22px] text-[#FF8906]">IDR {product.basePrice / 2}</div>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" /></div>
                            <div><FiStar className="text-[#FF8906] fill-[#FF8906] h-[15px] w-[15px]" /></div>
                            <div>5.0</div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <div>200+ Review</div>
                            <div className="w-[3px] h-[23px] bg-[#4F5665]"></div>
                            <div>Recommendation</div>
                            <div><FiThumbsUp size={20} className="text-[#FF8906]" /></div>
                        </div>
                        <div>{product.description}</div>
                        <div className="flex w-[115px] h-[35px] border-2 rounded">
                            <button className="flex-1  border-2 rounded border-[#FF8906] flex items-center justify-center" onClick={decQuantity}><FiMinus /></button>
                            <div className="flex-1 flex items-center justify-center">{countProduct}</div>
                            <button className="flex-1  border-2 rounded bg-[#FF8906] border-[#FF8906] flex items-center justify-center" onClick={addQuantity}><FiPlus /></button>
                        </div>
                        {localSelector?.variant?.id !== null && <><div>Choose Size</div>
                            <div className="flex justify-around gap-[30px]">
                                {product?.variants?.map(item => (
                                    <button onClick={() => setLocalSelector({ ...localSelector, variant: item })} className={` border-2 flex-1 w-full h-[40px] font-bold` + (localSelector.variant.id === item.id ? ' border-2 border-[#FF8906] border-solid ' : '')} key={`variants_${item.id}`}>
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <div>Hot/Ice?</div>
                            <div className="flex gap-[30px] justify-around">
                                {product?.sizes?.map(item => (
                                    <button onClick={() => setLocalSelector({ ...localSelector, size: item })} className={` border-2 flex-1 w-full h-[40px] font-bold` + (localSelector.size.id === item.id ? ' border-2 border-[#FF8906] border-solid ' : '')} key={`sizes_${item.id}`}>
                                        {item.size}
                                    </button>
                                ))}
                            </div></>}
                        <div className="flex gap-[30px] justify-between">
                            <div className="flex-1"><button onClick={addCart}
                                className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906] hover:bg-[#FF8906] rounded-[6px]"
                                type="submit">Buy</button></div>
                            <div className="flex-1"><button onClick={addCart}
                                className="flex justify-center items-center gap-[10px] w-full h-[40px] border-2 hover:border-[#FF8906] font-bold text-[#FF8906] rounded-[6px]" type="submit"><FiShoppingCart size={20} />add to cart</button></div>
                        </div>
                    </div>
                </div>
            </header>
            <section className=" flex md:pt-[0px] pt-[450px] h-[1350px] md:h-[900px] justify-center">
                <div className="w-[90%] flex flex-col gap-[25px]">
                    <div className="text-[#0B0909] text-[48px] font-bold">Rekommendation <span className="text-[#8E6447]">For You</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <div className="flex gap-[20px]">
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
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageClick={handlePageClick}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DetailProduct