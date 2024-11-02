interface ContactItemProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface ContactProps {}

export default function Contact({}: ContactProps) {
  return (
    <section className="p-10 contact" id="contact">
      <h2 className="mb-16 font-bold text-3xl text-center heading">
        Contact <span className="text-blue-500">Me</span>
      </h2>
      <div className="space-y-10 mx-auto max-w-5xl contact-info">
        <ContactItem
          title="Email"
          description="Para discussões sobre projetos, colaborações ou apenas para conectar, você pode me contatar pelo e-mail."
          link="mailto:afgoulart.rj@gmail.com"
          linkText="afgoulart.rj@gmail.com"
        />
        <ContactItem
          title="LinkedIn"
          description="Conecte-se comigo no LinkedIn para networking e para acompanhar minha trajetória profissional."
          link="https://www.linkedin.com/in/afgoulart"
          linkText="linkedin.com/in/afgoulart"
        />
        <ContactItem
          title="Phone / WhatsApp"
          description="Para contatos rápidos ou para discussões mais diretas, você pode me encontrar via telefone ou WhatsApp."
          link="tel:+5521985364597"
          linkText="+55 (21) 98536-4597"
        />
      </div>
    </section>
  );
}

// Subcomponente para cada item de contato
function ContactItem({ title, description, link, linkText }: ContactItemProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg contact-item">
      <h3 className="mb-2 font-semibold text-5xl text-blue-500">{title}:</h3>
      <p className="mb-2 text-3xl text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white hover:text-blue-400 underline"
      >
        {linkText}
      </a>
    </div>
  );
}
