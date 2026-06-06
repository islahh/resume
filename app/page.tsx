import Header from "../src/components/Header";
import Section from "../src/components/Section";
import ExperienceItem from "../src/components/ExperienceItem";
import { cvData } from "../src/data/cv-data";
import SkillsSection from "@/src/components/Skills";

export default function Home() {
  return (
    <main
      id="resume-root"
      className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200"
    >
      <Header data={cvData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pl-6 pr-6">
        <Section title="Professional Summary">
          <p className="text-slate-700 leading-relaxed dark:text-slate-300">
            {cvData.sections.summary}
          </p>
        </Section>

        <Section title="Work Experience">
          {cvData.sections.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              points={exp.points}
            />
          ))}
        </Section>

        <Section title="Education">
          {cvData.sections.education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {edu.degree}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {edu.institution}
              </p>
              <div className="flex justify-between mt-1">
                <span className="text-slate-500 dark:text-slate-500">
                  {edu.date}
                </span>
                <span className="text-slate-500 dark:text-slate-500">
                  {edu.cgpa}
                </span>
              </div>
            </div>
          ))}
        </Section>

        <div id="technical-skills-section">
          <Section title="Technical Skills">
            <SkillsSection />
            {/* <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-center text-slate-700 dark:text-slate-200">
              {cvData.sections.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-slate-100 px-4 py-2 rounded-full text-center text-slate-700 dark:text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div> */}
          </Section>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Certifications">
            {cvData.sections.certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                  {cert.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {cert.date}
                </p>
              </div>
            ))}
          </Section>

          <Section title="Awards & Recognition">
            {cvData.sections.awards.map((award, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                  {award.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {award.issuer}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {award.date}
                </p>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </main>
  );
}
