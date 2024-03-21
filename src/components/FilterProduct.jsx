// import { FiCheck } from "react-icons/fi"
// import React, { useState } from 'react';
// import axios from 'axios';


// export const FilterProductMobile = () => {

// //     //pagination lengkap
// //     const [filterValue, setFilterValue] = useState('');
// //   const [coffeeChecked, setCoffeeChecked] = useState(false);
// //   const [foodChecked, setFoodChecked] = useState(false);
// //   const [nonFoodChecked, setNonFoodChecked] = useState(false);
// //   const [flashSaleChecked, setFlashSaleChecked] = useState(false);
// //   const [motherDayChecked, setMotherDayChecked] = useState(false);
// //   const [carFreeDayChecked, setCarFreeDayChecked] = useState(false);
// //   const [rangeValue, setRangeValue] = useState(25000); // Default range value

// //   const [filteredProducts, setFilteredProducts] = useState([]);

// //   const handleFilter = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5050/product`, {
// //         params: {
// //           filter: filterValue,
// //           coffee: coffeeChecked,
// //           food: foodChecked,
// //           nonFood: nonFoodChecked,
// //           flashSale: flashSaleChecked,
// //           motherDay: motherDayChecked,
// //           carFreeDay: carFreeDayChecked,
// //           range: rangeValue,
// //         },
// //       });
// //       setFilteredProducts(response.data); // Mengatur produk yang difilter ke state
// //     } catch (error) {
// //       console.error('Error fetching filtered products:', error);
// //     }
// //   };


//     return (
//         <form action=""
//             className="gap-[5px] max-w-[385px] p-[10px] rounded-[16px] text-[white] bg-[black] flex flex-col">
//             <div className="flex justify-between">
//                 <div>Filter</div>
//                 <button type="reset" className="hover:text-orange-400">Reset Filter</button>
//             </div>
//             <label className="flex flex-col gap-[5px]" htmlFor="search">
//                 <div>Search</div>
//                 <input className="p-[15px] text-[black]" type="text" id="search" name="search"
//                     placeholder="Search Your Product" />
//             </label>
//             <div>Category</div>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="favorite">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="favorite" name="favorite" />
//                 <div>Favorite Product</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="coffee">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="coffee" name="coffee" />
//                 <div>Coffee</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="non">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="non" name="non" />
//                 <div>Non Coffee</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="food">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="food" name="food" />
//                 <div>Foods</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="add">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="add" name="add" />
//                 <div>Add-On</div>
//             </label>
//             <div>Sort By</div>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="Buy1get1">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="Buy1get1" name="Buy1get1" />
//                 <div>Buy1get1</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="flash">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="flash" name="flash" />
//                 <div>Flash Sale</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="birthday">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="birthday" name="birthday" />
//                 <div>Birthday Package</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="cheap">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="cheap" name="cheap" />
//                 <div>Cheap</div>
//             </label>
//             {/* <div>Range Price</div>
//                             <label htmlFor="">
//                                 <input className="w-[100%]" type="range" name="price" id="price" min="5.000" max="1.000.000" step="" />
//                             </label> */}
//             <button className="rounded-[8px] bg-[#FF8906] py-[10px]" type="submit">Apply Filter</button>
//         </form>
//     )
// }

// const FilterProduct = () => {

//     //search
//     const [search, setSearch] = useState('')
//     const [searchProduct, setSearchProduct] = useState([])

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5050/product?search=${search}`);
//             setSearchProduct(response.data); // Mengatur produk yang difilter ke state
//         } catch (error) {
//             console.error('Error search products:', error);
//         }
//     }


//     return (
//         <form action=""
//             className="gap-[15px] max-w-[385px] p-[30px] rounded-[16px] text-[white] bg-[black] flex flex-col">
//             <div className="flex justify-between">
//                 <div>Filter</div>
//                 <button type="reset" className="hover:text-orange-400">Reset Filter</button>
//             </div>
//             <label className="flex flex-col gap-[5px]" htmlFor="search">
//                 <div>Search</div>
//                 <input className="p-[15px] text-[black]" type="text" value={search} onChange={(e) => setSearch(e.target.value)} id="search" name="search"
//                     placeholder="Search Your Product" />
//             </label>
//             <div>Category</div>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="favorite">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="favorite" name="favorite" />
//                 <div>Favorite Product</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="coffee">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="coffee" name="coffee" />
//                 <div>Coffee</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="non">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="non" name="non" />
//                 <div>Non Coffee</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="food">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="food" name="food" />
//                 <div>Foods</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="add">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="add" name="add" />
//                 <div>Add-On</div>
//             </label>
//             <div>Sort By</div>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="Buy1get1">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="Buy1get1" name="Buy1get1" />
//                 <div>Buy1get1</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="flash">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="flash" name="flash" />
//                 <div>Flash Sale</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="birthday">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="birthday" name="birthday" />
//                 <div>Birthday Package</div>
//             </label>
//             <label className=" relative flex items-center gap-[40px]" htmlFor="cheap">
//                 <div className="flex items-center"><FiCheck size={25} className="text-[black] absolute z-10" />
//                 </div>
//                 <input
//                     className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
//                     type="checkbox" id="cheap" name="cheap" />
//                 <div>Cheap</div>
//             </label>
//             {/* <div>Range Price</div>
//                             <label htmlFor="">
//                                 <input className="w-[100%]" type="range" name="price" id="price" min="5.000" max="1.000.000" step="" />
//                             </label> */}
//             <button className="rounded-[8px] bg-[#FF8906] py-[10px]" onClick={handleSearch} type="submit">Apply Filter</button>

//             {/* {filteredProducts.map((product) => (
//                 <div key={product.id}>
//                     {product.name} - {product.type}
//                 </div> */}
//         </form>
//     )
// }

// export default FilterProduct