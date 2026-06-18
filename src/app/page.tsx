import WhatsAppForm from '@/components/WhatsAppForm';

const COMPANY = {
  name: 'Goulart Consultoria em TI',
  legalName: 'Goulart Consultoria em TI LTDA',
  cnpj: '51.399.263/0001-56',
  email: 'afgoulart.rj@gmail.com',
  city: 'Rio de Janeiro — RJ',
  linkedin: 'https://www.linkedin.com/company/goulart-ti',
  year: new Date().getFullYear(),
};

const NAV = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  {
    title: 'Desenvolvimento de Software',
    desc: 'Aplicações web, APIs e sistemas sob medida, do MVP ao produto em escala, com código limpo e testável.',
    icon: 'code',
  },
  {
    title: 'Arquitetura & Cloud',
    desc: 'Projeto e modernização de arquiteturas, migração para nuvem (AWS, Azure, GCP) e infraestrutura como código.',
    icon: 'cloud',
  },
  {
    title: 'Transformação Digital',
    desc: 'Automação de processos, integração de sistemas e estratégia de dados para destravar a operação do negócio.',
    icon: 'spark',
  },
  {
    title: 'Consultoria & Squad',
    desc: 'Apoio técnico, code review, mentoria de times e alocação de profissionais para acelerar suas entregas.',
    icon: 'users',
  },
];

const DIFFERENTIALS = [
  {
    title: 'Visão de negócio',
    desc: 'Tecnologia sempre conectada a resultado: priorizamos o que gera valor real para a sua empresa.',
  },
  {
    title: 'Entrega contínua',
    desc: 'Ciclos curtos, transparência total e software funcionando em produção desde o início.',
  },
  {
    title: 'Qualidade de engenharia',
    desc: 'Boas práticas, automação e segurança como padrão — não como item opcional.',
  },
  {
    title: 'Parceria de longo prazo',
    desc: 'Atuamos lado a lado com o seu time, transferindo conhecimento e autonomia.',
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'code':
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 11.2 3.5 3.5 0 0 0 7 19h10.5Z" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
        </svg>
      );
    default:
      return null;
  }
}

function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-2.5 group" aria-label={COMPANY.name}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        className="shadow-lg shadow-blue-500/20 rounded-[10px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gLogo" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--brand)" />
            <stop offset="1" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#gLogo)" />
        <path
          d="M45.59 25.66 A15 15 0 1 0 45.59 38.34"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d="M32 32 H47" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">
        Goulart<span className="text-[var(--text-muted)]"> · TI</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div id="topo" className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-lg bg-[var(--brand-strong)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--brand)]"
          >
            Fale conosco
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(59,130,246,0.25),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs text-[var(--text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Consultoria em Tecnologia da Informação
          </span>
          <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-gradient">Tecnologia</span> que move o seu negócio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
            Desenvolvemos software, modernizamos sistemas e aceleramos a transformação
            digital de empresas que querem crescer com segurança e eficiência.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contato"
              className="rounded-lg bg-[var(--brand-strong)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--brand)]"
            >
              Começar um projeto
            </a>
            <a
              href="#servicos"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)]"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nossos serviços</h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Da estratégia à entrega, cobrimos todo o ciclo de vida da sua solução de
            tecnologia.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--brand)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent)] transition-colors group-hover:text-[var(--brand)]">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-y border-[var(--border)] bg-[var(--bg-soft)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Sobre a {COMPANY.name}
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
              Somos uma consultoria de tecnologia focada em transformar desafios de
              negócio em soluções digitais sólidas. Unimos engenharia de software de alto
              nível, experiência em arquitetura e visão estratégica para entregar
              resultados que duram.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Trabalhamos como uma extensão do seu time — com transparência, qualidade e
              compromisso com cada entrega.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: '10+', v: 'anos de experiência em TI' },
              { k: '100%', v: 'foco em resultado de negócio' },
              { k: 'Full', v: 'stack — front, back e cloud' },
              { k: 'Ágil', v: 'entregas contínuas e iterativas' },
            ].map((stat) => (
              <div
                key={stat.v}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="text-3xl font-bold text-gradient">{stat.k}</div>
                <div className="mt-2 text-sm text-[var(--text-muted)]">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Por que a Goulart
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Mais do que código: parceria estratégica para o crescimento da sua empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {DIFFERENTIALS.map((d, i) => (
            <div
              key={d.title}
              className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--bg-soft)] font-semibold text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato / CTA */}
      <section id="contato" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-8 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(34,211,238,0.18),transparent)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Vamos construir algo juntos?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
              Conte o desafio do seu negócio. Preencha os campos abaixo e continue a
              conversa direto no WhatsApp.
            </p>

            <WhatsAppForm />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href={`mailto:${COMPANY.email}?subject=Contato%20pelo%20site`}
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {COMPANY.email}
              </a>
              <span className="text-[var(--border)]">·</span>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                Consultoria em tecnologia da informação. Software, cloud e transformação
                digital para o seu negócio.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm">
              <div>
                <div className="font-semibold">Navegação</div>
                <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="transition-colors hover:text-[var(--text)]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold">Contato</div>
                <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
                  <li>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="transition-colors hover:text-[var(--text)]"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={COMPANY.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--text)]"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>{COMPANY.city}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-1 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)]">
            <span>
              © {COMPANY.year} {COMPANY.legalName}
            </span>
            <span>CNPJ: {COMPANY.cnpj}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
