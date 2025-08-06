import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { link } from "fs";
import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <>
      <Headder />
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-center">
        <div className="max-w-3xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
            Our Freelance Services
          </h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">
            Explore a wide range of professional freelance services tailored to
            your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300">
            Our Core Services
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Web & App Development",
                link: "/web-app-development",
                desc: "Custom websites, web apps, and mobile solutions built with the latest technologies for performance and scalability.",
                img: "/images/service-dev.jpg",
              },
              {
                title: "UI/UX & Graphic Design",
                link: "/ui-ux-design",
                desc: "Modern, user-focused designs for web, mobile, and branding. Logos, banners, and complete visual identity packages.",
                img: "/images/service-design.jpg",
              },
              {
                title: "Content Writing",
                link: "/content-writing",
                desc: "SEO blogs, website copy, product descriptions, and creative content to engage your audience and boost your brand.",
                img: "/images/service-content.jpg",
              },
              {
                title: "Digital Marketing & SEO",
                link: "/digital-marketing",
                desc: "Grow your online presence with expert SEO, social media management, PPC, and email marketing strategies.",
                img: "/images/service-marketing.jpg",
              },
              {
                title: "Video Production & Animation",
                link: "/video-production",
                desc: "Promotional videos, explainer animations, and professional editing to tell your story and captivate your audience.",
                img: "/images/service-video.jpg",
              },
              {
                title: "Cloud & DevOps Services",
                link: "/devops-services",
                desc: "Scalable cloud infrastructure, CI/CD pipelines, and automation solutions to ensure smooth deployment and performance.",
                img: "/images/service-cloud.jpg",
              },
            ].map((service, idx) => (
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
                  Get Started
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
            Why Choose Us?
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                Verified Talent
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All freelancers are vetted for quality and reliability.
              </p>
            </div>
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                Flexible Engagement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Scale your team up or down as your project needs change.
              </p>
            </div>
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No hidden fees. Clear, upfront pricing for every service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl font-bold text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-200">
                1
              </div>
              <h4 className="mb-1 font-semibold">Post a Project</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Describe your needs and get matched with top freelancers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl font-bold text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-200">
                2
              </div>
              <h4 className="mb-1 font-semibold">Review Proposals</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Compare offers, portfolios, and reviews to choose the best fit.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl font-bold text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-200">
                3
              </div>
              <h4 className="mb-1 font-semibold">Collaborate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Work together, track progress, and communicate easily.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl font-bold text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-200">
                4
              </div>
              <h4 className="mb-1 font-semibold">Get Results</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Receive quality work and pay securely when satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            What Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-200">
                “Outstanding experience! The freelancer delivered exactly what I
                needed.”
              </p>
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                — Priya S., Business Owner
              </h4>
            </div>
            <div className="p-6 text-center transition bg-white shadow dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg">
              <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-200">
                “Fast, reliable, and creative. Highly recommend for any
                project.”
              </p>
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                — Rajesh K., Startup Founder
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
            Join our platform and connect with top freelance talent today.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
