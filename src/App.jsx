import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navbar and Hero*/}
        <div className="bg-hero">
          {/* Navbar */}
          <div className="container">
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
        </div>
      </div>
    </>
  );
}

export default App;
