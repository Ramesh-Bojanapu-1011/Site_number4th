"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggel";
import LanguageSelector from "./LanguageSelector";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

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
      <div
        className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full hover:bg-blue-50"
        onClick={toggle}
        // href={link}
      >
        {label}
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {/* Render children only if the menu is open */}
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
}

type Props = {};

const Headder = (props: Props) => {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].header;
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

  // State for desktop dropdowns (mutually exclusive)
  const [desktopDropdown, setDesktopDropdown] = React.useState<{
    home: boolean;
    services: boolean;
  }>({ home: false, services: false });

  // Ref for nav to detect outside clicks
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDesktopDropdown({ home: false, services: false });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <nav
        className="sticky top-0 z-50 w-full min-w-0 bg-white shadow-md caret-transparent dark:bg-gray-900"
        ref={navRef}
      >
        <div className="flex items-center justify-between min-w-0 px-4 py-3 text-nowrap">
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-3 rounded-lg">
              <Link href={"/home1"}>
                <Image src={"/logo1.png"} alt={""} width={200} height={200} />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex">
            {/* Home with submenu - open on click only */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={() =>
                  setDesktopDropdown((prev) => ({
                    home: !prev.home,
                    services: false, // close services if opening home
                  }))
                }
              >
                {t.home}
                <span className="ml-2">▼</span>
              </button>
              {desktopDropdown.home && (
                <div className="absolute left-0 z-20 flex flex-col w-32 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <Link
                    href="/home1"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.home1}
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.home2}
                  </Link>
                </div>
              )}
            </div>
            {/* About */}
            <Link
              href="/about"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {t.about}
            </Link>

            {/* Services with submenu - open on click only */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={() =>
                  setDesktopDropdown((prev) => ({
                    home: false, // close home if opening services
                    services: !prev.services,
                  }))
                }
              >
                {t.services}
                <span className="ml-2">▼</span>
              </button>
              {desktopDropdown.services && (
                <div className="absolute left-0 z-20 mt-2 bg-white rounded-lg shadow-lg text-nowrap dark:bg-gray-800">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.allServices}
                  </Link>

                  <Link
                    href="/web-app-development"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.webAppDevelopment}
                  </Link>
                  <Link
                    href="/ui-ux-design"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.uiuxDesign}
                  </Link>
                  <Link
                    href="/content-writing"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.contentWriting}
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.digitalMarketing}
                  </Link>
                  <Link
                    href="/video-production"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.videoProduction}
                  </Link>
                  <Link
                    href="/cloud-devops-services"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.cloudDevops}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {t.blog}
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center w-full px-4 py-2 font-medium text-left text-blue-800 transition rounded-full text-nowrap dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {t.contactUs}
            </Link>
          </div>

          {/* User Profiles */}
          <div
            className="relative items-center hidden space-x-4 md:flex"
            style={{ minWidth: "120px" }}
          >
            <div className="mr-4">
              <LanguageSelector />
            </div>
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
              <div
                className="absolute top-0 left-0 flex flex-col w-64 h-full p-6 space-y-4 bg-white shadow-lg dark:bg-gray-900"
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
                onBlur={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setIsAvatarOpen((prev) => !prev)}>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
                    </Avatar>
                  </button>
                  {/* Mobile Menu Content */}
                  <div className="mb-4">
                    <LanguageSelector />
                  </div>
                </div>
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
                  label={t.home}
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
                    {t.home1}
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.home2}
                  </Link>
                </MobileMenuItem>
                {/* About */}
                <Link
                  href="/about"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.about}
                </Link>
                {/* Services with submenu */}
                <MobileMenuItem
                  label={t.services}
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
                    {t.webAppDevelopment}
                  </Link>
                  <Link
                    href="/ui-ux-design"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.uiuxDesign}
                  </Link>
                  <Link
                    href="/content-writing"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.contentWriting}
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.digitalMarketing}
                  </Link>
                  <Link
                    href="/video-production"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.videoProduction}
                  </Link>
                  <Link
                    href="/video-production"
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-200"
                  >
                    {t.videoProduction}
                  </Link>
                </MobileMenuItem>
                {/* Blog */}
                <Link
                  href="/blog"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.blog}
                </Link>
                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 font-medium text-blue-800 transition rounded-full dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.contactUs}
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
