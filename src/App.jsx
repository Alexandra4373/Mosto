import logo from "./assets/logo.png";
import dash from "./assets/Minus.png";
import projects from "./assets/Projects.png";
import stripe from "./assets/stripe.png";
import dribble from "./assets/dribble.png";
import arrow from "./assets/arrow.png";
import location from "./assets/location.png";
import design from "./assets/design.png";
import nurture from "./assets/nurture.png";
import archit from "./assets/archit.png";
import mike from "./assets/Mike.png";
import jones from "./assets/jones.png";
import tim from "./assets/Tem.png";
import social from "./assets/Social.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navbar and Hero*/}
        <div className="bg-hero ">
          {/* Navbar */}
          <div className="container ">
            <div className="flex justify-between items-center py-4">
              {/* logo */}
              <div className="">
                <img src={logo} />
              </div>
              <ul className=" text-white hidden sm:flex gap-5">
                <li>Home Pages</li>
                <li>Blogs</li>
                <li>Pages</li>
                <li>Ecommerce</li>
                <li>RTL Version</li>
                <li>Theme docs</li>
              </ul>

              {/* Contact button */}
              <div className="">
                <button>Buy me</button>
              </div>
            </div>
          </div>

          {/* Hero */}

          <div className="container py-20">
            <div className="sm:flex sm:text-center sm:justify-center sm:items-center sm:flex-col text-white ">
              <p className="text-[0.75rem] ">WE CREATE DIGITAL PRODUCTS</p>
              <p className="text-[3.25rem]">
                Introduce Our Creative
                <br />
                Agency
              </p>
              <button className="text-[0.875rem] mt-10">SEE OUR WORK</button>
            </div>
          </div>
        </div>

        {/* Welcome */}
        <div className="container py-10">
          <div className="sm:flex sm:text-center sm:justify-center sm:items-center sm:flex-col flex text-start flex-col items-center">
            <p className="text-[2rem] text-blue">
              Welcome to the Inertia Agency
            </p>
            <img src={dash} />
            <p className="text-[1rem]">
              Inertia was founded to help developers and designers with their
              projects by <br /> offering great quality products. By developing
              a nicely designed, easy to customize <br /> theme, we strive to
              offer a good variety of options to anyone without spending a lot{" "}
              <br /> of time and money.
            </p>
          </div>
        </div>

        {/* featured products */}
        <div className="bg-light">
          <div className="container py-10 ">
            <div className="sm:flex sm:text-center sm:justify-center sm:items-center sm:flex-col flex  flex-col items-center">
              <p className="text-[2rem] text-blue">Featured Projects</p>
              <img src={dash} />
              <img src={projects} />
            </div>
          </div>
        </div>

        <div className="container py-10">
          <div className="flex flex-col gap-10 sm:flex-row justify-center items-center">
            <div className="">
              <div className="flex justify-center items-center">
                <img src={stripe} />
              </div>
              <p className="mt-5 text-[1.2rem]">
                "Focus on creating and growing your projects and websites, and
                we‘ll always take care of spinning up new designs for your users
                and making sure they look great"
              </p>
              <p className="text-blue text-[1rem] mt-5">Roger Waters</p>
              <p className="text-secondary text-[1rem]">Head of Design</p>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <img src={dribble} />
              </div>
              <p className="mt-5 text-[1.2rem]">
                "The work that Inertia has done for our mobile app designs far
                exceeded our expectations, can't wait to work with them once
                again!"
              </p>
              <p className="text-blue text-[1rem] mt-5">David Gilmour</p>
              <p className="text-secondary text-[1rem]">Co-Founder</p>
            </div>
          </div>
        </div>

        <div className="bg-light">
          <div className="container py-10">
            <p className="text-[2rem] text-blue font-poppins">
              Careers at Inertia
            </p>
            <img src={dash} />
            <p className="text-[1rem] ">
              Join us in our quest to bring the best experiences through
              <br /> design and technology to the world, our most important{" "}
              <br />
              vision is to have the best work culture possible.
            </p>
            <div className="sm:flex gap-10">
              <div className="sm:flex-1">
                <p className="text-[1.2rem] text-blue mt-5">Dublin</p>
                <ul className="text-[1rem]">
                  <li>Head of Marketing</li>
                  <li>UX Designer</li>
                  <li>Senior Programmer</li>
                  <li>Mobile UI Designer</li>
                  <li>Lead Product Designer</li>
                </ul>
              </div>
              <div className="sm:flex-1 ">
                <p className="text-[1.2rem] text-blue mt-5">Amsterdam</p>
                <ul>
                  <li>Head of Operations</li>
                  <li>Mobile Engineer</li>
                  <li>Animation Designer</li>
                </ul>
              </div>
              <div className="sm:flex-1">
                <div className="flex items-center">
                  <p className="text-[1.2rem] text-blue mt-5">Mexico City</p>
                  <img src={location} />
                </div>
                <ul>
                  <li>Head of Motion Design</li>
                  <li>Graphics Engineer</li>
                  <li>Senior UI Designer</li>
                  <li>Backend Engineer</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <button className="mt-5">Careers at Inertia</button>
              <img src={arrow} />
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="container">
          <div className="">
            <p className="text-[2rem] text-blue font-poppins">From the Blog</p>
            <img src={dash} />
          </div>

          <div className="py-10">
            {/* Blog01 */}
            <div className="sm:flex gap-10">
              <div className="sm:flex-1 mt-5">
                <div className="">
                  <img src={design} />
                </div>
                <div className="">
                  <p className="text-[1.25rem] font-spartan text-blue  font-semibold">
                    Make your team a Design driven
                    <br /> company
                  </p>
                  <p className="text-[0.875rem] font-spartan font-medium text-secondary">
                    Contrary to popular belief, Lorem Ipsum is not
                    <br /> simply random text. It has roots in a piece of <br />
                    classical Latin literature from 45 BC, making it <br />
                    over 2000 years old.
                  </p>
                </div>
                <div className="flex  items-center mt-5 ">
                  <img src={mike} />
                  <p className="text-[0.95rem] font-spartan font-medium text-center ml-2">
                    BY MIKE DAMON
                  </p>
                </div>
              </div>
              {/* Blog02 */}
              <div className="sm:flex-1 mt-5">
                <img src={nurture} />
                <p className="text-[1.25rem] font-spartan font-semibold text-blue">
                  How to nurture a calm and <br /> organized work culture
                </p>
                <p className="text-[0.875rem] font-spartan font-medium text-secondary">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <div className="flex items-center mt-5">
                  <img src={tim} />
                  <p className="text-[0.95rem] font-spartan font-medium text-center ml-2">
                    BY TIM NORTON
                  </p>
                </div>
              </div>

              {/* blog03 */}
              <div className="sm:flex-1 mt-5">
                <img src={archit} />
                <p className="text-[1.25rem] font-spartan font-semibold text-blue">
                  How can the architecture <br /> influence our mood
                </p>
                <p className="text-[1rem] font-spartan font-medium text-secondary">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33.
                </p>
                <div className="flex  items-center mt-5 ">
                  <img src={jones} />
                  <p className="text-[0.95rem] font-spartan font-medium text-center ml-2">
                    BY JESSICA JONES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container">
          <div className="">
            <div className="bg-footer p-20 text-white">
              <p>Want to hire us?</p>
              <p>
                Have an idea for an awesome project? We'd love to help make it
                real.
              </p>
              <button>Get in touch</button>
            </div>
            <div className="bg-black text-white flex gap-10 justify-center items-center flex-col">
              <div className="py-20">
                <div className="sm:flex gap-10">
                  <div className="flex justify-center flex-col items-center sm:flex-1">
                    <p>COMPANY</p>
                    <ul className="mt-5">
                      <li>Portfolio</li>
                      <li>Our Clients</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                  <div className="flex justify-center flex-col items-center sm:flex">
                    <p>OFFICES</p>
                    <ul className="mt-5">
                      <li>345 Main St. San Francisca.CA</li>
                      <li>103 N. 13th Street. Seatie.WA</li>
                    </ul>
                  </div>
                  <div className="flex justify-center flex-col items-center sm:flex-1">
                    <p>CONTACT</p>
                    <ul className="mt-5">
                      <li>+81 555 489 902</li>
                      <li>info@themes.com</li>
                    </ul>
                  </div>
                  <div className="flex justify-center flex-col items-center sm:flex-1">
                    <p>ABOUT</p>
                    <ul className="mt-5">
                      <li>Log in to your account</li>
                      <li>Support</li>
                    </ul>
                  </div>
                </div>
                <div className="py-10">
                  <img src={social} />
                </div>
                <p className="text-center">All rights reserved. 2020.</p>
                <div className="">
                  <ul className="sm:flex sm:gap-10 sm:justify-center sm:items-center flex flex-col justify-center items-center">
                    <li>Privacy & terms</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
