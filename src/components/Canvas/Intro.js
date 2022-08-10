import "./Intro.scss";
import emoji from "react-easy-emoji";

const Intro = () => {
  const isDark = true;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-12 p-5">
        <div className="flex justify-center">
          <img src="./SPD.png" className="object-contain h-84 w-48 p-5" />
        </div>
        <div className="col-span-2 p-6 ">
          <h1 className="dark-mode greeting-text text-white">
            {" Software for SPD-MRF Optimal Design"}
          </h1>

          <div className="flex md:order-2 m-5">
          <a href="./tabs" className="flex items-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
    // <div className="greet-main" id="greeting">
    //   <div className="greeting-main">
    //     <div className="greeting-image-div ">
    //       <img src="/SPD.png" className="object-contain h-60 w-48 p-5" />
    //     </div>
    //     <div className="greeting-text-div">
    //       <h1 className="dark-mode greeting-text text-white">
    //         {" Software for SPD-MRF Optimal Design"}
    //         <span className="wave-emoji">{emoji("👋")}</span>
    //       </h1>
    //       <p
    //         className={
    //           isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
    //         }
    //       ></p>
    //       <div className="button-greeting-div"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Intro;
