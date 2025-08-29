"use client";
import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";

const Top5Skills = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].top5skills;
  return (
    <main className="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <Headder />
      {/* Banner Image */}
      <section className="relative flex items-center justify-center w-full h-64 bg-blue-100 md:h-96 dark:bg-gray-800">
        <div className="relative z-10 text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">{t.heroTitle}</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-semibold">{t.skillsTitle}</h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-300">
          {t.skills.map((skill: any, idx: number) => (
            <li key={idx}>
              <span className="font-bold"> {skill.title}</span> {skill.desc}
            </li>
          ))}
        </ol>
        <div className="p-6 mt-8 shadow bg-blue-50 dark:bg-gray-800 rounded-xl">
          <h3 className="mb-2 text-xl font-bold">{t.proTipTitle}</h3>
          <p>{t.proTipDesc}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Top5Skills;
