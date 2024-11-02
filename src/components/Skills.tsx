export default function Skills() {
  return (
    <section className="p-10 skill" id="skill">
      <h2 className="mb-8 font-bold text-3xl text-center heading">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 skills-row">
        {/* Coding Skills */}
        <div className="skills-column">
          <h3 className="mb-4 font-semibold text-2xl title">Coding Skills</h3>
          <div className="bg-gray-800 p-4 rounded-lg skills-box">
            <div className="space-y-4 skills-content">
              <SkillProgress skill="HTML5" level="95%" />
              <SkillProgress skill="CSS3" level="85%" />
              <SkillProgress skill="Bootstrap" level="90%" />
              <SkillProgress skill="Tailwind CSS" level="90%" />
              <SkillProgress skill="JavaScript" level="65%" />
              <SkillProgress skill="GitHub" level="50%" />
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="skills-column">
          <h3 className="mb-4 font-semibold text-2xl title">
            Professional Skills
          </h3>
          <div className="bg-gray-800 p-4 rounded-lg skills-box">
            <div className="space-y-4 skills-content">
              <SkillProgress skill="Web Design" level="80%" />
              <SkillProgress skill="Web Development" level="70%" />
              <SkillProgress skill="PHP" level="80%" />
              <SkillProgress skill="MySQL" level="70%" />
              <SkillProgress skill="Python" level="60%" />
              <SkillProgress skill="React.js" level="80%" />
              <SkillProgress skill="Node.js" level="70%" />
              <SkillProgress skill="MongoDB" level="60%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Subcomponente para a barra de progresso
function SkillProgress({ skill, level }: any) {
  return (
    <div className="progress">
      <h3 className="mb-1 font-medium text-lg">
        {skill} <span className="text-blue-500">{level}</span>
      </h3>
      <div className="bg-gray-700 rounded-md h-2 overflow-hidden bar">
        <div
          className="bg-blue-500 rounded-md h-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}
