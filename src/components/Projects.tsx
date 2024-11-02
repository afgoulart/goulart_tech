export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="mb-6 font-bold text-3xl text-center">My Projects</h2>
      <div className="gap-6 grid grid-cols-2">
        <div className="project-card">
          <h3 className="font-bold text-xl">Online Flight Booking</h3>
          <p>A comprehensive platform for booking flights...</p>
        </div>
        <div className="project-card">
          <h3 className="font-bold text-xl">Speed Typing Game</h3>
          <p>A game designed to improve typing speed...</p>
        </div>
      </div>
    </section>
  );
}
