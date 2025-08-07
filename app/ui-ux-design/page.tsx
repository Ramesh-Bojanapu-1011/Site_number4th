import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const services = [
  {
    title: "User Research & Analysis",
    desc: "Understand your users’ needs and behaviors to inform design decisions.",
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Visualize ideas quickly with interactive wireframes and prototypes.",
  },
  {
    title: "UI Design",
    desc: "Create visually stunning and brand-consistent user interfaces.",
  },
  {
    title: "UX Design",
    desc: "Design seamless, intuitive experiences that delight users.",
  },
  {
    title: "Usability Testing",
    desc: "Validate designs with real users and optimize for best results.",
  },
  {
    title: "Design Systems",
    desc: "Develop scalable design systems for consistent product experiences.",
  },
];

const testimonials = [
  {
    name: "Amit P.",
    feedback:
      "Our app’s usability and look improved dramatically. The design team is creative and detail-oriented!",
  },
  {
    name: "Lisa M.",
    feedback:
      "Professional, modern, and user-focused. Highly recommend for any UI/UX project!",
  },
];

const UiUxDesign = () => {
  return (
    <main className="text-gray-900 bg-white caret-transparent dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            UI/UX Design Services for Exceptional Digital Experiences
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            Elevate your product with user-centered design, beautiful
            interfaces, and seamless experiences that drive engagement.
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
          Our UI/UX Design Services
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
          Why Choose Our UI/UX Design?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">🎨</span>
            <h4 className="mb-1 font-bold">Creative & Modern</h4>
            <p>Fresh, innovative designs tailored to your brand and users.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🧑‍💻</span>
            <h4 className="mb-1 font-bold">User-Centered</h4>
            <p>Every decision is based on real user needs and feedback.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">⚡</span>
            <h4 className="mb-1 font-bold">Fast & Reliable</h4>
            <p>
              Quick delivery and ongoing support for your project’s success.
            </p>
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
            <h4 className="font-bold">Discovery & Research</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We analyze your goals, users, and competition to inform design.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Design & Prototype</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We create wireframes, prototypes, and high-fidelity UI designs.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Testing & Delivery</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Usability testing, feedback, and final delivery of design assets.
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
          Ready to Transform Your Product’s Experience?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your UI/UX design needs and get a free
          consultation. Let’s create something amazing together!
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

export default UiUxDesign;
