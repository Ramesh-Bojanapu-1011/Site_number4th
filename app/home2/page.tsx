import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";

type Props = {};

const Home2 = (props: Props) => {
  return (
    <main className="caret-transparent">
      <Headder />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden text-center ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]  "
        >
          <source src="\vedio2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">
              Creative Freelance Solutions
            </h1>
            <p className="mb-6 text-lg text-white md:text-xl dark:text-gray-200">
              Crafting modern websites, clean designs & smart marketing for your
              brand.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-semibold text-indigo-700 transition-all duration-300 bg-white rounded-full shadow hover:bg-gray-100 dark:bg-gray-900 dark:text-indigo-300 dark:hover:bg-gray-800"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-purple-700 dark:text-purple-300">
            What I Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Web Development",
                desc: "Responsive and scalable websites using the latest technologies.",
                icon: "💻",
              },
              {
                title: "UI/UX Design",
                desc: "Beautiful and intuitive designs focused on great user experiences.",
                icon: "🎨",
              },
              {
                title: "SEO & Marketing",
                desc: "Rank higher, drive traffic, and convert more customers.",
                icon: "🚀",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white shadow cursor-pointer dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-2 text-4xl">{service.icon}</div>
                <h3 className="mb-1 text-lg font-semibold text-indigo-600 dark:text-indigo-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            Recent Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden transition duration-300 shadow cursor-pointer group rounded-xl hover:scale-105 hover:shadow-lg dark:bg-gray-900"
              >
                <img
                  src={`/project/${item}.jpg`}
                  alt={`Project ${item}`}
                  className="object-cover w-full h-56 transition duration-300 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white bg-black bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-80">
                  <h3 className="text-lg font-semibold">Project {item}</h3>
                  <p className="text-sm opacity-80">
                    Live website / application showcase
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid items-center max-w-5xl gap-10 px-6 mx-auto md:grid-cols-2">
          <img
            src="/about_home2.jpg"
            alt="Freelancer"
            className="object-cover w-full shadow-lg rounded-xl"
          />
          <div>
            <h2 className="mb-4 text-3xl font-bold text-purple-700 dark:text-purple-300">
              Who’s Behind the Work
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              A passionate freelancer with a focus on innovation, clean design,
              and real-world results. With a background in web development and
              marketing, I help brands grow with smart online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            Happy Clients
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "Delivered top-quality work, on time. Great communication throughout!",
                author: "— Alex M., CEO",
              },
              {
                quote:
                  "Amazing design skills and super responsive. Highly recommend!",
                author: "— Rina S., Startup Founder",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white shadow cursor-pointer dark:bg-gray-900 rounded-xl hover:scale-105 hover:shadow-lg"
              >
                <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-200">
                  “{testimonial.quote}”
                </p>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                  {testimonial.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 text-center bg-white dark:bg-gray-900"
      >
        <div className="max-w-3xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-purple-700 dark:text-purple-300">
            Let’s Build Something Great
          </h2>
          <p className="mb-10 text-lg text-gray-700 dark:text-gray-200">
            Reach out to start your next project or to request a free
            consultation.
          </p>
          <a
            href="mailto:freelancer@example.com"
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700"
          >
            Contact Me
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home2;
