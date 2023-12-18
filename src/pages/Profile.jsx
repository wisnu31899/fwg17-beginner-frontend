// import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser,FiMail,FiPhoneCall,FiLock,FiMapPin } from "react-icons/fi"
import profileImage from "../assets/images/profile.svg"

const Profile = () => {
    return (
        <>
            <Navbar />
            <header className="pt-[50px] md:pt-[100px] flex items-center flex-col h-[1200px] md:h-[850px] text-[#4F5665]">
                <div className=" gap-[20px] flex flex-col md:flex-row max-w-[80%] w-full">
                    <div className="max-w-[280px] w-full flex flex-col">
                        <div className="text-[#0B0909] text-[48px]">Profile</div>
                        <div
                            className="gap-[10px] flex flex-col justify-center items-center max-w-[280px] w-full border-2 p-[10px]">
                            <div className="text-[#0B132A] text-[22px]">Galuh Wizard</div>
                            <div>ghaluhwizz@gmail.com</div>
                            <div><img src={profileImage} alt="" /></div>
                            <button className="bg-[#FF8906] py-[12px] px-[18px] text-[#0B0909]">Upload New Photo</button>
                            <div>Since 20 January 2022</div>
                        </div>
                    </div>
                    <div className=" md:mt-[70px] border-2 px-[20px] py-[20px] flex-1">
                        <form className="flex flex-col gap-[25px]" action="">
                            <label className="flex flex-col gap-[5px]" htmlFor="name">
                                <div className="text-[#0B132A] font-bold">Full Name</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiUser/>
                                    <input className="w-full text-[black]" type="text" id="name" name="name"
                                        placeholder="Ghaluh Wizard" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="email">
                                <div className="text-[#0B132A] font-bold">Email</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                  <FiMail/>
                                    <input className="w-full text-[black]" type="email" id="email" name="email"
                                        placeholder="ghaluhwizz@gmail.com" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="phone">
                                <div className="text-[#0B132A] font-bold">Phone</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                             <FiPhoneCall/>
                                    <input className="w-full text-[black]" type="number" id="phone" name="phone"
                                        placeholder="082116304338" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="password">
                                <div className="flex justify-between">
                                    <div className="text-[#0B132A] font-bold">Password</div>
                                    <div><a className="text-[#FF8906]" href="#">Set New Password</a></div>
                                </div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiLock/>
                                    <input className="w-full text-[black]" type="password" id="password" name="password"
                                        placeholder="**********" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="address">
                                <div className="text-[#0B132A] font-bold">Address</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                  <FiMapPin/>
                                    <input className="w-full text-[black]" type="text" id="address" name="address"
                                        placeholder="Griya Bandung Indah" />
                                </div>
                            </label>
                            <button className="font-bold w-full bg-[#FF8906] text-[#0B132A] py-[12px]
                    px-[18px]" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default Profile