import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navbar and Hero*/}
        <div className="bg-hero">
          {/* Hero */}
          <div className="container">
            <div className="flex sm:justify-between sm:items-center py-4">
              <div className="">
                <img src={logo} />
              </div>
              <ul className=" hidden sm:flex">
                <li>Home Pages</li>
                <li>Blogs</li>
                <li>Pages</li>
                <li>Ecommerce</li>
                <li>RTL Version</li>
                <li>Theme docs</li>
              </ul>
              <div className="justify-end ">
                <button>Buy me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
