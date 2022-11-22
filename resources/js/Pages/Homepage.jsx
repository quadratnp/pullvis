import React from "react"
import { Link, Head } from '@inertiajs/inertia-react'
import Layout from "@/Components/Layout";
import { FaFacebook, FaGlobe, FaInstagram, FaStethoscope, FaThumbsUp, FaTiktok } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { MdMoneyOff, MdPeople } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";

export default function Homepage(props) {
    return (


        <Layout>

            <Head title={props.title} />
            <div className="container-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-center p-5 min-h-screen">
                <p className="text-2xl mt-10">Your Social Media Doctor</p>
                <p className="text-4xl mt-5">Understand Your Social Media <br /> and It Will Grow With You</p>
                <p className="text-2xl mt-10">What We Offer</p>

                <div className="flex items-center justify-center">
                    <div className=" bg-white text-black mt-5 w-3/4 shadow-2xl rounded-2xl">
                        <div className="card-body">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                <div>
                                    <p className="justify-center flex place-items-center"><FaStethoscope size='5em' /></p>
                                    <p className="mt-5 text-xl"><strong>Check Up</strong></p>
                                </div>
                                <div>
                                    <p className="justify-center flex place-items-center"><FaChartBar size='5em' /></p>
                                    <p className="mt-5 text-xl"><strong>Trend Analysis</strong></p>
                                </div>
                                <div>
                                    <p className="justify-center flex place-items-center"><MdPeople size='5em' /></p>
                                    <p className="mt-5 text-xl"><strong>Market Research</strong></p>
                                </div>
                                <div>
                                    <p className="justify-center flex place-items-center"><GiOpenBook size='5em' /></p>
                                    <p className="mt-5 text-xl"><strong>Learning</strong></p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-10">
                                <div className="text-start">
                                    <p className="text-4xl"><strong>Discover how healthy is your social media while spending less</strong></p>
                                    <ul className="mt-5">
                                        <li>
                                            <p className="text-lg">Find your social media status</p>
                                            <p className="text-lg">Monitor the health of your account</p>
                                            <p className="text-lg">Learn what your social media indicate</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="stats-xl shadow border rounded-lg">
                                        <div class="stat">
                                            <div class="text-2xl"><p>Engagement Rate <div class="tooltip" data-tip="This is your engagement rate.">
                                                <FaQuestionCircle />
                                            </div></p>
                                            </div>
                                            <div class="text-4xl text-green-500"><strong>2,7% Healthy</strong></div>
                                            <div class="text-l text-gray-500">Your account's engagement rate 60% better than the rest of the account.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xl bg-white text-center">
                <p className="text-4xl mt-10"><strong>
                    Why Us?</strong></p>

                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-5 w-3/4">
                        <div className=" bg-base-100 shadow-lg rounded-2xl">
                            <div className="card-body">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="justify-center flex place-items-center"><FaThumbsUp size='5em' /></p>
                                    </div>
                                    <div className="col-span-2 text-start">
                                        <p className="text-2xl"><strong>Easy To Use</strong></p>
                                        <p>Just copy paste the link and get the result</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-base-100 shadow-lg rounded-2xl">
                            <div className="card-body">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="justify-center flex place-items-center"><FaGlobe size='5em' /></p>
                                    </div>
                                    <div className="col-span-2 text-start">
                                        <p className="text-2xl"><strong>Universal</strong></p>
                                        <p>Can be used for Facebook, Instagram, Tiktok, and Twitter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-base-100 shadow-lg rounded-2xl">
                            <div className="card-body">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="justify-center flex place-items-center"><MdMoneyOff size='5em' /></p>
                                    </div>
                                    <div className="col-span-2 text-start">
                                        <p className="text-2xl"><strong>Try For Free</strong></p>
                                        <p>Trial version is free to use, you don't need to spend anything!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <p className="text-4xl mt-10"><strong>
                    Social Media of Your Choice</strong></p>

                <div className="flex items-center justify-center mb-10">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-5 w-3/4">
                        <div className="bg-base-100 shadow-xl rounded-xl">
                            <div className="card-body">
                                <div>
                                    <p className="justify-center flex place-items-center text-blue-500"><FaFacebook size='5em' /></p>
                                    <p className="text-2xl mt-5 text-blue-500"><strong>Facebook</strong></p>

                                    <button class="btn mt-5 border-none bg-blue-500">Try For Free</button>

                                </div>

                                <div className="text-start mt-5">
                                    <p className="text-xl"><strong>Facebook Health</strong></p>
                                    <ul>
                                        <li>&#8226; Video Search</li>
                                        <li>&#8226; Account Search</li>
                                        <li>&#8226; Keyword Search</li>
                                    </ul>

                                    <p className="text-xl mt-5"><strong>All-in-one Social Media Doctor</strong></p>
                                    <p>Engagement Rate, Account Health, Best Topic</p>
                                </div>

                            </div>
                        </div>
                        <div className="bg-base-100 shadow-xl rounded-xl">
                            <div className="card-body">
                                <div>
                                    <p className="justify-center flex place-items-center"><FaInstagram size='5em' /></p>
                                    <p className="text-2xl mt-5 text-black"><strong>Instagram</strong></p>

                                    <button class="btn mt-5 border-none bg-orange-500">Try For Free</button>

                                </div>

                                <div className="text-start mt-5">
                                    <p className="text-xl"><strong>Instagram Health</strong></p>
                                    <ul>
                                        <li>&#8226; Video Search</li>
                                        <li>&#8226; Account Search</li>
                                        <li>&#8226; Keyword Search</li>
                                        <li>&#8226; Hashtag Search</li>
                                    </ul>

                                    <p className="text-xl mt-5"><strong>All-in-one Social Media Doctor</strong></p>
                                    <p>Engagement Rate, Account Health, Best Topic</p>
                                </div>

                            </div>
                        </div>
                        <div className="bg-base-100 shadow-xl rounded-xl">
                            <div className="card-body">
                                <div>
                                    <p className="justify-center flex place-items-center text-gray-800"><FaTiktok size='5em' /></p>
                                    <p className="text-2xl mt-5 text-gray-800"><strong>TikTok</strong></p>

                                    <button class="btn mt-5 border-none bg-gray-800">Try For Free</button>

                                </div>

                                <div className="text-start mt-5">
                                    <p className="text-xl"><strong>TikTok Health</strong></p>
                                    <ul>
                                        <li>&#8226; Video Search</li>
                                        <li>&#8226; Account Search</li>
                                        <li>&#8226; Keyword Search</li>
                                    </ul>

                                    <p className="text-xl mt-5"><strong>All-in-one Social Media Doctor</strong></p>
                                    <p>Engagement Rate, Account Health, Best Topic</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex place-items-center justify-center mt-10 mb-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-1/2 rounded-xl">
                        <div className="card-body">
                            <div className="grid grid-cols-3 gap-6">
                                <div>foto dokter</div>
                                <div className="col-span-2 text-start">
                                    <p className="text-4xl text-white"><strong>Your Social Media Health is the Key to Your Successful Business</strong></p>
                                    <button className="btn mt-5">Start Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}