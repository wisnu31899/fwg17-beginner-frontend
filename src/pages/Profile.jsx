import { Link } from "react-router-dom"
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser, FiMail, FiPhoneCall, FiLock, FiMapPin, FiEye, FiEyeOff } from "react-icons/fi"
import defaultItems from "../assets/images/default.jpg"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProfile as setProfileAction } from "../redux/reducers/profile"

const Profile = () => {
    const [successMessage, setSuccessMessage] = React.useState(null)
    const [errorMessage, setErrorMessage] = React.useState(null)
    // const [user, setUser] = React.useState({})
    // pengganti user,setUser
    const user = useSelector(state => state.profile.data)
    console.log(user)
    const dispatch = useDispatch()


    // const token = window.localStorage.getItem('token')
    const token = useSelector(state => state.auth.token)

    //get profile
    const getProfile = async () => {
        if (token) {
            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            // setUser(data.results[0])
            dispatch(setProfileAction(data.results[0]))//pengganti setUser
        }
    }
    React.useEffect(() => {
        getProfile()
    }, [])
    //set timeout
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        if (successMessage) {
            setTimeout(() => {
                setSuccessMessage(null)
            }, 2000);
        }
    }, [successMessage])
    //updatedataprofile
    const updateDataProfile = async (e) => {
        e.preventDefault()
        const form = new FormData()
        //cara1
        const fields = ['fullName', 'email', 'phoneNumber', 'password', 'address']
        fields.forEach((field) => {
            if (e.target[field]) {
                form.append(field, e.target[field].value)
            }
        })
        // //cara2
        // if(e.target.fullName){
        //     form.append('fullName', e.target.fullName.value)
        // }
        // if(e.target.email){
        //     form.append('email', e.target.email.value)
        // }
        // if(e.target.phoneNumber){
        //     form.append('phoneNumber', e.target.phoneNumber.value)
        // }
        // if(e.target.address){
        //     form.append('address', e.target.address.value)
        // }
        try{
            const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/profile`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        setSuccessMessage(data.message)
        setErrorMessage(null)
        // setUser(data.results)
        // dispatch(setProfileAction(data.results[0]))//pengganti setUser
        }catch(err){
            setErrorMessage(err.response.data.message)
        }

    }
    //updatefoto
    const [preview, setPreview] = React.useState()
    const updatePicture = (e) => {
        const pictureUrl = URL.createObjectURL(e.target.files[0])
        setPreview(pictureUrl)
    }
    const uploadPicture = async (e) => {
        e.preventDefault()
        try {
            const [file] = e.target.picture.files
            if (file) {
                const form = new FormData()
                form.append('picture', file)
                const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/profile`, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                setSuccessMessage(data.message)
                setErrorMessage(null)

                // setUser(data.results[0])
                // dispatch(setProfileAction(data.results[0]))//pengganti setUser
                // setPreview(null)
            }
        } catch (err) {
            setErrorMessage(err.response.data.message)
        }
    }
    //liatpassword
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <>
            <Navbar />
            <header className="pt-[50px] md:pt-[100px] flex items-center flex-col h-[1200px] md:h-[850px] text-[#4F5665]">
                <div className=" gap-[20px] flex flex-col md:flex-row max-w-[80%] w-full">
                    <form onSubmit={uploadPicture} className="max-w-[280px] w-full flex flex-col">
                        <div className="text-[#0B0909] text-[48px]">Profile</div>
                        <div
                            className="gap-[10px] flex flex-col justify-center items-center max-w-[280px] w-full border-2 p-[10px]">
                            <div className="text-[#0B132A] text-[22px]">{user.fullName}</div>
                            <div>{user.email}</div>
                            <label className=" px-[10px]">
                                {(user.picture && !preview) ? (
                                    <img className="h-[150px] w-[150px] rounded-full" src={user.picture} alt="" />
                                ) : (
                                    <>
                                        {preview ? null : (
                                            <img className="h-[150px] w-[150px]  rounded-full" src={defaultItems} alt="Default" />
                                        )}
                                    </>
                                )}
                                {preview && <img className="h-[150px] w-[150px] rounded-full" src={preview} alt="" />}
                                <input multiple={false} onChange={updatePicture} className="hidden" type="file" name="picture" />
                            </label>

                            <button className="bg-[#FF8906] py-[12px] px-[18px] text-[#0B0909]">Upload New Photo</button>
                            <div>Since 20 January 2022</div>
                        </div>
                    </form>
                    <div className=" md:mt-[70px] border-2 px-[20px] py-[20px] flex-1">
                        <form onSubmit={updateDataProfile} className="flex flex-col gap-[25px]" action="">
                            {successMessage && <div className="border-2 flex justify-center items-center border-green-500 py-2 bg-green-300">{successMessage}</div>}
                            {errorMessage && <div className="border-2 flex justify-center items-center border-red-500 py-2 bg-green-300">{errorMessage}</div>}
                            <label className="flex flex-col gap-[5px]" htmlFor="fullName">
                                <div className="text-[#0B132A] font-bold">FullName</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiUser />
                                    <input defaultValue={user.fullName} className="w-full text-[black]" type="text" id="fullName" name="fullName"
                                        placeholder="Enter Your FullName" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="email">
                                <div className="text-[#0B132A] font-bold">Email</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiMail />
                                    <input defaultValue={user.email} className="w-full text-[black]" type="email" id="email" name="email"
                                        placeholder="Enter Your Email" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="phoneNumber">
                                <div className="text-[#0B132A] font-bold">PhoneNumber</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiPhoneCall />
                                    <input defaultValue={user.phoneNumber} className="w-full text-[black]" type="text" id="phoneNumber" name="phoneNumber"
                                        placeholder="Enter Your phoneNumber" />
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="password">
                                <div className="flex justify-between">
                                    <div className="text-[#0B132A] font-bold">Password</div>
                                    <div><Link to="/forgotpassword" className="text-[#FF8906]">Set New Password</Link></div>
                                </div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiLock />
                                    <input defaultValue={user.password} className="w-full text-[black]" id="password" name="password" type={passwordVisible ? "text" : "password"} placeholder="Enter Your Password" />
                                    <div onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </label>
                            <label className="flex flex-col gap-[5px]" htmlFor="address">
                                <div className="text-[#0B132A] font-bold">Address</div>
                                <div className="border h-[50px] rounded flex items-center px-4 gap-2">
                                    <FiMapPin />
                                    <textarea defaultValue={user.address} className="w-full text-[black]" type="text" id="address" name="address"
                                        placeholder="Enter Your Address"></textarea>
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