import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const HowToStartFreelancing = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Banner Image */}
      <section className="relative flex items-center justify-center w-full h-64 bg-blue-100 md:h-96 dark:bg-gray-800">
        <img src="/1.jpg" alt="How to Start Freelancing" className="absolute inset-0 object-cover w-full h-full opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">How to Start Freelancing: A Beginner's Guide</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Kickstart your freelance career with these essential steps and tips for success.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold">Step-by-Step Guide to Starting Freelancing</h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-300">
          <li>
            <span className="font-bold">Identify Your Skills:</span> Assess what services you can offer—writing, design, development, marketing, etc.
          </li>
          <li>
            <span className="font-bold">Build a Portfolio:</span> Create examples of your work to showcase your abilities. Use personal projects or volunteer work if you’re just starting out.
          </li>
          <li>
            <span className="font-bold">Set Up Your Online Presence:</span> Make a professional profile on platforms like LinkedIn, Upwork, or Fiverr. Consider building a personal website.
          </li>
          <li>
            <span className="font-bold">Find Your First Clients:</span> Start with your network, apply to freelance jobs, and pitch your services to potential clients.
          </li>
          <li>
            <span className="font-bold">Deliver Quality Work:</span> Communicate clearly, meet deadlines, and exceed client expectations to build a strong reputation.
          </li>
          <li>
            <span className="font-bold">Keep Learning & Growing:</span> Stay updated with industry trends and continuously improve your skills.
          </li>
        </ol>
        <div className="p-6 mt-8 shadow bg-blue-50 dark:bg-gray-800 rounded-xl">
          <h3 className="mb-2 text-xl font-bold">Pro Tip:</h3>
          <p>Don’t be afraid to start small. Every project is a learning opportunity and a step toward building your freelance business!</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HowToStartFreelancing;