import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2, Landmark, Scale, ShieldCheck, Banknote, Wallet,
  TrendingUp, Users, ChevronDown, Menu, X, ArrowRight, Send
} from "lucide-react";
import heroImg from "@/assets/hero-fintech.jpg";
import grafenoLogo from "@/assets/grafeno-logo.png";

const Logo = ({ className = "h-12" }: { className?: string }) => (
  <img src={grafenoLogo} alt="Grafeno" className={`${className} w-auto`} />
);

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#solucoes" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand transition-colors">
            Soluções <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#grafeno" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand transition-colors">
            A Grafeno <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#dev" className="text-sm font-medium text-foreground hover:text-brand transition-colors">
            Desenvolvedores
          </a>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="lg" className="rounded-md text-base px-8 h-12 hover:bg-brand hover:text-brand-foreground hover:border-brand">
            <a href="https://portal-digita.lovable.app/">Área do cliente</a>
          </Button>
          <Button asChild size="lg" className="rounded-md bg-brand hover:bg-brand-glow text-brand-foreground text-base px-8 h-12">
            <a href="https://portal-digita.lovable.app/">Abrir conta</a>
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <a href="#solucoes" className="block text-foreground">Soluções</a>
          <a href="#grafeno" className="block text-foreground">A Grafeno</a>
          <a href="#dev" className="block text-foreground">Desenvolvedores</a>
          <Button asChild variant="outline" className="w-full rounded-md">
            <a href="https://portal-digita.lovable.app/">Área do cliente</a>
          </Button>
          <Button asChild className="w-full rounded-md bg-brand hover:bg-brand-glow text-brand-foreground">
            <a href="https://portal-digita.lovable.app/">Abrir conta</a>
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-20">
    <div className="relative h-[600px] w-full overflow-hidden">
      <img src={heroImg} alt="Plataforma financeira Grafeno" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/60" />
      <div className="relative container h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          A melhor experiência<br />do ciclo de crédito a um clique
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-white/90">
          Um ecossistema de soluções completo desenvolvido para dar fluidez a toda a jornada do crédito,
          da emissão de ativos a gestão de operações financeiras.
        </p>
        <Button asChild className="mt-8 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-foreground">
          <a href="https://portal-digita.lovable.app/">Abrir minha conta</a>
        </Button>
      </div>
    </div>
  </section>
);

const segments = [
  { icon: Landmark, title: "FIDCs, Securitizadoras, Factorings & Gestoras", desc: "Tecnologia que proporciona controle e segurança para antecipação de recebíveis e emissão de crédito." },
  { icon: Building2, title: "Plataformas Techs, ERPs & Marketplaces", desc: "Infraestrutura de serviços financeiros completa para pagamentos, cobranças e gestão de operações." },
  { icon: Scale, title: "Consultoria Jurídica, Contábil e Financeira", desc: "Plataforma de serviços financeiros que oferece a possibilidade de visualização e administração síncrona de todas as operações financeiras de sua carteira de clientes." },
];

const Segments = () => (
  <section id="solucoes" className="py-24 bg-secondary/30">
    <div className="container">
      <h2 className="text-3xl md:text-5xl font-bold text-center max-w-5xl mx-auto leading-tight">
        Perfeita para o <span className="text-brand">mercado de crédito</span> e de <span className="text-brand">operações financeiras</span>
      </h2>
      <p className="mt-6 text-center text-muted-foreground max-w-3xl mx-auto">
        Desenvolvemos infraestrutura financeira personalizada para impulsionar o crescimento de nossos parceiros,
        assegurando eficiência, segurança e inovação. Adaptamos soluções às necessidades específicas de cada setor.
      </p>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {segments.map((s) => (
          <Card key={s.title} className="p-8 pt-12 relative shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
            <div className="absolute -top-7 left-8 h-14 w-14 rounded-xl bg-brand flex items-center justify-center shadow-[var(--shadow-elevated)]">
              <s.icon className="h-7 w-7 text-brand-foreground" />
            </div>
            <h3 className="font-bold text-lg mt-4">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const features = [
  { icon: Wallet, title: "Conta Digital PJ", desc: "Conta completa com Pix, TED, boletos e cartão para sua empresa operar sem fricção." },
  { icon: Banknote, title: "Emissão de Ativos", desc: "Emita CCBs, CCIs e debêntures com toda a estrutura jurídica e operacional." },
  { icon: ShieldCheck, title: "Compliance & Segurança", desc: "KYC, AML e monitoramento em tempo real protegendo cada operação." },
  { icon: TrendingUp, title: "Gestão de Carteira", desc: "Dashboards completos para acompanhar performance, inadimplência e liquidez." },
  { icon: Users, title: "Cobrança Inteligente", desc: "Régua automatizada de cobrança multicanal com altas taxas de recuperação." },
  { icon: Send, title: "API & Integrações", desc: "Conecte sua stack ao nosso BaaS via APIs RESTful documentadas e robustas." },
];

const Features = () => (
  <section id="grafeno" className="py-24">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-brand uppercase tracking-wider">Soluções</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">Toda a infraestrutura financeira que sua operação precisa</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl border border-border hover:border-brand transition-colors group">
            <div className="h-12 w-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-foreground text-background">
    <div className="container grid md:grid-cols-4 gap-8 text-center">
      {[
        { v: "R$ 50bi+", l: "em operações processadas" },
        { v: "300+", l: "parceiros ativos" },
        { v: "99.99%", l: "de uptime garantido" },
        { v: "24/7", l: "suporte especializado" },
      ].map((s) => (
        <div key={s.l}>
          <div className="text-4xl md:text-5xl font-bold text-brand-glow">{s.v}</div>
          <div className="mt-2 text-sm text-background/70">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24">
    <div className="container">
      <div className="rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
          Pronto para transformar suas operações financeiras?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-white/90">
          Fale com nossos especialistas e descubra a solução ideal para o seu negócio.
        </p>
        <Button asChild className="mt-8 rounded-full bg-white text-brand hover:bg-white/90">
          <a href="https://portal-digita.lovable.app/">Abrir minha conta <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-16">
    <div className="container grid md:grid-cols-4 gap-10">
      <div>
        <img src={grafenoLogo} alt="Grafeno" className="h-9 w-auto bg-background rounded px-2 py-1" />
        <p className="mt-4 text-sm">Infraestrutura financeira para o mercado de crédito.</p>
      </div>
      {[
        { t: "Soluções", l: ["Conta Digital", "Emissão de Ativos", "Cobrança", "APIs"] },
        { t: "A Grafeno", l: ["Sobre", "Carreiras", "Imprensa", "Contato"] },
        { t: "Recursos", l: ["Documentação", "Blog", "Status", "Suporte"] },
      ].map((c) => (
        <div key={c.t}>
          <h4 className="font-semibold text-background mb-4">{c.t}</h4>
          <ul className="space-y-2 text-sm">
            {c.l.map((i) => <li key={i}><a href="#" className="hover:text-brand-glow">{i}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mt-12 pt-8 border-t border-background/10 text-sm text-background/60">
      © {new Date().getFullYear()} Grafeno. Todos os direitos reservados.
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Header />
    <Hero />
    <Segments />
    <Features />
    <Stats />
    <CTA />
    <Footer />
  </main>
);

export default Index;
