import TheHead from "@/components/Layouts/components/TheHead.js";
import Link from "next/link";

// icons
import { SiOpenproject } from "react-icons/si";
import { TbViewportWide } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { SiLaravel } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa"; 
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";


export default function Project() {
  return (
    <>
      <TheHead title="Projects | Sigit Eka Wahyudi" />
      <div className="flex justify-center py-20 px-10">
        <div className="w-screen">
          <section>
            <div className="space-y-1">
              <div className="flex text-dark dark:text-gray-300 items-center justify-center sm:justify-start space-x-1">
                <SiOpenproject className="text-3xl" />
                <h1 className="text-3xl">Projects</h1>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-start">All the projects that I have completed with several technologies</p>
            </div>

            <div className="b-line my-5"></div>

            <div className="container dark:bg-gradient-to-r px-1 dark:from-gray-900 dark:to-blue-500">
              <div className="container-box-project">

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <img className="rounded-t-lg" src="/images/project/project4.jpg" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Quick Files</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Website Quick Files build with ReactJS.</p>
                    <div className="md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <SiLaravel className="text-3xl text-red-700" />
                        <AiFillHtml5 className="text-3xl text-orange-500" />
                        <DiCss3 className="text-3xl text-blue-500" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}