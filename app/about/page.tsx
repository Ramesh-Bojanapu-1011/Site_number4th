"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

type Props = {};

const About = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].about;
  return (
    <main className="caret-transparent">
      <Headder />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen text-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
            {t.heroTitle}
          </h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.missionTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {t.missionDesc}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300">
            {t.valuesTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {t.values.map((value: any, idx: number) => (
              <div
                key={idx}
                className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            {t.teamTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {t.team.map((member: any, idx: number) => (
              <div
                key={idx}
                className="p-6 text-center shadow bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="mb-2 text-4xl">{member.icon}</div>
                <h3 className="mb-1 text-lg font-semibold">{member.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
