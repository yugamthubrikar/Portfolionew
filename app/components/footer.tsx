import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-indigo-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-indigo-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-indigo-600">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link href={'https://www.linkedin.com/in/yugam-thubrikar-9ba0211a2/'} target="BLANK()">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <Image
                      src="/linkedin.svg"
                      width={45}
                      height={45}
                      alt="Linked In"
                    />
                  </button>
                </Link>
                <Link href={'https://www.instagram.com/yug_thubrikar/'} target="BLANK()">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <Image
                      src="/instagram.svg"
                      width={45}
                      height={45}
                      alt="Instagram"
                    />
                  </button>
                </Link>
                <Link href={'https://www.facebook.com/yugam.thubrikar/'} target="BLANK()">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <Image
                      src="/facebook.svg"
                      width={45}
                      height={45}
                      alt="Facebook"
                    />
                  </button>
                </Link>
                <Link href={'https://github.com/yugamthubrikar'} target="BLANK()">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <Image
                      src="/github.svg"
                      width={45}
                      height={45}
                      alt="Github"
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <Link href={`#home`}>
                      <li className="text-indigo-600 hover:text-indigo-800 font-semibold block pb-2 text-sm">
                        Home
                      </li>
                    </Link>

                    <Link href={`#aboutme`}>
                      <li className="text-indigo-600 hover:text-indigo-800 font-semibold block pb-2 text-sm">
                        About Me
                      </li>
                    </Link>

                    <Link href={`#experience`}>
                      <li className="text-indigo-600 hover:text-indigo-800 font-semibold block pb-2 text-sm">
                        Experience
                      </li>
                    </Link>

                    <Link href={`#`}>
                      <li className="text-indigo-600 hover:text-indigo-800 font-semibold block pb-2 text-sm">
                        Resume
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-indigo-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-indigo-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>{" "}
                <Link
                  href={`#home`}
                  className="text-indigo-500 hover:text-indigo-800"
                >
                  Yugam Thubrikar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
