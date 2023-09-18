/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import facebook from "../assests/images/Group.png";
import instagram from "../assests/images/Group (1).png";
import twitter from "../assests/images/Group (2).png";
import linkedin from "../assests/images/Group (3).png";
import youtube from "../assests/images/Group (4).png";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "../assests/images/Asset 2@3x 1.png";
import search from "../assests/images/search.png";
import banner from "../assests/images/banner.png";
import waste from "../assests/images/waste.png";
import biohazard from "../assests/images/biohazard.png";
import dupmstar from "../assests/images/dumpsters.png";
import recycling from "../assests/images/recyceling.png";
import cardbottom from "../assests/images/cardbottom.png";
import cardbg from "../assests/images/cardbg.png";
import relady from "../assests/images/recylcelady.png";
import footerlogo from "../assests/images//footerlogo.png";
const inter = Inter({ subsets: ["latin"], variable: "var(--font-inter)" });


const Home = () => {
  const [show, handleShow] = useState(false);
  return (
    <>
      {/* top heaser */}
      <section className="bg-[#161C20]">
        <div className="container w-[90%] mx-auto flex  justify-between items-center py-3 active:text-leaf-dark ">
          <select
            className=" form-select p-[0.25rem_0.5rem_0.25rem_1rem]   b-2 rounded-[1.25rem] text-leaf-dark"
            name=""
            id=""
          >
            <option value="">English</option>
            <option value="">Spanish</option>
          </select>
          <div className="flex space-x-4  text-leaf-dark items-center ">
            <li className="list-none">
              <a className="text-leaf-medium   text-base font-medium " href="">
                Schedule
              </a>
            </li>
            <li className="list-none">
              <a className="text-leaf-medium  text-base font-medium" href="">
                Drop off locations
              </a>
            </li>
            <li className="list-none">
              <a className="text-leaf-medium  text-base font-medium" href="">
                Pay Bill
              </a>
            </li>
            <li className="list-none">
              <a className="text-leaf-medium   text-base font-medium" href="">
                Shop
              </a>
            </li>
            {show ? (
              <li className="list-none">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input p-[0.25rem_0.5rem_0.25rem_1rem]   b-2 rounded-[1.25rem] text-leaf-dark  w-full max-w-xs ml-2"
                />
              </li>
            ) : (
              <Image
                onClick={() => handleShow(true)}
                src={search}
                alt="search"
              />
            )}
          </div>
          <div className="flex space-x-3 bg-white p-[0.25rem_0.5rem_0.25rem_1rem]  rounded-[1.25rem]">
            <a href="">
              <Image src={facebook} alt="image" />
            </a>
            <a href="">
              <Image src={instagram} alt="image" />
            </a>
            <a href="">
              <Image src={twitter} alt="image" />
            </a>
            <a href="">
              <Image src={linkedin} alt="image" />
            </a>
            <a href="">
              <Image src={youtube} alt="image" />
            </a>
          </div>
        </div>
      </section>
      {/* Mainheader */}
      <section className="header headerBg">
        <div className="container w-[90%] mx-auto flex justify-between">
          <div className="py-3">
            {" "}
            <Image className="w-80" src={logo} alt="logo" />
          </div>
          <div className="flex space-x-4  text-leaf-dark items-center ">
            <li className="list-none">
              <a className="text-gray-800  text-xl  font-medium " href="">
                Home
              </a>
            </li>
            <li className="list-none">
              <a className="text-gray-800 text-xl    font-medium" href="">
                Services
              </a>
            </li>
            <li className="list-none">
              <a className="text-gray-800  text-xl   font-medium" href="">
                About
              </a>
            </li>
            <li className="list-none">
              <a className="text-gray-800  text-xl   font-medium" href="">
                Contact
              </a>
            </li>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-leaf-dark px-6 py-4 rounded-md">
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Hero section Part */}
      <section className="herosection py-36 relative">
        <div className="flex flex-col justify-center items-center">
          <h2 className="z-10 text-6xl uppercase font-bold">
            Turning <span className=" text-leaf-medium">Waste</span> into <br />
            a <span className=" text-leaf-medium">Greener</span> Tomorrow!
          </h2>
          <p className="py-5 z-10">
            The quarterback (commonly abbreviated "QB"), colloquially known as
            the
            <br /> "signal caller" the quarterback is usually considered the
            leader of the offense
          </p>
        </div>
        <div className="flex justify-center items-center z-20">
          <button className="bg-leaf-dark px-6 py-4 rounded-md z-20">
            GET A QUOTE
          </button>
        </div>
        <div class="absolute inset-0 bg-black opacity-50 "></div>

        {/* bottom form section */}

        <section className="bg-[#161C20] w-[88%] mx-auto mt-5 z-20 absolute -bottom-14 translate-x-[-50%]  left-1/2 right-1/2  py-8 rounded-lg">
          <from className="flex items-center justify-around z-20 mt-2">
            <div className="flex justify-between items-center space-x-4 w-[80%]">
              <div className="relative w-[50%]">
                <input
                  name="location"
                  placeholder="Your Location"
                  className="peer w-full ddddd bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="text"
                />
                <label
                  className="input-label transition-all peer-placeholder-shown:text-white  peer-focus:opacity-100   opacity-0 bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="location"
                >
                  Your Location
                </label>
              </div>
              <div className="relative w-[40%]">
                <select
                  name="location"
                  placeholder="Your Location"
                  className="peer  w-full ddddd bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="text"
                >
                  <option value="">Waste Disposal</option>
                </select>
                <label
                  className="input-label  peer-focus:opacity-100 opacity-0 bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="location"
                >
                  Choose Service
                </label>
              </div>
              <div className="relative">
                <input
                  name="location"
                  placeholder="Service For"
                  className="peer w-full bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="text"
                />
                <label
                  className="input-label  transition-all transiton duration-300 peer-focus:opacity-100 opacity-0 bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="location"
                >
                  Service For
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center z-20">
              <button className="bg-leaf-dark px-6 py-4 rounded-md z-20">
                Get Started
              </button>
            </div>
          </from>
        </section>
        {/* absolute section ends here */}
      </section>

      {/* our service section */}

      <section className="service-section bg-[#101518] py-20">
        <div className="container w-[90%] mx-auto my-24">
          <div className="title-part w-[60%] mx-auto px-2 ">
            <h2
              className={`text-4xl text-white font-bold text-center ${inter.className} font-inter uppercase text-white`}
            >
              Our Services
            </h2>
            <p className="text-center text-white py-5">
              Promoting a cleaner world, one bin at a time – your partner in
              comprehensive waste management and sustainable recycling
              solutions.
            </p>
          </div>

          {/* Service Card  */}

          <section className="flex flex-row flex-wrap gap-4 my-24 text-center justify-center space-x-4 ">
          <div class="card-home w-[30%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute -top-12 left-[50%] translate-x-[-50%]  bg-[#D6EA9B] rounded-[50%] p-2">
                <Image src={waste} alt="image" />
              </div>
  <div class="pt-4 px-4 md:px-5 md:pt-5 mt-5">
    <h3 class="text-3xl text-center font-bold text-leaf-medium mt-16">
      Waste Disposal
    </h3>
    <p class="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div class="card-home w-[30%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute -top-12 left-[50%] translate-x-[-50%]  bg-[#D6EA9B] rounded-[50%] p-2">
                <Image src={waste} alt="image" />
              </div>
  <div class="pt-4 px-4 md:px-5 md:pt-5 mt-5">
    <h3 class="text-3xl text-center font-bold text-leaf-medium mt-16">
      Waste Disposal
    </h3>
    <p class="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div class="card-home w-[30%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute -top-12 left-[50%] translate-x-[-50%]  bg-[#D6EA9B] rounded-[50%] p-2">
                <Image src={waste} alt="image" />
              </div>
  <div class="pt-4 px-4 md:px-5 md:pt-5 mt-5">
    <h3 class="text-3xl text-center font-bold text-leaf-medium mt-16">
      Waste Disposal
    </h3>
    <p class="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div class="card-home w-[30%]  relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute -top-12 left-[50%] translate-x-[-50%]  bg-[#D6EA9B] rounded-[50%] p-2">
                <Image src={waste} alt="image" />
              </div>
  <div class="pt-4 px-4 md:px-5 md:pt-5 mt-5">
    <h3 class="text-3xl text-center font-bold text-leaf-medium mt-16">
      Waste Disposal
    </h3>
    <p class="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div class="card-home w-[30%]  relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute -top-12 left-[50%] translate-x-[-50%]  bg-[#D6EA9B] rounded-[50%] p-2">
                <Image src={waste} alt="image" />
              </div>
  <div class="pt-4 px-4 md:px-5 md:pt-5 mt-5">
    <h3 class="text-3xl text-center font-bold text-leaf-medium mt-16">
      Waste Disposal
    </h3>
    <p class="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          </section>
        </div>
      </section>

      {/* Recycel section */}

      <section className="recycle-section py-38 ">
              
     <div className="grid md:grid-cols-2 w-[90%] mx-auto gap-8 space-x-8 py-32">
      <div>
        <h2 className="text-5xl text-white font-bold my-8">Where recycling meets shopping, find new life in pre-loved treasures</h2>
        <p>Welcome to our recycle items shop, where discarded gems find new purpose. Explore a curated collection of upcycled and repurposed items, transforming sustainability into style. Join us in the journey of giving new life to old treasures while making a positive impact on our planet.</p>
      <button className="px-5 py-2 text-white bg-leaf-dark my-12 rounded-md ">Visit Our Shop</button>
      </div>

      <div>
        <div className="relative">
         
      <div className="z-20">    <Image className="shadow-lg shadow-red" src={relady} alt="image" /></div>
        </div>
      </div>
     </div>
      </section>

      {/* How we work Section */}
      <section className="how-we-work-section py-24">

      <div className="container w-[90%] mx-auto my-16">
          <div className="title-part w-[60%] mx-auto px-2 ">
            <h2 className={`text-4xl text-white font-bold text-center ${inter.className} font-inter uppercase text-white`}>HOW WE WORK</h2>
            <p className="text-center text-white py-5">Promoting a cleaner world, one bin at a time – your partner in comprehensive waste <br></br> management and sustainable recycling solutions.</p>
          </div>

          {/* Cards */}
          <div className="flex flex-row flex-wrap gap-4 my-14 text-center justify-center space-x-4 ">
     
          <div className="card-home w-[22%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute top-0 right-0 bg-[#D6EA9B] rounded-tr-xl rounded-bl-xl text-leaf-dark font-bold p-4 text-xl">
                01
              </div>

              <div className="pt-4  md:pt-5 mt-16 text-center flex justify-center">
               <Image src={biohazard} alt="image" />
              </div>
  <div className=" px-4 md:px-5 ">
    <h3 className="text-3xl text-center font-bold text-leaf-medium my-2 ">
      Waste Disposal
    </h3>
    <p className="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div className="card-home w-[22%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute top-0 right-0 bg-[#D6EA9B] rounded-tr-xl rounded-bl-xl text-leaf-dark font-bold p-4 text-xl">
                01
              </div>

              <div className="pt-4  md:pt-5 mt-16 text-center flex justify-center">
               <Image src={biohazard} alt="image" />
              </div>
  <div className=" px-4 md:px-5 ">
    <h3 className="text-3xl text-center font-bold text-leaf-medium my-2 ">
      Waste Disposal
    </h3>
    <p className="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div className="card-home w-[22%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute top-0 right-0 bg-[#D6EA9B] rounded-tr-xl rounded-bl-xl text-leaf-dark font-bold p-4 text-xl">
                01
              </div>

              <div className="pt-4  md:pt-5 mt-16 text-center flex justify-center">
               <Image src={biohazard} alt="image" />
              </div>
  <div className=" px-4 md:px-5 ">
    <h3 className="text-3xl text-center font-bold text-leaf-medium my-2 ">
      Waste Disposal
    </h3>
    <p className="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          <div className="card-home w-[22%] relative flex flex-col my-12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="icon-box absolute top-0 right-0 bg-[#D6EA9B] rounded-tr-xl rounded-bl-xl text-leaf-dark font-bold p-4 text-xl">
                01
              </div>

              <div className="pt-4  md:pt-5 mt-16 text-center flex justify-center">
               <Image src={biohazard} alt="image" />
              </div>
  <div className=" px-4 md:px-5 ">
    <h3 className="text-3xl text-center font-bold text-leaf-medium my-2 ">
      Waste Disposal
    </h3>
    <p className="mt-1 text-center  mb-8">
    From unwanted to uncluttered, we make junk disappear. Embrace space and simplicity with our expert junk disposal service.
    </p>
    <div className="mt-5 text-center">
      <button className=" px-5 py-2 border-2 mb-8 border-leaf-medium font-bold  text-leaf-medium rounded-lg"> Get This Services </button>
    </div>

    <div className="flex justify-center mt-5">
      <Image src={cardbottom} alt="image" />
    </div>
  </div>
           </div>
          </div>
        </div>
          </section>
   
          {/* Contact Form */}

       <section className=" contact-section py-24  ">
       <div className="grid md:grid-cols-2 w-[90%] mx-auto gap-8 space-x-8">
      <div>
        <h2 className="text-5xl text-white font-bold my-8">Get in touch with us today and be a part of the sustainable revolution!</h2>
        <p>Stay connected with us! Whether you have questions, suggestions, or simply want to engage in sustainable discussions, we're here to hear from you. Join us in our commitment to a greener future! </p>
      <button className="px-5 py-2 text-white bg-leaf-dark my-12 rounded-md ">Visit Our Shop</button>
      </div>

      <div>
        <div className="relative">
         
      <div className="flex flex-col my-10"> 
      <div className="relative my-4 ">
                <input
                  name="name"
                  placeholder="Name"
                  className="peer w-full bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="text"
                />
                <label
                  className="input-label  transition-all transiton duration-300  bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
      <div className="relative my-4">
                <input
                  name="phone"
                  placeholder="+34587489596"
                  className="peer w-full bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="text"
                />
                <label
                  className="input-label  transition-all transiton duration-300  bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
              </div>
      <div className="relative my-4">
                <input
                  name="email"
                  placeholder="email@example.com"
                  className="peer w-full bg-transparent outline-1 border-[1px] rounded-lg py-2 px-5 "
                  type="email"
                />
                <label
                  className="input-label  transition-all transiton duration-300  bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
      <div className="relative my-4">
                <textarea
                  name="message"
                  placeholder="write your message here"
                  className="peer w-full bg-transparent outline-1 border-[1px] rounded-lg py-5 px-5 "
                  type="text"
                />
                <label
                  className="input-label  transition-all transiton duration-300  bg-[#161C20] absolute left-0 -top-3.5 px-2 ml-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
              </div>

              <button className="px-5 py-2 text-white bg-leaf-dark my-12 rounded-md w-24 mx-auto ">Send</button>

              
        </div>
      </div>
     </div>

     </div>

        </section>   

        {/* Footer Section */}

        <section className="footer bg-[#101518] py-8">
          <div className="w-[90%] mx-auto">
            <div className="flex justify-around">
              <div className="flex flex-col">
               <Image src={footerlogo} alt="image" />
               <div className="flex space-x-3 mt-4 bg-white p-[0.25rem_0.5rem_0.25rem_1rem]  rounded-[1.25rem]">
            <a href="">
              <Image src={facebook} alt="image" />
            </a>
            <a href="">
              <Image src={instagram} alt="image" />
            </a>
            <a href="">
              <Image src={twitter} alt="image" />
            </a>
            <a href="">
              <Image src={linkedin} alt="image" />
            </a>
            <a href="">
              <Image src={youtube} alt="image" />
            </a>
          </div>

                </div>

                <div className="flex flex-col">
                  <a className="text-leaf-medium" href="">Home</a>
                  <a className="text-leaf-medium" href="">Services</a>
                  <a className="text-leaf-medium" href="">About</a>
                  <a className="text-leaf-medium" href="">Contact</a>
                </div>
                <div className="flex flex-col">
                  <a className="text-leaf-medium" href="">Schedule</a>
                  <a className="text-leaf-medium" href="">Drop off locations</a>
                  <a className="text-leaf-medium" href="">Pay Bill</a>
                  <a className="text-leaf-medium" href="">Shop </a>
                </div>
                <div className="flex flex-col">
                  <a className="text-leaf-medium" href="">Privacy Policy</a>
                  <a className="text-leaf-medium" href="">Appointment</a>
                  <a className="text-leaf-medium" href="">Faq</a>
            
                </div>

            </div>
            <p className="text-white text-center">2023 JunkQuarterbacks. All rights Reserved.
</p>
          </div>
        </section>
    </>
  );
};

export default Home;
