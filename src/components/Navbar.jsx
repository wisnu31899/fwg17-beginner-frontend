// export const TransparantNavbar = () => {
//     <>
//         <nav id="navbar"
//             className="shadow bg-[rgba(11, 9, 9, 0.13)] fixed fill-[#FFFFFF] text-[#FFFFFF] px-20 h-[60px] py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full">
//             <div className="flex flex-col md:flex-row flex-1 w-full gap-10 md:gap-0">
//                 <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
//                     <div className="flex gap-[10px] md:gap-[20px]">
//                         <i className="fill-[#FFFFFF]" data-feather="coffee"></i>
//                         <h1>Coffee Shop</h1>
//                     </div>
//                     <ul className="flex gap-10 md:hidden">
//                         <li><i data-feather="shopping-cart"></i></li>
//                         <li><button><i data-feather="menu"></i></button></li>
//                     </ul>
//                 </div>
//                 <ul id="menuItems2" className="hidden md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full">
//                     <li className="w-full md:w-auto"><a className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" href="#">Home</a></li>
//                     <li className="w-full md:w-auto"><a className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" href="#">Product</a></li>
//                 </ul>
//             </div>
//             <div id="menuItems1" className="hidden flex-1 md:flex w-full">
//                 <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
//                     <li className="w-full md:w-auto hidden md:block"><a href="#"><i data-feather="search"></i></a></li>
//                     <li className="w-full md:w-auto hidden md:block"><a href="#"><i data-feather="shopping-cart"></i></a></li>
//                     <li className="w-full md:w-auto"><button className="px-5 py-2 bg-transparent border border-white rounded w-full">Sign In</button></li>
//                     <li className="w-full md:w-auto"><button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded w-full">Sign Up</button></li>
//                 </ul>
//             </div>
//         </nav>
//     </>

// }

export const Navbar = () => {
    return (
        <>
    <nav id="navbar"
    className="bg-black bg-[rgba(0,0,0,0,5)] text-white px-20 h-[60px] py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20  w-full">
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
        </>
    )
}



export default Navbar