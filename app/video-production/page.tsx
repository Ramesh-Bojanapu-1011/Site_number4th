import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
// ...existing code...

const services = [
  {
    title: "Corporate Videos",
    desc: "Professional videos to showcase your brand, products, or services.",
  },
  {
    title: "Promotional Videos",
    desc: "Engaging promos to boost your marketing campaigns and reach wider audiences.",
  },
  {
    title: "Event Coverage",
    desc: "Capture the highlights of your events with high-quality video production.",
  },
  {
    title: "Explainer Videos",
    desc: "Simplify complex ideas with clear, animated explainer videos.",
  },
  {
    title: "Social Media Videos",
    desc: "Short, impactful videos designed for maximum engagement on social platforms.",
  },
  {
    title: "Editing & Post-Production",
    desc: "Polished editing, color grading, and sound design for a professional finish.",
  },
];

const testimonials = [
  {
    name: "Amit P.",
    feedback:
      "The video team brought our vision to life! The final product was stunning and effective.",
  },
  {
    name: "Lisa M.",
    feedback:
      "Creative, reliable, and fast. Our event video was a huge hit with our audience!",
  },
];

const VideoProduction = () => {
  return (
    <main className="text-gray-900 bg-white caret-transparent dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional Video Production Services
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            Captivate your audience and elevate your brand with high-quality,
            creative video solutions tailored to your needs.
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
          Our Video Production Services
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
          Why Choose Our Video Production?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">🎬</span>
            <h4 className="mb-1 font-bold">Creative Storytelling</h4>
            <p>
              We turn your ideas into compelling visual stories that connect.
            </p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">⚡</span>
            <h4 className="mb-1 font-bold">Fast Turnaround</h4>
            <p>Timely delivery without sacrificing quality or creativity.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🎥</span>
            <h4 className="mb-1 font-bold">Full-Service Team</h4>
            <p>
              From concept to final cut, we handle every step of production.
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
            <h4 className="font-bold">Consultation & Planning</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We discuss your goals, audience, and vision for the video.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Production</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Our team films and captures all necessary footage with
              professional equipment.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Editing & Delivery</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We edit, polish, and deliver your final video ready for any
              platform.
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
          Ready to Bring Your Story to Life?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your video project and get a free
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

export default VideoProduction;
type Props = {};

const VedioProduction = (props: Props) => {
  return <div>VedioProduction</div>;
};
