import { Link } from "react-router-dom"
import { FiCoffee,FiUser,FiMail,FiLock,FiEyeOff,FiFacebook,FiGlobe } from "react-icons/fi"

const Register = () => {
    return (
        <>
            <header className="h-screen flex">
                <div className="hidden md:block w-2/6 bg-[url(.././assets/bg-register.png)] bg-cover bg-no-repeat bg-center"></div>
                <div className=" flex flex-1 justify-center items-center">
                    <form className="w-4/5 flex flex-col gap-3" action="">
                        <div className="flex items-center gap-5">
                            <div><FiCoffee size={30} color="#8E6447" /></div>
                            <div><h1 className="text-[#8E6447] font-bold text-2xl">Coffee Shop</h1></div>
                        </div>
                        <div className="text-[#8E6447] text-xl font-bold">Register</div>
                        <div className="text-[#4F5665]">Fill out the form correctly</div>
                        <label className="flex flex-col gap-[5px]" htmlFor="name">
                            <div className="text-[#0B132A] font-bold">Full Name</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div className=""><FiUser/></div>
                                <input className="w-full  text-[black]" id="name" name="name" type="text" placeholder="Enter Your Full Name" />
                            </div>
                        </label>
                        <label className="flex flex-col gap-[5px]" htmlFor="email">
                            <div className="text-[#0B132A] font-bold">Email</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div ><FiMail/></div>
                                <input className="w-full  text-[black]" id="email" name="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </label>
                        <label className="flex flex-col gap-[5px]" htmlFor="password">
                            <div className="text-[#0B132A] font-bold">Password</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div><FiLock/></div>
                                <input className="w-full text-[black]" id="password" name="password" type="password" placeholder="Enter Your Password" />
                                <div><FiEyeOff/></div>
                            </div>
                        </label>
                        <label className="flex flex-col gap-[5px]" htmlFor="password">
                            <div className="text-[#0B132A] font-bold">Confirm Password</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div><FiLock/></div>
                                <input className="w-full text-[black]" id="password" name="password" type="password" placeholder="Enter Your Confirm Password" />
                                <div><FiEyeOff/></div>
                            </div>
                        </label>
                        <div><button className="py-4 bg-orange-500 w-full text-black font-bold">Register</button></div>
                        <div className="flex justify-center">
                            <div className="text-[#4F5665]">Have An Account? <Link className="text-orange-500" to="#">Login</Link></div>
                        </div>
                        <div className="flex items-center -mt-3">
                            <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                            <p className="flex-1 text-center text-[#4F5665]">Or</p>
                            <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                        </div>
                        <div className="flex gap-5 justify-between">
                            <div className="flex-1">
                                <button className="bg-slate-200 shadow w-full h-[40px] rounded-2xl flex gap-3 items-center justify-center  text-[#4F5665]"><FiFacebook/>Facebook</button>
                            </div>
                            <div className="flex-1">
                                <button className="bg-slate-200 shadow w-full h-[40px] rounded-2xl items-center justify-center gap-3 flex  text-[#4F5665]"><FiGlobe/>Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Register