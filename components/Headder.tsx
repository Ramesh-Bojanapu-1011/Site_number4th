"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggel";
import { Avatar, AvatarFallback } from "./ui/avatar";

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
        className="w-full text-left px-4 py-2 rounded-full text-blue-800 font-medium hover:bg-blue-50 transition flex justify-between items-center"
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
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const user = JSON.parse(userData);
        const firstInitial = user.firstName?.[0]?.toUpperCase() || "R";
        const lastInitial = user.lastName?.[0]?.toUpperCase() || "B";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  console.log("User Initials:", userInitials); // Output: JD

  return (
    <>
      {/* Navigation */}
      <nav className="fixed caret-transparent w-full min-w-0 bg-white dark:bg-gray-900 shadow-md z-10">
        <div className="px-4 py-3 flex justify-between items-center min-w-0">
          <div className="flex items-center">
            <div className="rounded-lg flex items-center justify-center mr-3">
              <Link href={"/"}>
                <Image src={"/logo1.png"} alt={""} width={200} height={200} />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Home with submenu - styled like mobile */}
            <div className="relative group">
              <Link
                href={"/"}
                className="w-full text-left px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition flex justify-between items-center"
              >
                Home
                <span className="ml-2">▼</span>
              </Link>
              <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Link
                  href="/home1"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                >
                  Home1
                </Link>
                <Link
                  href="/home2"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                >
                  Home2
                </Link>
              </div>
            </div>
            {/* About */}
            <Link
              href="/about"
              className="w-full text-left px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center"
            >
              About
            </Link>

            {/* Services with submenu - styled like mobile */}
            <div className="relative group">
              <Link
                href={"/services"}
                className="w-full text-left px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition flex justify-between items-center"
              >
                Services
                <span className="ml-2 ">▼</span>
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Link
                  href="/service1"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                >
                  Service1
                </Link>
                <Link
                  href="/service2"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                >
                  Service2
                </Link>
                <Link
                  href="/service3"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                >
                  Service3
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="w-full text-left px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="w-full text-nowrap text-left px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center"
            >
              Contact Us
            </Link>
          </div>

          {/* User Profiles */}
          <div
            className="hidden md:flex items-center space-x-4 relative"
            style={{ minWidth: "120px" }}
          >
            <ModeToggle />
            <button onClick={() => setIsAvatarOpen((prev) => !prev)}>
              <Avatar className="w-10 h-10">
                <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
              </Avatar>
            </button>
            {isAvatarOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-30">
                <button
                  className="block w-full px-4 py-2 text-left text-blue-800 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700 font-medium rounded-lg"
                  onClick={() => {
                    // Clear user and reload page
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Mobile Menu Content */}

              <div
                className="bg-white dark:bg-gray-900 w-64 h-full shadow-lg p-6 flex flex-col space-y-4 absolute left-0 top-0"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setIsAvatarOpen((prev) => !prev)}>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
                  </Avatar>
                </button>
                {isAvatarOpen && (
                  <div className="mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-30">
                    <button
                      className="block w-full px-4 py-2 text-left text-blue-800 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700 font-medium rounded-lg"
                      onClick={() => {
                        // Clear user and reload page
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
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
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home1
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home2
                  </Link>
                </MobileMenuItem>
                {/* About */}
                <Link
                  href="/about"
                  className="block px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
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
                    href="/service1"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Service1
                  </Link>
                  <Link
                    href="/service2"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Service2
                  </Link>
                  <Link
                    href="/service3"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Service3
                  </Link>
                </MobileMenuItem>
                {/* Blog */}
                <Link
                  href="/blog"
                  className="block px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 rounded-full text-blue-800 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
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
