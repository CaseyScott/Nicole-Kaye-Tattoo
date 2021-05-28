/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import flowers from '../assets/img/bgFlowers.jpg';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px gradient-color">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              {/* <h1 className="font-semibold text-4xl text-gray-700 text-align-center white-text welcome">Welcome</h1> */}
              <h2 className="font-semibold text-4xl text-gray-700 text-align-center white-text">
                Nicole Kaye Tattoo
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 text-align-center white-text">
                Hi, Im am Nicole Kaye, Tattooing from my peaceful home studio, here in Beautiful Motueka NZ,
                My focus and style is based around light delicate female tattoos.
                I am open to take on anything and love the freedom my clients trust in me.
                Send in your brief and lets get you inked.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 text-align-center white-text">Bookings by Email only</p>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px inlarge-image color"
          src={require("assets/img/pattern_react.png")}
          alt="..."
        />
      </section>
      <section className="py-20 bg-gray-700 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div
              class="bg_image"
              style={{
                backgroundImage: `url(${flowers})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5",
              }}
            >
              <div class="bg_text">
                <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal text-white center">
                    Images
                </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 white-text">
                    Facebook gallery{" "}
                    <a
                      href="https://www.facebook.com/nicolekayetattoo/photos/?ref=page_internal"
                      className="text-gray-400 here-btn white-text"
                      target="_blank"
                    >
                      Here
                </a>{" "}
                Custom Tattooing Motueka New Zealand
              </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500 white-text">
                    Email your Brief to 
              </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500 white-text center">nicolekayetattoo@hotmail.com</p>
                    <br>
                    </br>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div class="center mobile-btn-column">
                <a
                  href="https://www.facebook.com/nicolekayetattoo/"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg facebook mobile-btn"
                >
                  <i className="fab fa-facebook text-lg mr-1"></i>
                  <a>Facebook</a>
                </a>
                <a
                  href="https://www.instagram.com/nicolekayetattoo/?hl=en"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg instagram mobile-btn"
                >
                  <i className="fab fa-instagram text-lg mr-1"></i>
                  <a>Instagram</a>
                </a>
              </div>
            </div>
            <div className="">
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Making a booking by Email
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4 left-align">
                <p>1.</p>
                 To be considered for a space with Nicole, clients must fill in a brief description of what they are wanting
                The brief must be keep simple an easy to understand, long stories will be moved down the list.
                </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4 left-align">
                <p>2.</p>
                Inspirational images of work Nicole has done before to show what you have in mind.

                </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4 left-align">
                <p>3.</p>
                You must state what "style" you are wanting (A quick google of tattoo styles will help you find the correct terminology)

                </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4 left-align">
                <p>4.</p>
                Size and placement, please be as accurate as possible with the size, use measurements in CM or MM only ( Using terms like I am only wanting something small will result in your request been moved down the line)

                </p>

              <div className="sm:block flex flex-col mt-10">
                {/* <i className="fab fa-github text-lg mr-1"></i>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Facebook
                </a> */}

                <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4 left-align padding-top">
                  Pricing is set by each tattoo, there is no set price or hourly rate.
                  pricing can vary by the size, placement, color or black and grey, level of detail etc


              </p>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
