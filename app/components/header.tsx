import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-500 md:order-1">
            <h1 className={`font-serif text-4xl md:text-3xl`}>Yugam</h1>
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <Link href={"#home"}>
                <li className="md:px-4 lg:mx-4 md:py-2 text-indigo-500">
                  Home
                </li>
              </Link>
              <Link href={`#aboutme`}>
                <li className="md:px-4 lg:mx-4 md:py-2 hover:text-indigo-400">
                  About Me
                </li>
              </Link>
              <Link href={"#experience"}>
                <li className="md:px-4 lg:mx-4 md:py-2 hover:text-indigo-400">
                  Experience
                </li>
              </Link>
              <Link href={`#`}>
                <li className="md:px-4 lg:mx-4 md:py-2 hover:text-indigo-400">
                  Resume
                </li>
              </Link>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
