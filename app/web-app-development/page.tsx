"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

const WebAppDevelopment = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].webapp;
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100 caret-transparent">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.heroTitle}</h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            {t.heroDesc}
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
          >
            {t.getStarted}
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          {t.servicesTitle}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {t.servicesList.map((service: any, idx: number) => (
            <div
              key={service.title}
              className="p-6 transition duration-300 transform bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-2xl dark:border-gray-700"
            >
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 md:px-8 bg-blue-50 dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {t.whyTitle}
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          {t.whyList.map((item: any, idx: number) => (
            <div key={idx}>
              <span className="inline-block mb-2 text-4xl">{item.icon}</span>
              <h4 className="mb-1 font-bold">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {t.processTitle}
        </h2>
        <ol className="relative max-w-2xl mx-auto border-l border-blue-400 dark:border-blue-600">
          {t.processList.map((step: any, idx: number) => (
            <li
              key={idx}
              className={`ml-6${idx < t.processList.length - 1 ? " mb-10" : ""}`}
            >
              <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
                {idx + 1}
              </span>
              <h4 className="font-bold">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 md:px-8 bg-blue-50 dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {t.testimonialsTitle}
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          {t.testimonials.map((testi: any, idx: number) => (
            <div
              key={testi.name}
              className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-900 rounded-xl dark:border-gray-700"
            >
              <p className="mb-4 italic">“{testi.feedback}”</p>
              <div className="font-bold text-blue-700 dark:text-blue-400">
                {testi.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 text-center md:px-8">
        <h2 className="mb-4 text-3xl font-semibold">{t.ctaTitle}</h2>
        <p className="max-w-xl mx-auto mb-6">{t.ctaDesc}</p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          {t.contactUs}
        </a>
      </section>
      <Footer />
    </main>
  );
};

export default WebAppDevelopment;
