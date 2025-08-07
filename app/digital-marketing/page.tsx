import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const services = [
  {
    title: "SEO Optimization",
    desc: "Improve your website’s visibility and ranking on search engines.",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your brand and engage your audience across all social platforms.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    desc: "Drive targeted traffic and maximize ROI with effective ad campaigns.",
  },
  {
    title: "Content Marketing",
    desc: "Attract and retain customers with valuable, relevant content.",
  },
  {
    title: "Email Marketing",
    desc: "Nurture leads and boost conversions with personalized email campaigns.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Track, measure, and optimize your digital marketing performance.",
  },
];

const testimonials = [
  {
    name: "Ravi T.",
    feedback:
      "Our online presence skyrocketed thanks to their digital marketing expertise!",
  },
  {
    name: "Emily W.",
    feedback:
      "Professional, creative, and results-driven. Highly recommend for any business!",
  },
];

const DigitalMarketing = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Digital Marketing Services to Grow Your Business
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            Reach your target audience, boost engagement, and drive sales with
            our comprehensive digital marketing solutions.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          Our Digital Marketing Services
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
          Why Choose Our Digital Marketing?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">📈</span>
            <h4 className="mb-1 font-bold">Proven Results</h4>
            <p>We deliver measurable growth and ROI for your business.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🎯</span>
            <h4 className="mb-1 font-bold">Targeted Strategies</h4>
            <p>Customized campaigns to reach your ideal customers.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🤝</span>
            <h4 className="mb-1 font-bold">Dedicated Support</h4>
            <p>Personalized service and ongoing optimization for success.</p>
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
            <h4 className="font-bold">Discovery & Strategy</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We learn about your business and craft a custom marketing plan.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Execution</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We launch and manage campaigns across all relevant channels.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Analysis & Optimization</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We monitor results and continuously optimize for better
              performance.
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
          Ready to Boost Your Digital Presence?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your digital marketing goals and get a
          free strategy session. Let’s grow your business together!
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

export default DigitalMarketing;
