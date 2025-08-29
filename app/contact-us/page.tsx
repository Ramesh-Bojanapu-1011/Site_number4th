"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

type Props = {};

const ContactUs = (props: Props) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong.");
    }
  };

  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].contact;
  return (
    <>
      <Headder />
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-center caret-transparent">
        <div className="max-w-2xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
            {t.heroTitle}
          </h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Left side replaced with image */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
          {/* Left Side: Image */}
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={"/conatct-us.jpg"}
              alt="Contact Us"
              className="object-cover w-[356px] h-[356px] max-w-xs shadow-lg rounded-xl dark:bg-gray-800"
            />
          </div>
          {/* Right Side: Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-center text-purple-700 dark:text-purple-300">
              {t.formTitle}
            </h2>
            <form
              className="space-y-6"
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovlekvg"
              method="POST"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder={t.name}
                  name="name"
                  className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <input
                  type="email"
                  placeholder={t.email}
                  name="email"
                  className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <input
                type="text"
                placeholder={t.subject}
                name="subject"
                className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                placeholder={t.message}
                rows={5}
                name="message"
                className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
              >
                {t.send}
              </button>
            </form>
            {success && (
              <p
                id="successMessage"
                style={{ color: "green", marginTop: "10px" }}
              >
                {t.success}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 caret-transparent">
        <div className="max-w-3xl px-6 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-center text-purple-700 dark:text-purple-300">
            {t.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.faq.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow dark:bg-gray-900"
              >
                <h4 className="mb-1 font-semibold">{item.q}</h4>
                <p className="text-gray-700 dark:text-gray-200">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Map/Location Section */}
      <section className="py-12 text-center bg-white dark:bg-gray-900">
        <div className="mx-auto ">
          <h2 className="mb-6 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
            {t.locationTitle}
          </h2>
          <div className="w-full overflow-hidden rounded-lg shadow h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1620211234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
