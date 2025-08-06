import Footer from '@/components/Footer';
import Headder from '@/components/Headder';
 
import React from 'react'

type Props = {}


const ContactUs = (props: Props) => {
  return (
    <>
    <Headder/>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-center">
        <div className="max-w-2xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold text-indigo-700 md:text-5xl dark:text-indigo-300">Contact Us</h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl dark:text-gray-200">We'd love to hear from you! Reach out for project inquiries, support, or just to say hello.</p>
        </div>
      </section>

      {/* Contact Info, Form, and Socials Combined Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid items-start max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
          {/* Contact Info & Socials */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-indigo-700 dark:text-indigo-300">Email</h3>
                <p className="text-gray-700 dark:text-gray-200">freelancer@example.com</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-indigo-700 dark:text-indigo-300">Phone</h3>
                <p className="text-gray-700 dark:text-gray-200">+1 234 567 8901</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-indigo-700 dark:text-indigo-300">Location</h3>
                <p className="text-gray-700 dark:text-gray-200">Remote / Global</p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-700 dark:text-indigo-300">Connect With Us</h2>
              <div className="flex justify-center gap-8 text-2xl">
                <a href="#" className="text-blue-600 transition hover:text-blue-800"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="#" className="transition text-sky-500 hover:text-sky-700"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#" className="text-pink-600 transition hover:text-pink-800"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="#" className="text-blue-800 transition hover:text-blue-900"><i className="fab fa-linkedin"></i> LinkedIn</a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-center text-purple-700 dark:text-purple-300">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
                <input type="email" placeholder="Your Email" className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
              <textarea placeholder="Your Message" rows={5} className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
              <button type="submit" className="w-full py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-lg shadow hover:bg-indigo-700">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl px-6 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-center text-purple-700 dark:text-purple-300">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-900">
              <h4 className="mb-1 font-semibold">How quickly will I get a response?</h4>
              <p className="text-gray-700 dark:text-gray-200">We aim to respond to all inquiries within 24 hours.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-900">
              <h4 className="mb-1 font-semibold">Can I request a custom service?</h4>
              <p className="text-gray-700 dark:text-gray-200">Absolutely! Just describe your needs in the form and we’ll tailor a solution for you.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-900">
              <h4 className="mb-1 font-semibold">Is my information safe?</h4>
              <p className="text-gray-700 dark:text-gray-200">Yes, your privacy is important to us. We never share your details without consent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Map/Location Section */}
      <section className="py-12 text-center bg-white dark:bg-gray-900">
        <div className="mx-auto ">
          <h2 className="mb-6 text-2xl font-bold text-indigo-700 dark:text-indigo-300">Our Location</h2>
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

       
      <Footer/>
    </>
  );
}

export default ContactUs