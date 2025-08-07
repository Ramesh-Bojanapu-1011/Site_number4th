import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const services = [
  {
    title: "Custom Web Applications",
    desc: "Tailored web solutions to fit your unique business needs and goals.",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    desc: "Fast, reliable, and engaging apps that work seamlessly across devices.",
  },
  {
    title: "E-commerce Platforms",
    desc: "Robust online stores with secure payments and scalable architecture.",
  },
  {
    title: "API Development & Integration",
    desc: "Powerful APIs to connect your web app with third-party services.",
  },
  {
    title: "UI/UX Design",
    desc: "Modern, user-friendly interfaces for a seamless user experience.",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing updates, monitoring, and support for your web applications.",
  },
];

const testimonials = [
  {
    name: "Sandeep R.",
    feedback:
      "Our custom web app was delivered on time and exceeded our expectations!",
  },
  {
    name: "Priya D.",
    feedback:
      "Professional, responsive, and highly skilled team. Highly recommended!",
  },
];

const WebAppDevelopment = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="px-4 py-16 text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Web App Development Services for Modern Businesses
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          Build scalable, secure, and high-performance web applications tailored
          to your business needs.
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
          Our Web App Development Services
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
          Why Choose Our Web App Development?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">💻</span>
            <h4 className="mb-1 font-bold">Cutting-Edge Tech</h4>
            <p>We use the latest frameworks and tools for top performance.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🔒</span>
            <h4 className="mb-1 font-bold">Security First</h4>
            <p>Best practices to keep your data and users safe at all times.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">⚡</span>
            <h4 className="mb-1 font-bold">Fast Delivery</h4>
            <p>Agile processes for rapid development and quick launches.</p>
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
            <h4 className="font-bold">Discovery & Planning</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We analyze your requirements and design a custom solution.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Development</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Our team builds your web app using best-in-class technologies.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Testing & Launch</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We rigorously test and deploy your app for a flawless launch.
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
          Ready to Build Your Next Web App?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your project and get a free consultation.
          Let’s turn your ideas into reality!
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

export default WebAppDevelopment;
