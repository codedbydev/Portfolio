import React from "react"
import { Styles } from "../utils/Style"
import contact from '../assests/images/avtr4.png'

function Contact() {
    return (
        <div>
            <div className="flex-row items-center pl-5 justify-center pt-3" id="Contact">
                <span className={Styles.sectionHeadText}>
                    Contact
                </span>
                <hr className="w-[19%]"></hr>
            </div>

            <div className="mt-5">
                <div className="flex flex-wrap flex-row justify-around">

                    <div className="lg: w-[40%] ">
                        <form action="flex flex-col">
                            <label className="flex flex-col gap-3" htmlFor="">
                                <span className="text-violet-700 font-medium mb-2">
                                    Your Name
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Whats your good name?"
                                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                            </label>

                            <label className="flex flex-col gap-3 mt-3" htmlFor="">
                                <span className="text-violet-700 font-medium mb-2">
                                    E-mail
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Whats your email?"
                                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                            </label>

                            <label className="flex flex-col gap-3 mt-3" htmlFor="">
                                <span className="text-violet-700 font-medium mb-2">
                                    Your Message
                                </span>
                                <textarea
                                    row={5}
                                    name="name"
                                    placeholder="Whats you want to say here?"
                                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <button
                                type="button"
                                className="bg-slate-100 hover:shadow-orange-300 my-5 py-3 px-8 mb-4 rounded-xl  border-none w-fit text-black font-bold shadow-md shadow-primary"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="lg-w-[50%] object-cover ">
                        <img className="object-fill" src={contact} alt="Contact_Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact