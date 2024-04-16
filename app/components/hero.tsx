import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          Hello, I am{" "}
          <span className="dark:text-violet-600">YUGAM THUBRIKAR</span> Web
          Developer
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Self-motivated and hardworking fresher seeking for an opportunity to
          work in a challenging environment to prove my skills and utilize my
          knowledge & intelligence in the growth of the organization.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            target="BLANK()"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yugamthubrikar7620@gmail.com"
            className="px-8 py-3  bg-white text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Contact Me
          </Link>
          <Link
            href="#experience"
            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Image
          src="/hero.png"
          alt="Hero"
          width={400}
          height={600}
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
    </div>
  );
};

export default Hero;
