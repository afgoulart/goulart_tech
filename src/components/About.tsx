import Image from "next/image";

export default function About() {
  return (
    <section className="p-10 about" id="about">
      <h2 className="mb-8 font-bold text-3xl text-center heading">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="mx-auto rounded-full w-40 h-40 overflow-hidden about-img">
        <Image
          className="rounded-full"
          width={400}
          height={400}
          src="https://media.licdn.com/dms/image/v2/D4D03AQEqnsWvjnFVHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704731441956?e=1735776000&v=beta&t=i3DsmeVjUOdrExOfV3P6llAOzNqmKwfTseiqp200b5o"
          alt="Andr&eacute; Filipe de Moraes Goulart"
        />
        <span className="circle-spin"></span>
      </div>

      <div className="mt-8 text-center about-content">
        <h3 className="mb-4 font-semibold text-2xl">
          Senior Software Engineer
        </h3>
        <p>
          Hello, I&apos;m{" "}
          <span className="font-bold">André Filipe de Moraes Goulart</span>, a
          seasoned Senior Software Engineer with over a decade of experience in
          web development. My expertise lies in leveraging modern technologies,
          such as <strong>NodeJS, React, Vue, and TypeScript</strong>, to build
          responsive, high-performance applications. Passionate about continuous
          learning, I am always eager to push boundaries and bring impactful
          solutions to life.
        </p>
        <p className="mt-4">
          Outside of work, my family is my greatest source of inspiration,
          driving me to achieve excellence in everything I do. I am committed to
          creating sustainable and efficient solutions that make a tangible
          difference. Currently, I am seeking innovative and challenging
          projects where I can contribute my expertise and enthusiasm for
          technology.
        </p>
        <div className="mt-6 btn-box btns">
          <a
            href="https://www.linkedin.com/in/afgoulart"
            target="_blank"
            className="btn"
          >
            LinkedIn Profile
          </a>
          <a href="/resume.pdf" target="_blank" className="btn">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
