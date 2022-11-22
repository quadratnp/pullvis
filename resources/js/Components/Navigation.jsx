import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTiktok } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"


const Navigation = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Feature</a></li>
                        <li><a>Social Media</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl" href="/">PULLVIS</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a className="btn btn-ghost">Feature</a></li>
                    <li><a className="btn btn-ghost">Social Media</a></li>
                    <li><a className="btn btn-ghost">Pricing</a></li>
                    <li><a className="btn btn-ghost">About Us</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <label for="loginModal" class="btn btn-ghost modal-button">Login</label>
                <input type="checkbox" id="loginModal" class="modal-toggle" />
                <div class="modal">
                    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        <div className="bg-white rounded-xl shadow-xl flex w-2/3">
                            <div className="w-3/5 p-5">
                                <div className="text-left font-bold"><span className="text-2xl">PULLVIS_Logo</span></div>
                                <div className="py-28">
                                    <p className="text-4xl font-bold">Login to Your Account</p>
                                    <div className="flex justify-center my-2">
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaFacebookF className="text-lg" /></a>
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaInstagram className="text-lg" /></a>
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaTiktok className="text-lg" /></a>

                                    </div>
                                    <div>
                                        <p className="text-gray-500 my-3">or</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-100 w-64 p-2 rounded-xl flex items-center"><FaRegEnvelope className="text-gray-300 m-2" />
                                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                        </div>

                                        <div className="bg-gray-100 w-64 p-2 rounded-xl flex items-center mt-3"><MdLockOutline className="text-gray-300 m-2" />
                                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                        </div>
                                        <div className="flex justify-between w-64 mb-5">
                                            <label className="flex items-center text-xs">
                                                <input type="checkbox" name="remember" className="m-1" />Remember Me
                                            </label>
                                            <a href="#" className="text-xs m-2">Forgot Password?</a>

                                        </div>
                                        <a href="#" className="btn btn-ghost border-none mt-5 font-bold hover:bg-gradient-to-r from-cyan-500 to-blue-600 hover:text-white">Login</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 p-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-xl rounded-br-xl ">
                                <div className="text-right">
                                    <label for="loginModal" class="btn btn-sm rounded-full btn-ghost">✕</label>
                                </div>
                                <div className="py-40 px-12">
                                    <p className="text-xl">Never See You Before</p>
                                    <div className="border-2 w-10 rounded inline-block mb-2"></div>
                                    <p className="text-4xl mt-5"><strong>New Here?</strong></p>
                                    <p className="mt-5">Sign up and discover a great amount of insight for your social media account</p>
                                    <a href="#" className="btn btn-ghost border-white mt-5 font-bold hover:bg-white hover:text-black">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <label for="signupModal" class="btn modal-button">Sign Up</label>
                <input type="checkbox" id="signupModal" class="modal-toggle" />
                <div class="modal">
                    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        <div className="bg-white rounded-xl shadow-xl flex w-2/3">
                            <div className="w-2/5 p-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tl-xl rounded-bl-xl ">

                                <div className="py-40 px-12">
                                    <p className="text-xl">I Think I Know You</p>
                                    <div className="border-2 w-10 rounded inline-block mb-2"></div>
                                    <p className="text-4xl mt-5"><strong>Been Here?</strong></p>
                                    <p className="mt-5">Login and take control the power of your social media account</p>
                                    <a href="#" className="btn btn-ghost border-white mt-5 font-bold hover:bg-white hover:text-black">Login</a>
                                </div>
                            </div>
                            <div className="w-3/5 p-5">
                                <div className="grid grid-rows-1 grid-flow-col">
                                    <div className="row-span-1 text-left">
                                        <span className="text-2xl font-bold">PULLVIS_Logo</span>
                                    </div>
                                    <div className="row-span-2 text-right">
                                        <label for="signupModal" className="btn btn-sm rounded-full btn-ghost">✕</label>
                                    </div>
                                </div>
                                <div className="text-left font-bold"></div>
                                <div className="py-28">
                                    <p className="text-4xl font-bold">Sign Up</p>
                                    <div className="flex justify-center my-2">
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaFacebookF className="text-lg" /></a>
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaInstagram className="text-lg" /></a>
                                        <a href="#" className="border-2 -gray-200 rounded-full p-3 mx-1"><FaTiktok className="text-lg" /></a>

                                    </div>
                                    <div>
                                        <p className="text-gray-500 my-3">or</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-100 w-64 p-2 rounded-xl flex items-center"><FaRegEnvelope className="text-gray-300 m-2" />
                                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                        </div>

                                        <div className="bg-gray-100 w-64 p-2 rounded-xl flex items-center mt-3"><MdLockOutline className="text-gray-300 m-2" />
                                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                        </div>

                                        <div className="bg-gray-100 w-64 p-2 rounded-xl flex items-center mt-3"><MdLockOutline className="text-gray-300 m-2" />
                                            <input type="password" name="password" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                        </div>

                                        <a href="#" className="btn btn-ghost border-none mt-5 font-bold hover:bg-gradient-to-r from-cyan-500 to-blue-600 hover:text-white">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navigation
