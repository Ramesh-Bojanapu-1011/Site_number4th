
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      {/* Footer */}
      <footer className="  text-blue-400 dark:text-blue-300 pt-20 pb-10 shadow-2xl border-t border-blue-900/30 backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 divide-y divide-blue-900/30 lg:divide-y-0 lg:divide-x">
            <div className="lg:col-span-2 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex items-center mb-6">
                <div className="rounded-lg flex items-center justify-center mr-3  dark:bg-gray-900 p-2    ">
                  <Image
                    src={"/logo1.png"}
                    alt={"Logo"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <p className="mb-6 max-w-md text-[#193cb8] dark:text-blue-300">
                Connecting businesses with top talent worldwide to get projects
                done efficiently and effectively.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "facebook", icon: <FaFacebookF />,afficial_link: "https://facebook.com" },
                  { name: "twitter", icon: <FaTwitter /> ,afficial_link: "https://twitter.com" },
                  { name: "instagram", icon: <FaInstagram />, afficial_link: "https://instagram.com" },
                  { name: "linkedin", icon: <FaLinkedinIn />, afficial_link: "https://linkedin.com" },
                ].map(({ name, icon,afficial_link }) => (
                  <a
                    key={name}
                    href={afficial_link}
                    className="w-10 h-10 rounded-full   dark:bg-gray-900 flex items-center justify-center hover:bg-blue-900/20 dark:hover:bg-blue-900/40 hover:text-blue-300 transition border border-blue-500/30 shadow-lg hover:shadow-blue-500/70 backdrop-blur-sm"
                  >
                    <span className="sr-only">{name}</span>
                    <span className="text-xl  text-[#193cb8]  dark:text-blue-300">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 lg:pt-0 lg:pl-8">
              <h4 className="font-extrabold text-[#193cb8] dark:text-blue-300 text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500 ">
                For Clients
              </h4>
              <ul className="space-y-3">
                {[
                  "How to Hire",
                  "Talent Marketplace",
                  "Project Catalog",
                  "Enterprise Solutions",
                  "Payment Protection",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                    className="hover:text-blue-300 transition text-[#193cb8] dark:text-blue-300     px-2 py-1      hover:shadow-blue-500/20"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 lg:pt-0 lg:pl-8">
              <h4 className="font-extrabold text-[#193cb8] dark:text-blue-300 text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500 ">
                For Freelancers
              </h4>
              <ul className="space-y-3">
                {[
                  "How to Find Work",
                  "Direct Contracts",
                  "Get Paid",
                  "Resources",
                  "Community",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                    className="hover:text-blue-300 transition text-[#193cb8] dark:text-blue-300     px-2 py-1      hover:shadow-blue-500/20"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 lg:pt-0 lg:pl-8">
              <h4 className="font-extrabold text-[#193cb8] dark:text-blue-300 text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500 ">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Leadership",
                  "Careers",
                  "Press",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                    className="hover:text-blue-300 transition text-[#193cb8] dark:text-blue-300     px-2 py-1      hover:shadow-blue-500/20"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-900/30 text-center text-blue-400 dark:text-blue-300">
            <p>
              &copy; {new Date().getFullYear()} FreelancerHub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
