import logo from "./assets/logo.png";
import dash from "./assets/Minus.png";
import projects from "./assets/Projects.png";

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
      </div>
    </>
  );
}

export default App;
