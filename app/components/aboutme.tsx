import Image from "next/image";
import Link from "next/link";

const Aboutme = () => {
  return (
    <>
      <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className="flex justify-center px-5 mt-12">
          <Image
            className="h-32 w-32 bg-white p-2 rounded-full"
            src="/me.jpeg"
            alt="Me"
            width={400}
            height={400}
          />
        </div>
        <div className="py-4">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">
              Yugam Thubrikar
            </h2>
            <p className="text-gray-400 mt-2">
              mail me on{" "}
              <Link
                className="hover:text-blue-500"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yugamthubrikar7620@gmail.com"
                target="BLANK()"
              >
                yugamthubrikar7620@gmail.com
              </Link>
            </p>
            <hr className="my-3" />

            <div className="mt-2 text-gray-500 text-sm">
              <h3>
                <b>D.O.B.</b>
              </h3>
              <p>30 June 1996</p>
              <hr className="my-3" />
              <h3>
                <b>Languages</b>
              </h3>
              <p>English, Marathi, Hindi</p>
              <hr className="my-3" />
              <h3>
                <b>Education</b>
              </h3>
              <h4>
                <b>Bachelor Of Commerce</b>
              </h4>
              <p>Rashtrasant Tukdoji Maharaj Nagpur University, 2018</p>
              <hr className="my-3" />
              <h3>
                <b>Address</b>
              </h3>
              <p>Golibar Square, Nagpur. 440018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
