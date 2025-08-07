import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const Top5Skills = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Banner Image */}
      <section className="relative flex items-center justify-center w-full h-64 bg-blue-100 md:h-96 dark:bg-gray-800">
        
        <div className="relative z-10 text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">Top 5 Skills Every Freelancer Needs in 2025</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Stay ahead in the freelance world by mastering these essential skills for the future.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold">The Must-Have Skills for Freelancers in 2025</h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-300">
          <li>
            <span className="font-bold"> Digital Marketing:</span> Understanding SEO, social media, and content marketing is crucial for promoting your services and helping clients grow their businesses.
          </li>
          <li>
            <span className="font-bold"> Tech Savvy:</span> Stay updated with the latest tools, platforms, and software relevant to your field—whether it’s web development, design, or project management.
          </li>
          <li>
            <span className="font-bold"> Communication:</span> Clear, professional communication (written and verbal) is key to building trust and managing client relationships.
          </li>
          <li>
            <span className="font-bold"> Adaptability:</span> The freelance landscape changes rapidly. Being flexible and open to learning new skills will keep you competitive.
          </li>
          <li>
            <span className="font-bold"> Time Management:</span> Juggling multiple projects and deadlines requires strong organizational skills and self-discipline.
          </li>
        </ol>
        <div className="p-6 mt-8 shadow bg-blue-50 dark:bg-gray-800 rounded-xl">
          <h3 className="mb-2 text-xl font-bold">Pro Tip:</h3>
          <p>Invest in continuous learning—online courses, webinars, and networking—to keep your skills sharp and relevant in 2025 and beyond!</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Top5Skills;
