import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Headder />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen text-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
            About Our Freelance Platform
          </h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">
            Empowering businesses and freelancers to connect, collaborate, and
            grow together in a modern digital world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-purple-700 dark:text-purple-300">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            To make high-quality talent accessible to everyone, everywhere. We
            believe in flexible work, creative freedom, and building lasting
            partnerships between clients and freelancers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                Trust & Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We foster open communication and honest feedback for every
                project.
              </p>
            </div>
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace new ideas and technologies to deliver the best
                results.
              </p>
            </div>
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe great things happen when talented people work
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            Meet Our Talent
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center shadow bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="mb-2 text-4xl">💻</div>
              <h3 className="mb-1 text-lg font-semibold">Web Developers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Front-end, back-end, and full-stack experts ready to build your
                vision.
              </p>
            </div>
            <div className="p-6 text-center shadow bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="mb-2 text-4xl">🎨</div>
              <h3 className="mb-1 text-lg font-semibold">Designers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                UI/UX, branding, and creative professionals for stunning
                visuals.
              </p>
            </div>
            <div className="p-6 text-center shadow bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="mb-2 text-4xl">🚀</div>
              <h3 className="mb-1 text-lg font-semibold">Marketers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                SEO, content, and digital marketing specialists to grow your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
