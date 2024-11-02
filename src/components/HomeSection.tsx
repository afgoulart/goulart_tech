export default function HomeSection() {
  return (
    <section id="home" className="p-10 text-center">
      <h1 className="font-bold text-4xl">
        Hi, I&apos;m André Filipe de Moraes Goulart
      </h1>
      <p className="mt-4">
        I am a Senior Software Engineer with over 10 years of experience...
      </p>
      <div className="space-x-4 mt-6">
        <a href="mailto:afgoulart.rj@gmail.com" className="btn-primary">
          Contact
        </a>
        <a href="/resume.pdf" className="btn-secondary" target="_blank">
          Resume
        </a>
      </div>
    </section>
  );
}
