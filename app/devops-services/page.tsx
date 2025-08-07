import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";

const services = [
  {
    title: "CI/CD Pipeline Setup",
    desc: "Automate your build, test, and deployment processes for faster releases.",
  },
  {
    title: "Cloud Infrastructure Management",
    desc: "Design, deploy, and manage scalable cloud environments (AWS, Azure, GCP).",
  },
  {
    title: "Containerization & Orchestration",
    desc: "Dockerize your applications and manage them with Kubernetes or similar tools.",
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Automate infrastructure provisioning using Terraform, Ansible, or CloudFormation.",
  },
  {
    title: "Monitoring & Logging",
    desc: "Implement robust monitoring and logging for proactive issue detection.",
  },
  {
    title: "Security & Compliance",
    desc: "Integrate security best practices and compliance checks into your DevOps workflows.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    feedback:
      "The DevOps team streamlined our deployment process and improved our cloud reliability!",
  },
  {
    name: "Alex M.",
    feedback:
      "Excellent service, fast delivery, and deep technical expertise. Highly recommended!",
  },
];

const DevopsServices = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-green-100 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Expert DevOps Services for Modern Businesses
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            Accelerate your software delivery, improve reliability, and scale
            effortlessly with our end-to-end DevOps solutions.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          Our DevOps Services
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
      <section className="px-4 py-16 md:px-8 bg-green-50 dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          Why Choose Our DevOps Services?
        </h2>
        <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">🚀</span>
            <h4 className="mb-1 font-bold">Faster Delivery</h4>
            <p>
              Automated pipelines and processes for rapid, reliable releases.
            </p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">☁️</span>
            <h4 className="mb-1 font-bold">Cloud Expertise</h4>
            <p>Certified professionals in AWS, Azure, and Google Cloud.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">🔒</span>
            <h4 className="mb-1 font-bold">Security First</h4>
            <p>DevSecOps approach to keep your systems safe and compliant.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center">Our Process</h2>
        <ol className="relative max-w-2xl mx-auto border-l border-green-400 dark:border-green-600">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-green-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              1
            </span>
            <h4 className="font-bold">Assessment & Planning</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We analyze your current setup and design a tailored DevOps
              strategy.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-green-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              2
            </span>
            <h4 className="font-bold">Implementation</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We set up pipelines, infrastructure, and automation tools for your
              project.
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-green-600 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              3
            </span>
            <h4 className="font-bold">Monitoring & Support</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Continuous monitoring, optimization, and support for ongoing
              success.
            </p>
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 md:px-8 bg-green-50 dark:bg-gray-800">
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
              <div className="font-bold text-green-700 dark:text-green-400">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 text-center md:px-8">
        <h2 className="mb-4 text-3xl font-semibold">
          Ready to Transform Your DevOps?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Contact us today to discuss your DevOps needs and get a free
          consultation. Let’s build a faster, more reliable future together!
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700"
        >
          Contact Us
        </a>
      </section>
      <Footer />
    </main>
  );
};

export default DevopsServices;
