"use client";
import React from "react";

import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Headder />
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen text-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl dark:text-blue-200">
              Find the Right Freelancer for Your Project
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300">
              Connect with top talent, get work done faster, and grow your
              business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={"/contact-us"}
                className="px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
              >
                Hire Now
              </Link>
              <Link
                href={"/services"}
                className="px-8 py-3 font-semibold text-blue-600 transition bg-white border border-blue-600 rounded-lg shadow hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-200 dark:border-blue-400"
              >
                Browse Freelancers
              </Link>
            </div>
          </div>
        </section>

        {/* About Freelancing (Updated) */}
        <section className="px-4 py-16 mx-auto md:px-8 bg-blue-50 dark:bg-gray-900">
          <h2 className="mb-4 text-3xl font-semibold text-center">
            Why Freelancing?
          </h2>
          <p className="mb-10 text-lg text-center text-gray-700 dark:text-gray-300">
            In today’s fast-paced digital world, agility is key. Freelancers
            offer on-demand expertise, flexible collaboration, and a global
            talent pool—without the long-term overhead.
          </p>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">Flexible Engagement</h3>
              <p>
                Scale teams up or down instantly to match your project needs.
              </p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">Cost-Efficient</h3>
              <p>
                Hire by project, not by payroll. Reduce overhead significantly.
              </p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">Global Talent</h3>
              <p>Access industry specialists across borders and time zones.</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">Fast Execution</h3>
              <p>
                Freelancers get things done quickly—without corporate delays.
              </p>
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className="max-w-6xl px-4 py-16 mx-auto bg-white md:px-8 dark:bg-gray-800">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            Top Services
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Web Development
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Build websites, web apps & responsive UIs.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Graphic Design
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Logos, branding, and creative visuals.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Content Writing
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                SEO blogs, product descriptions & more.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Digital Marketing
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Boost visibility with smart marketing.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Virtual Assistance
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Admin support, scheduling, research & more.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              Video Editing
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Reels, promos & professional edits.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              App Development
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Build mobile apps for iOS & Android.
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              SEO Optimization
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                Rank higher with on-page & technical SEO.
              </span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 mx-auto md:px-8 bg-blue-50 dark:bg-gray-900">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Post a Job</h3>
              <p>Describe your project and what you're looking for.</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Receive Proposals</h3>
              <p>Get matched with top freelancers who are ready to help.</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Hire the Right Freelancer
              </h3>
              <p>Choose the best fit and get started immediately.</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">Get Your Project Done</h3>
              <p>
                Track progress, communicate easily, and receive quality work.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl px-4 py-16 mx-auto bg-white md:px-8 dark:bg-gray-800">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <p className="mb-2 italic">
                "Great platform to find talented freelancers quickly!"
              </p>
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                - Rajesh, Startup Founder
              </span>
            </div>
            <div className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <p className="mb-2 italic">
                "Helped me land consistent projects as a developer."
              </p>
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                - Priya, Web Developer
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center px-4 py-16 text-center md:px-8 bg-blue-50 dark:bg-gray-900 gap-2.5">
          <h2 className="mb-4 text-3xl font-semibold">
            Start Your Freelance Journey Today
          </h2>
          <Link
            href={"/contact-us"}
            className="px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg hover:scale-105"
          >
            Join Now
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
