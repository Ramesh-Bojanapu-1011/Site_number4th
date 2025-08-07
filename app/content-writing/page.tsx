import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";

const services = [
  {
    title: "Blog & Article Writing",
    desc: "Engaging, SEO-optimized blog posts and articles tailored to your audience.",
  },
  {
    title: "Website Content",
    desc: "Clear, persuasive website copy that converts visitors into customers.",
  },
  {
    title: "Product Descriptions",
    desc: "Compelling product descriptions that boost sales and highlight features.",
  },
  {
    title: "Social Media Content",
    desc: "Creative posts and captions to grow your brand on all platforms.",
  },
  {
    title: "Technical Writing",
    desc: "Accurate, user-friendly documentation and manuals for your products.",
  },
  {
    title: "Editing & Proofreading",
    desc: "Polished, error-free content that maintains your brand’s voice.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    feedback:
      "The content writing service exceeded my expectations! My website traffic increased significantly.",
  },
  {
    name: "James L.",
    feedback:
      "Professional, timely, and creative. Highly recommend for any business needing quality content.",
  },
];

const ContentWriting = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="px-4 py-16 text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Professional Content Writing Services
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          Boost your brand with high-quality, SEO-friendly content crafted by
          expert writers. We help you engage, inform, and convert your audience.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          Our Content Writing Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
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
          Why Choose Our Content Writing?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">💡</span>
            <h4 className="mb-1 font-bold">Creative & Original</h4>
            <p>Every piece is unique and tailored to your brand’s voice.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">⚡</span>
            <h4 className="mb-1 font-bold">Fast Turnaround</h4>
            <p>Quick delivery without compromising on quality.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🔍</span>
            <h4 className="mb-1 font-bold">SEO Optimized</h4>
            <p>Content designed to rank higher and drive more traffic.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center">Our Process</h2>
        <ol className="relative max-w-2xl mx-auto border-l border-blue-400 dark:border-blue-600">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              1
            </span>
            <h4 className="font-bold">Consultation</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We discuss your goals, audience, and content needs.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Content Creation</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Our writers craft engaging, original content for your project.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Review & Delivery</h4>
            <p className="text-gray-600 dark:text-gray-300">
              You review the content and request any revisions before final
              delivery.
            </p>
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 md:px-8 bg-blue-50 dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          What Our Clients Say
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 bg-white border border-gray-100 shadow dark:bg-gray-900 rounded-xl dark:border-gray-700"
            >
              <p className="mb-4 italic">“{t.feedback}”</p>
              <div className="font-bold text-blue-700 dark:text-blue-400">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 text-center md:px-8">
        <h2 className="mb-4 text-3xl font-semibold">
          Ready to Elevate Your Content?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your project and get a free quote. Let’s
          create content that drives results!
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>
      <Footer />
    </main>
  );
};

export default ContentWriting;
