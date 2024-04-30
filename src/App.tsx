
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./@/components/ui/Resume";
import Contact from "./@/components/ui/Contact";
import Footer from "./@/components/ui/Footer";
import Introduce from "./@/components/ui/Introduce";
import Projects from "./@/components/ui/Projects";



import { PiLinkedinLogoFill } from "react-icons/pi";
import { IconBrandGithub, IconBrandInstagram } from '@irsyadadl/paranoid'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projectsDetails = [
    {
      heading: "Gopotek",
      subHeading: "Platform website manajemen apotek",
      description:
        "Platform website manajemen apotek sederhana yang dibuat untuk memudahkan pengguna memantau stok dan penjualan produk",
      projectPreview: "/project/ss-gopotek.png",
      isAvailableOnGithub: true,
      githubLink: "https://github.com/muhammadsaefulr/ApotekNextJS"
    },
    {
      heading: "Saksiummat",
      subHeading: "Platform Website Manajemen Data",
      description: "Platform Website yang digunakan untuk melihat data saksi partai ummat",
      projectPreview: "/project/ss-saksiummat.png",
      isAvailableOnGithub: false,
      githubLink: ""
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-cube-strip bg-repeat absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style={{ maskImage: "linear-gradient(black, transparent)" }} />
        <header className="relative z-10">
          <nav className={`py-4 px-8 fixed top-0 left-0 w-full p-4 transition duration-300 ${isScrolled ? "bg-opacity-75 backdrop-blur-lg" : "bg-transparent"}`}>
            <div className="flex justify-end">
              <div className="flex justify-around space-x-3">
                <div className="">
                  <div className="flex relative w-16 h-8 items-center dark:bg-gray-800 bg-teal-900 cursor-pointer transition duration-300 delay-100 ease-in rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
                    <MoonStarIcon className="text-white" size={18} />
                    <div className="absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? { left: "2px" } : { right: "2px" }}></div>
                    <SunIcon className="ml-auto text-yellow-500" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="lg:py-10 xl:py-1" />
        <main className="flex-1">
          <section className="w-full min-h-screen flex items-center justify-center">
            <div className="relative container flex justify-around lg:mx-8 xl:mx-2">
              <div className="container px-0 md:px-4">
                <div className="space-y-3">
                  <div data-aos="fade-right" className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Hi Everyone, My Name</div>
                  <h1 data-aos="fade-right" className="text-4xl font-bold tracking-tighter sm:text-3xl text-gray-600 dark:text-white md:text-6xl/none">Muhamad Huda</h1>
                  <div data-aos="fade-right" className="lg:w-1/2 sm:w-full">
                    <p className="text-gray-500 md:text-xl dark:text-gray-400 w-15">
                      I'm{" "}
                      <a href="#" className="font-bold text-maincolor">
                        Fullstack Web Developer
                      </a>{" "}
                      who likes clean code architecture, I love creating simple
                      and easy-to-use interfaces and I never give up on
                      learning.
                    </p>
                  </div>
                  <div data-aos="fade-up" className="w-full flex items-start gap-2 mt-16">
                    <a href="https://instagram.com/hudahahhaa" target="_blank" rel="noopener noreferrer">
                      <IconBrandInstagram className="text-gray-400 hover:text-emerald-400 transition-all duration-300" />
                    </a>
                    <a href="https://github.com/raiden-id" target="_blank" rel="noopener noreferrer">
                      <IconBrandGithub className="text-gray-400 hover:text-emerald-400 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
         <Introduce />
         <Projects />
         <Resume />
         <Contact />
         <Footer />
         
        </main>
      </div>

    </>
  );
}

export default App;
