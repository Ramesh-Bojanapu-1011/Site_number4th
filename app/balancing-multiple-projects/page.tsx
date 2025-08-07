import Footer from "@/components/Footer";
import Headder from "@/components/Headder";

const BalancingMultipleProjects = () => {
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Banner Image */}
      <section className="relative flex items-center justify-center w-full h-64 bg-blue-100 md:h-96 dark:bg-gray-800">
         
        <div className="relative z-10 text-center">
            
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">Balancing Multiple Projects as a Freelancer</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Tips and strategies for managing your time, clients, and workload effectively.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold">How to Juggle Multiple Freelance Projects</h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-300">
          <li>
            <span className="font-bold">Prioritize Tasks:</span> Use a task manager or to-do list to organize your daily and weekly priorities.
          </li>
          <li>
            <span className="font-bold">Set Realistic Deadlines:</span> Communicate clear timelines with clients and avoid overcommitting.
          </li>
          <li>
            <span className="font-bold">Block Your Time:</span> Allocate specific time slots for each project to maintain focus and productivity.
          </li>
          <li>
            <span className="font-bold">Use Tools & Automation:</span> Leverage project management and automation tools to streamline your workflow.
          </li>
          <li>
            <span className="font-bold">Take Breaks & Avoid Burnout:</span> Schedule regular breaks and downtime to recharge and maintain creativity.
          </li>
        </ol>
        <div className="p-6 mt-8 shadow bg-blue-50 dark:bg-gray-800 rounded-xl">
          <h3 className="mb-2 text-xl font-bold">Pro Tip:</h3>
          <p>Regularly review your workload and adjust your schedule as needed. Don’t hesitate to say no to new projects if your plate is full!</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BalancingMultipleProjects;