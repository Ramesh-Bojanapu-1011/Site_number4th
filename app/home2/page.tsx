"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

type Props = {};

const Home2 = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].home2;
  return (
    <main className="caret-transparent">
      <Headder />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden text-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
              {t.heroTitle}
            </h1>
            <p className="mb-6 text-lg md:text-xl dark:text-gray-200">
              {t.heroDesc}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-semibold text-indigo-700 transition-all duration-300 bg-white rounded-full shadow hover:bg-gray-100 dark:bg-gray-900 dark:text-indigo-300 dark:hover:bg-gray-800"
            >
              {t.letsTalk}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.whatIOffer}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white shadow cursor-pointer dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-2 text-4xl">{service.icon}</div>
                <h3 className="mb-1 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            {t.recentProjects}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden transition duration-300 shadow cursor-pointer group rounded-xl hover:scale-105 hover:shadow-lg dark:bg-gray-900"
              >
                <img
                  src={`/project/${item}.jpg`}
                  alt={t.project(item)}
                  className="object-cover w-full h-56 transition duration-300 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white bg-black bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-80">
                  <h3 className="text-lg font-semibold">{t.project(item)}</h3>
                  <p className="text-sm opacity-80">{t.projectDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid items-center max-w-5xl gap-10 px-6 mx-auto md:grid-cols-2">
          <img
            src="/about_home2.jpg"
            alt="Freelancer"
            className="object-cover w-full shadow-lg rounded-xl"
          />
          <div>
            <h2 className="mb-4 text-3xl font-bold text-purple-700 dark:text-purple-300">
              {t.who}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.whoDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            {t.happyClients}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {t.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white shadow cursor-pointer dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-200">
                  “{testimonial.quote}”
                </p>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                  {testimonial.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 text-center bg-white dark:bg-gray-900"
      >
        <div className="max-w-3xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.build}
          </h2>
          <p className="mb-10 text-lg text-gray-700 dark:text-gray-200">
            {t.buildDesc}
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700"
          >
            {t.contactMe}
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home2;
