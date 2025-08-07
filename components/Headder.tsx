"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggel";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";
 

// MobileMenuItem component for mobile navigation
type MobileMenuItemProps = {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  link: string; // Optional link prop for navigation
  toggle: () => void;
};

function MobileMenuItem({
  label,
  children,
  isOpen,
  link,
  toggle,
}: MobileMenuItemProps) {

  
  return (
    <div>
      <Link
        className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full hover:bg-blue-50"
        onClick={toggle}
        href={link}
      >
        {label}
        <span>{isOpen ? "▲" : "▼"}</span>
      </Link>
      {/* Render children only if the menu is open */}
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
}

type Props = {};

const Headder = (props: Props) => {
    const router = useRouter();
  // State for avatar dropdown
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false);
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userInitials, setUserInitials] = React.useState(""); // Default initials
  // State for mobile submenus
  const [mobileOpen, setMobileOpen] = React.useState<{
    home: boolean;
    services: boolean;
  }>({ home: false, services: false });

  React.useEffect(() => {
    // Runs only in the browser
    const userData = localStorage.getItem("users");
    // console.log("User Data:", userData); // Debugging line

    if (userData) {
      try {
        const user = JSON.parse(userData);
        console.log("Parsed User Data:", user); // Debugging line
        const firstInitial = user[0].firstName?.[0]?.toUpperCase() || "R";
        const lastInitial = user[0].lastName?.[0]?.toUpperCase() || "B";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);
  const handleLogout = () => {
    // Clear any local storage, cookies, or session data here
    localStorage.removeItem("users"); // example
    // Redirect to login page
    router.push("/login");
  };

   
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full min-w-0 bg-white shadow-md caret-transparent dark:bg-gray-900">
        <div className="flex items-center justify-between min-w-0 px-4 py-3">
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-3 rounded-lg">
              <Link href={"/"}>
                <Image src={"/logo1.png"} alt={""} width={200} height={200} />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex">
            {/* Home with submenu - styled like mobile */}
            <div className="relative group">
              <Link
                href={"/"}
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                Home
                <span className="ml-2">▼</span>
              </Link>
              <div className="absolute left-0 z-20 w-32 mt-2 transition-opacity bg-white rounded-lg shadow-lg opacity-0 dark:bg-gray-800 group-hover:opacity-100">
                <Link
                  href="/home1"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Home1
                </Link>
                <Link
                  href="/home2"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Home2
                </Link>
              </div>
            </div>
            {/* About */}
            <Link
              href="/about"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              About
            </Link>

            {/* Services with submenu - styled like mobile */}
            <div className="relative group">
              <Link
                href={"/services"}
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                Services
                <span className="ml-2 ">▼</span>
              </Link>
              <div className="absolute left-0 z-20 mt-2 transition-opacity bg-white rounded-lg shadow-lg opacity-0 text-nowrap dark:bg-gray-800 group-hover:opacity-100">
                <Link
                  href="/web-app-development"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Web & App Development
                </Link>
                <Link
                  href="/ui-ux-design"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  UI/UX & Graphic Design
                </Link>
                <Link
                  href="/content-writing"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Content Writing
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Digital Marketing & SEO
                </Link>
                <Link
                  href="/video-production"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Video Production & Animation
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full text-nowrap dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>

          {/* User Profiles */}
          <div
            className="relative items-center hidden space-x-4 md:flex"
            style={{ minWidth: "120px" }}
          >
            <ModeToggle />
            <button onClick={() => setIsAvatarOpen((prev) => !prev)}>
              <Avatar className="w-10 h-10">
                <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
              </Avatar>
            </button>
            {isAvatarOpen && (
              <div className="absolute right-0 z-30 w-32 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <button
                  className="block w-full px-4 py-2 font-medium text-left text-blue-800 rounded-lg dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Mobile Menu Content */}

              <div
                className="absolute top-0 left-0 flex flex-col w-64 h-full p-6 space-y-4 bg-white shadow-lg dark:bg-gray-900"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setIsAvatarOpen((prev) => !prev)}>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
                  </Avatar>
                </button>
                {isAvatarOpen && (
                  <div className="z-30 w-32 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <button
                      className="block w-full px-4 py-2 font-medium text-left text-blue-800 rounded-lg dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                       onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
                {/* Home with submenu */}
                <MobileMenuItem
                  label="Home"
                  link="/"
                  isOpen={mobileOpen.home}
                  toggle={() =>
                    setMobileOpen((prev) => ({ ...prev, home: !prev.home }))
                  }
                >
                  <Link
                    href="/home1"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home1
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home2
                  </Link>
                </MobileMenuItem>
                {/* About */}
                <Link
                  href="/about"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                {/* Services with submenu */}
                <MobileMenuItem
                  label="Services"
                  isOpen={mobileOpen.services}
                  link="/services"
                  toggle={() =>
                    setMobileOpen((prev) => ({
                      ...prev,
                      services: !prev.services,
                    }))
                  }
                >
                  <Link
                  href="/web-app-development"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Web & App Development
                </Link>
                <Link
                  href="/ui-ux-design"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  UI/UX & Graphic Design
                </Link>
                <Link
                  href="/content-writing"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Content Writing
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Digital Marketing & SEO
                </Link>
                <Link
                  href="/video-production"
                  className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                >
                  Video Production & Animation
                </Link>
                </MobileMenuItem>
                {/* Blog */}
                <Link
                  href="/blog"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Headder;
