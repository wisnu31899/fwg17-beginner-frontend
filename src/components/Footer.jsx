const Navbar = () => {
    return (
        <>
    <footer className="gap-[20px] flex flex-col md:flex-row justify-between text-[#4F5665] py-[50px] bg-[#F8F8F8]">
        <div className="max-w-[500px] flex justify-center">
            <div className="flex flex-col w-[78%] md:w-[70%] gap-[30px]">
                <div className="flex items-center text-[#8E6447] gap-[10px]">
                    <div><i className="fill-[#8E6447] " data-feather="coffee"></i></div>
                    <div>
                        <h1 className="text-[20px] font-bold">Coffee Shop</h1>
                    </div>
                </div>
                <div>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality
                    beans</div>
                <div className="text-[#AFB5C0]">©2020CoffeeStore</div>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[10px]">
                <div className="mb-[10px] text-[black] font-bold">Product</div>
                <div><a className="hover:text-[#FF8906]" href="#">Our Product</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Pricing</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Locations</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Countries</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Blog</a></div>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[10px]">
                <div className="mb-[10px] text-[black] font-bold">Engage</div>
                <div><a className="hover:text-[#FF8906]" href="#">Patner</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">FAQ</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">About Us</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Privacy Policy</a></div>
                <div><a className="hover:text-[#FF8906]" href="#">Terms of Service</a></div>
            </div>
        </div>
        <div className=" flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[20px]">
                <div className="text-[black] font-bold">Social Media</div>
                <div className="flex gap-[20px]">
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><i className="text-[black] fill-[black]" data-feather="facebook"></i></button>
                    </div>
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><i className="text-[black] fill-[black]" data-feather="twitter"></i></button>
                    </div>
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><i className="text-[black]" data-feather="instagram"></i></button></div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Navbar