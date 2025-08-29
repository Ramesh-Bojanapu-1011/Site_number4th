"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

type Props = {};

const Service = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].services;
  return (
    <main className="caret-transparent">
      <Headder />
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-center">
        <div className="max-w-3xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
            {t.heroTitle}
          </h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300">
            {t.coreTitle}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {t.servicesList.map((service: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between p-6 text-center transition shadow-lg cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-40 mb-4 rounded-lg"
                />
                <h3 className="mb-2 text-xl font-bold text-indigo-700 dark:text-indigo-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {service.desc}
                </p>
                <a
                  href={service.link}
                  className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700"
                >
                  {t.getStarted}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.whyTitle}
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            {t.whyList.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            {t.processTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {t.processList.map((step: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl font-bold text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-200">
                  {idx + 1}
                </div>
                <h4 className="mb-1 font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.testimonialsTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {t.testimonials.map((testimonial: any, idx: number) => (
              <div
                key={idx}
                className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
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

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            {t.ctaTitle}
          </h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
            {t.ctaDesc}
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700"
          >
            {t.getStarted}
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Service;
