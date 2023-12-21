import React from "react"
import { Link } from "react-router-dom"
import { FiCoffee, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi"


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const [search, setSearch] = React.useState(false)


    return (
        <>
                {/* overvlowhidden untuk menyembunyikan menu di humberger menu */}
              <nav
                className={`${!menuOpen ? 'h-[80px]' : '' }  bg-black bg-[rgba(0,0,0,0,5)] text-white px-20 py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full`}>
                <div className="flex flex-col md:flex-row flex-1 w-full gap-2 md:gap-0">
                    <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
                        <div className="flex gap-[10px] md:gap-[20px]">
                            <FiCoffee className="fill-[#FFFFFF]"/>
                            <h1>Coffee Shop</h1>
                        </div>
                        <ul className="flex gap-10 md:hidden">
                            <li><FiShoppingCart size={25}/></li>
                            <li><button onClick={()=>setMenuOpen(!menuOpen)}><FiMenu size={25}/></button></li>
                        </ul>
                    </div>
                    <ul className={`${!menuOpen ? 'hidden' : '' } md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full`}>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/">Home</Link></li>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/product">Product</Link></li>
                    </ul>
                </div>
                <div className={`${!menuOpen ? 'hidden' : '' } flex-1 md:flex w-full`}>
                    <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
                        <li className=" w-full md:w-auto hidden md:block">
                        <button className="flex items-center relative" onClick={()=>setSearch(!search)}><input className={`${!search? 'hidden' : '' } text-black px-1 py-2`} type="text" placeholder="Search" /><FiSearch size={30} className="text-orange-500 -ml-[30px]"/></button>
                        </li>
                        <li className="w-full md:w-auto hidden md:block"><Link className="hover:text-[#FF8906]" to="/detailproduct"><FiShoppingCart size={25} className="text-white"/></Link></li>
                        <li className="w-full md:w-auto"><Link to="/login"><button className="px-5 py-2 bg-transparent border border-white text-white font-bold  rounded w-full">Sign In</button></Link></li>
                        <li className="w-full md:w-auto"><Link to="/register"><button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded w-full">Sign Up</button></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default Navbar