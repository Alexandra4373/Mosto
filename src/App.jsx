import logo from "./assets/logo.png";
import dash from "./assets/Minus.png";
import projects from "./assets/Projects.png";
import stripe from "./assets/stripe.png";
import dribble from "./assets/dribble.png";

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
              <ul className=" hidden sm:flex gap-5">
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
        <div className="container py-10">
          <div className="sm:flex sm:text-center sm:justify-center sm:items-center sm:flex-col flex  flex-col items-center">
            <p className="text-[2rem] text-blue">Featured Projects</p>
            <img src={dash} />
            <img src={projects} />
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

        <div className="container py-10">
          <div className="">
            <p>Careers at Inertia</p>
            <img src={dash} />
            <p>
              Join us in our quest to bring the best experiences through design
              and technology to the world, our most important vision is to have
              the best work culture possible.
            </p>
            <button>Careers at Inertia</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
