import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const blogPosts = [
  {
    title: "How to Start Freelancing: A Beginner's Guide",
    excerpt: "Learn the essential steps to launch your freelance career, from building a portfolio to finding your first clients.",
    image: "/blog/1.jpg",
    link: "/how-to-start-freelancing",
  },
  {
    title: "Top 5 Skills Every Freelancer Needs in 2025",
    excerpt: "Discover the most in-demand skills for freelancers and how to stay ahead in a competitive market.",
    image: "/blog/2.jpg",
    link: "/top-5-skills-every-freelancer-needs",
  },
  {
    title: "Balancing Multiple Projects as a Freelancer",
    excerpt: "Tips and strategies for managing your time, clients, and workload effectively as a freelancer.",
    image: "/blog/3.jpg",
    link: "/balancing-multiple-projects",
  },
];

const Blog = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
       <div>
         <h1 className="mb-4 text-4xl font-bold md:text-5xl">Freelance Blog & Insights</h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">Tips, guides, and stories to help you succeed in your freelancing journey.</p>
       </div>
      </section>

      {/* Freelance Content Section */}
      <section className="max-w-3xl px-4 py-12 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold">Why Freelancing is the Future of Work</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Freelancing offers flexibility, independence, and the opportunity to work on diverse projects from anywhere in the world. As businesses increasingly embrace remote work, the demand for skilled freelancers continues to grow. Whether you're a developer, designer, writer, or marketer, freelancing empowers you to shape your own career path and achieve a better work-life balance.</p>
        <p className="text-gray-700 dark:text-gray-300">Stay tuned to our blog for the latest trends, tips, and resources to help you thrive as a freelancer in today's digital economy.</p>
      </section>

      {/* Blog Posts Section */}
      <section className="px-4 py-16 mx-auto bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 md:px-8">
        <h2 className="mb-10 text-3xl font-semibold text-center">Latest Freelancing Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="overflow-hidden transition duration-300 transform bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:scale-105 hover:shadow-2xl">
              <img src={post.image} alt={post.title} className="object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <a href={post.link} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Freelancing Section */}
      <section className="px-4 py-16 mx-auto my-8 md:px-8 bg-blue-50 dark:bg-gray-800 rounded-xl">
        <h2 className="mb-8 text-3xl font-semibold text-center">Benefits of Freelancing</h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <span className="inline-block mb-2 text-4xl">🌍</span>
            <h4 className="mb-1 font-bold">Work from Anywhere</h4>
            <p>Enjoy the freedom to work remotely and set your own schedule.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">💼</span>
            <h4 className="mb-1 font-bold">Diverse Projects</h4>
            <p>Choose projects that match your skills and interests for a fulfilling career.</p>
          </div>
          <div>
            <span className="inline-block mb-2 text-4xl">💸</span>
            <h4 className="mb-1 font-bold">Unlimited Earning Potential</h4>
            <p>Scale your income by working with multiple clients and setting your own rates.</p>
          </div>
        </div>
      </section>

      {/* Freelance FAQ Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center">Freelancing FAQ</h2>
        <div className="space-y-4">
          <details className="p-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">How do I find clients as a freelancer?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Start by building a strong portfolio, networking on platforms like LinkedIn, and joining freelance marketplaces. Consistent outreach and delivering quality work will help you attract more clients over time.</p>
          </details>
          <details className="p-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">How do I set my freelance rates?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Research industry standards, consider your experience, and factor in project complexity. Don’t undervalue your skills—charge what you’re worth and adjust as you gain more experience.</p>
          </details>
          <details className="p-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">What are the biggest challenges in freelancing?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Common challenges include finding consistent work, managing time, and handling taxes. Building good habits and using productivity tools can help you overcome these obstacles.</p>
          </details>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="px-4 py-16 my-8 text-center md:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl">
        <h2 className="mb-4 text-3xl font-semibold">Stay Updated with Freelance Tips</h2>
        <p className="max-w-xl mx-auto mb-6">Subscribe to our newsletter for the latest freelancing advice, resources, and exclusive offers.</p>
         
      </section>
      <Footer />
    </main>
  );
};

export default Blog;