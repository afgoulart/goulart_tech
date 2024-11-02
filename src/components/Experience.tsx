export default function Journey() {
  return (
    <section className="p-10 education" id="education">
      <h2 className="mb-8 font-bold text-3xl text-center heading">
        My <span className="text-blue-500">Journey</span>
      </h2>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 education-row">
        {/* Education Section */}
        <div className="education-column">
          <h3 className="mb-4 font-semibold text-2xl title">Education</h3>
          <div className="p-4 education-box">
            <EducationItem
              year="March 2008 - July 2010"
              title="Technical Graduation, Systems for Web"
              institution="Universidade Estácio de Sá, Rio de Janeiro"
              description=""
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="education-column">
          <h3 className="mb-4 font-semibold text-2xl title">Experience</h3>
          <div className="p-4 education-box">
            <ExperienceItem
              year="July 2023 - Present"
              title="Senior Frontend Engineer at Calindra"
              description="Proposed ideas and solutions to enhance the e-commerce site for Tania Bulhões. Collaborated with clients to understand needs, delivering impactful technical solutions to improve user experience and streamline site performance."
            />
            <ExperienceItem
              year="December 2023 - May 2024"
              title="Senior Frontend Engineer at Desygner"
              description="Developed responsive interfaces with React, Vue, Node.js, TypeScript, Styled-components, and Nx. Collaborated with designers and product managers, and implemented automated tests to ensure code quality."
            />
            <ExperienceItem
              year="July 2023 - December 2023"
              title="Staff Software Engineer at Stone"
              description="Developed responsive interfaces using Vue.js, Next.js, React, and Tailwind CSS."
            />
            <ExperienceItem
              year="January 2023 - June 2023"
              title="Specialist Fullstack at Mosaico"
              description="Provided technical guidance for two teams, enhancing developers' technical proficiency."
            />
            <ExperienceItem
              year="January 2022 - January 2023"
              title="Tech Lead at Mosaico"
              description="Led user team in developing authentication systems, logged-in areas, and login pages. Collaborated across departments for process improvements."
            />
            <ExperienceItem
              year="August 2019 - January 2022"
              title="Full Stack Engineer at Mosaico"
              description="Participated in reengineering the marketplace checkout system and developed a financial dashboard using NodeJS + Express (TypeScript) and React."
            />
            <ExperienceItem
              year="October 2017 - July 2019"
              title="Full Stack Developer at B2W Digital"
              description="Developed the Submarino Project using JAVA, HTML, CSS, JavaScript, and jQuery. Later transitioned to React and NodeJS development."
            />
            <ExperienceItem
              year="February 2015 - October 2017"
              title="Frontend Developer Mid-level at B2W Digital"
              description="Contributed to the Zion Project, a pivotal technology initiative for the company."
            />
            <ExperienceItem
              year="February 2012 - November 2016"
              title="Freelancer - Web Developer"
              description="Worked with HTML5, jQuery plugins, Responsive Design, and CSS3 for various clients."
            />
            <ExperienceItem
              year="October 2014 - January 2015"
              title="Frontend Developer at Ideais Tecnologia"
              description="Developed with HTML5, created jQuery plugins, and implemented Responsive Design."
            />
            <ExperienceItem
              year="February 2013 - September 2014"
              title="Frontend Developer at RR Donnelley"
              description="Developed with HTML5, created jQuery plugins, and implemented Responsive Design."
            />
            <ExperienceItem
              year="May 2009 - December 2010"
              title="Web Developer at National Observatory"
              description=""
            />
            <ExperienceItem
              year="January 2009 - April 2009"
              title="Internship at Atacadista São Jorge de Cascadura Ltda."
              description=""
            />
            <ExperienceItem
              year="July 2006 - December 2006"
              title="Internship at Transmagno Transportes Rodoviário Ltda."
              description=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface EducationItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
}

// Subcomponente para itens de educação
function EducationItem({
  year,
  title,
  institution,
  description,
}: EducationItemProps) {
  return (
    <div className="mb-4 education-content">
      <div className="content">
        <div className="mb-2 font-semibold text-blue-500 year">
          <i className="mr-2 bx bxs-calendar"></i> {year}
        </div>
        <h3 className="mb-1 font-bold text-xl">{title}</h3>
        <p className="mb-2 italic">{institution}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Subcomponente para itens de experiência
function ExperienceItem({ year, title, description }: ExperienceItemProps) {
  return (
    <div className="mb-4 education-content">
      <div className="content">
        <div className="mb-2 font-semibold text-blue-500 year">
          <i className="mr-2 bx bxs-calendar"></i> {year}
        </div>
        <h3 className="mb-1 font-bold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
