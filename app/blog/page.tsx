"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

const blogImages = ["/blog/1.jpg", "/blog/2.jpg", "/blog/3.jpg"];

const Blog = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].blog;
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100 caret-transparent">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.heroTitle}</h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Freelance Content Section */}
      <section className="max-w-3xl px-4 py-12 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-center">
          {t.futureTitle}
        </h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">{t.futureDesc1}</p>
        <p className="text-gray-700 dark:text-gray-300">{t.futureDesc2}</p>
      </section>

      {/* Blog Posts Section */}
      <section className="px-4 py-16 mx-auto bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          {t.latestTitle}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {t.posts.map((post: any, idx: number) => (
            <div
              key={post.title}
              className="overflow-hidden transition duration-300 transform bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={blogImages[idx]}
                alt={post.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t.readMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Freelancing Section */}
      <section className="px-4 py-16 mx-auto my-8 md:px-8 bg-blue-50 dark:bg-gray-800 rounded-xl">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {t.benefitsTitle}
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          {t.benefits.map((benefit: any, idx: number) => (
            <div key={idx}>
              <span className="inline-block mb-2 text-4xl">{benefit.icon}</span>
              <h4 className="mb-1 font-bold">{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Freelance FAQ Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {t.faqTitle}
        </h2>
        <div className="space-y-4">
          {t.faq.map((item: any, idx: number) => (
            <details
              key={idx}
              className="p-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <summary className="font-semibold cursor-pointer">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="px-4 py-16 my-8 text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl">
        <h2 className="mb-4 text-3xl font-semibold">{t.newsletterTitle}</h2>
        <p className="max-w-xl mx-auto mb-6">{t.newsletterDesc}</p>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
