"use client";

import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].home1;
  return (
    <main className=" caret-transparent">
      <Headder />
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen text-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl dark:text-blue-200">
              {t.heroTitle}
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300">
              {t.heroDesc}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={"/contact-us"}
                className="px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
              >
                {t.hireNow}
              </Link>
              <Link
                href={"/services"}
                className="px-8 py-3 font-semibold text-blue-600 transition bg-white border border-blue-600 rounded-lg shadow hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-200 dark:border-blue-400"
              >
                {t.browseFreelancers}
              </Link>
            </div>
          </div>
        </section>

        {/* About Freelancing (Updated) */}
        <section className="px-4 py-16 mx-auto md:px-8 bg-blue-50 dark:bg-gray-900">
          <h2 className="mb-4 text-3xl font-semibold text-center">
            {t.whyFreelancing}
          </h2>
          <p className="mb-10 text-lg text-center text-gray-700 dark:text-gray-300">
            {t.whyDesc}
          </p>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">{t.flexible}</h3>
              <p>{t.flexibleDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">{t.cost}</h3>
              <p>{t.costDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">{t.global}</h3>
              <p>{t.globalDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold">{t.fast}</h3>
              <p>{t.fastDesc}</p>
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className="max-w-6xl px-4 py-16 mx-auto bg-white md:px-8 dark:bg-gray-800">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            {t.topServices}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.webDev}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.webDevDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.design}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.designDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.writing}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.writingDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.marketing}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.marketingDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.va}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.vaDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.video}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.videoDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.appDev}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.appDevDesc}
              </span>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-xl">
              {t.seo}
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.seoDesc}
              </span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 mx-auto md:px-8 bg-blue-50 dark:bg-gray-900">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            {t.howItWorks}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">{t.postJob}</h3>
              <p>{t.postJobDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">{t.receive}</h3>
              <p>{t.receiveDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">{t.hire}</h3>
              <p>{t.hireDesc}</p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 shadow bg-blue-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 text-lg font-bold text-white bg-blue-600 rounded-full">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">{t.done}</h3>
              <p>{t.doneDesc}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl px-4 py-16 mx-auto bg-white md:px-8 dark:bg-gray-800">
          <h2 className="mb-10 text-3xl font-semibold text-center">
            {t.testimonials}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <p className="mb-2 italic">{t.t1}</p>
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                {t.t1By}
              </span>
            </div>
            <div className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <p className="mb-2 italic">{t.t2}</p>
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                {t.t2By}
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center px-4 py-16 text-center md:px-8 bg-blue-50 dark:bg-gray-900 gap-2.5">
          <h2 className="mb-4 text-3xl font-semibold">{t.cta}</h2>
          <Link
            href={"/contact-us"}
            className="px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg hover:scale-105"
          >
            {t.join}
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
