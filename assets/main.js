// Fine Cleaning Services — language switch, menu, quote form (WhatsApp)
const WHATSAPP = "17542422578";

const PT = {
  "nav.services": "Serviços", "nav.why": "Por que nós", "nav.how": "Como funciona", "nav.area": "Região", "nav.contact": "Contato",
  "cta.quote": "Orçamento grátis", "cta.getQuote": "Pedir orçamento grátis",
  "hero.eyebrow": "Limpeza profissional e higienização",
  "hero.t1": "Descubra a", "hero.t2": "Arte da Limpeza",
  "hero.sub": "Limpeza residencial e comercial profissional, com atenção a cada detalhe.",
  "hero.tag": "Cuidado, precisão e resultados em que você pode confiar.",
  "chip.1": "Residencial e Comercial", "chip.2": "Atendemos Massachusetts", "chip.3": "Orçamentos grátis",
  "services.eyebrow": "Nossos serviços", "services.title": "Limpeza para todo tipo de espaço",
  "services.sub": "De casas a escritórios, cuidamos de cada canto para você aproveitar um espaço mais limpo e leve.",
  "s.res.t": "Limpeza Residencial", "s.res.d": "Limpeza regular que mantém sua casa fresca, organizada e confortável — semanal, quinzenal ou mensal.",
  "s.com.t": "Limpeza Comercial", "s.com.d": "Escritórios, lojas e pequenas empresas sempre impecáveis, em horários que se encaixam no seu expediente.",
  "s.deep.t": "Limpeza Pesada", "s.deep.d": "Limpeza completa de cima a baixo: rodapés, eletrodomésticos, armários, rejuntes e lugares difíceis.",
  "s.post.t": "Limpeza Pós-Obra", "s.post.d": "Poeira, entulho e resíduos removidos depois da reforma, deixando o espaço seguro e pronto para usar.",
  "s.spring.t": "Limpeza de Primavera", "s.spring.d": "Uma renovação completa da casa — janelas, armários, superfícies e tudo o que estiver no caminho.",
  "s.vac.t": "Limpeza de Aluguel por Temporada", "s.vac.d": "Trocas rápidas e confiáveis entre hóspedes, com cada detalhe pronto para uma estadia 5 estrelas.",
  "why.eyebrow": "Por que a Fine Cleaning", "why.title": "Um espaço mais limpo. Uma vida mais leve.",
  "why.sub": "Limpeza profissional que devolve conforto, frescor e tranquilidade.",
  "why.1t": "Espaço mais limpo", "why.1d": "Cada ambiente limpo com cuidado e atenção aos detalhes.",
  "why.2t": "Ambiente fresco", "why.2d": "Produtos de qualidade que deixam o espaço fresco e higienizado.",
  "why.3t": "Mais conforto", "why.3d": "Horários flexíveis que se adaptam à sua rotina ou ao seu negócio.",
  "why.4t": "Menos estresse", "why.4d": "Você cuida do que importa — a limpeza fica com a gente.",
  "how.eyebrow": "Como funciona", "how.title": "Agendar é simples",
  "how.1t": "Peça um orçamento", "how.1d": "Preencha o formulário ou ligue para (754) 242-2578.",
  "how.2t": "Escolha a data", "how.2d": "Confirmamos os detalhes, o valor e o melhor horário para você.",
  "how.3t": "Aproveite a limpeza", "how.3d": "Nossa equipe chega no horário e deixa tudo impecável.",
  "area.eyebrow": "Região atendida", "area.title": "Atendemos Massachusetts",
  "area.sub": "Com base em Hopkinton, MA, atendemos casas e empresas em Hopkinton e região. Não sabe se atendemos sua cidade? É só perguntar.",
  "area.around": "região",
  "pay.eyebrow": "Formas de pagamento", "pay.title": "Pague como preferir",
  "pay.credit": "Cartão de crédito", "pay.debit": "Cartão de débito", "pay.cash": "Dinheiro", "pay.checks": "Cheque",
  "quote.eyebrow": "Orçamento grátis", "quote.title": "Peça seu orçamento hoje",
  "quote.sub": "Conte sobre o seu espaço e retornamos rápido. Sem compromisso.",
  "f.name": "Nome completo", "f.phone": "Telefone", "f.email": "E-mail", "f.service": "Serviço", "f.choose": "Escolha um serviço",
  "f.date": "Data desejada", "f.msg": "Conte sobre o seu espaço",
  "f.msgPh": "Quartos/banheiros, metragem, endereço/cidade…",
  "f.submit": "Enviar pelo WhatsApp", "f.note": "Orçamento grátis e sem compromisso. Normalmente respondemos no mesmo dia.",
  "f.doneT": "Obrigado!", "f.doneD": "O WhatsApp abriu com o seu pedido. É só tocar em enviar — retornaremos em breve.",
  "f.err": "Preencha nome, telefone, e-mail válido, serviço e data.",
  "foot.about": "Limpeza residencial e comercial profissional em Massachusetts.",
  "foot.contact": "Contato", "foot.links": "Links", "foot.privacy": "Política de Privacidade", "foot.terms": "Termos de Uso",
  "foot.rights": "Todos os direitos reservados.",
  "wa.intro": "Olá! Gostaria de um orçamento:", "wa.name": "Nome", "wa.phone": "Telefone", "wa.email": "E-mail",
  "wa.service": "Serviço", "wa.date": "Data", "wa.msg": "Detalhes",
};
// Legal pages
Object.assign(PT, { back: "← Início", terms: "Termos de Uso", privacy: "Política de Privacidade" });
const EN_EXTRA = {
  "f.err": "Please fill in name, phone, a valid email, service and date.",
  "wa.intro": "Hi! I'd like a cleaning quote:", "wa.name": "Name", "wa.phone": "Phone", "wa.email": "Email",
  "wa.service": "Service", "wa.date": "Date", "wa.msg": "Details",
};

// Save the original English text from the page
const EN = { ...EN_EXTRA };
document.querySelectorAll("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] ??= el.textContent; });
document.querySelectorAll("[data-i18n-ph]").forEach((el) => { EN[el.dataset.i18nPh] ??= el.placeholder; });

let lang = "en";
const t = (k) => (lang === "pt" ? PT[k] : EN[k]) ?? EN[k] ?? k;

function setLang(next) {
  lang = next === "pt" ? "pt" : "en";
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  document.querySelectorAll("[data-only]").forEach((el) => { el.hidden = el.dataset.only !== lang; });
  try { localStorage.setItem("fc-lang", lang); } catch {}
}
document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
try { const saved = localStorage.getItem("fc-lang"); if (saved) setLang(saved); } catch {}

// Header + mobile menu
const header = document.querySelector(".nav");
const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".head, .tile, .why > *, .steps li, .card, .quote > *, .hero__media");
revealEls.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// Quote form → WhatsApp
const form = document.getElementById("quoteForm");
if (form) {
  const dateInput = form.querySelector('[name="date"]');
  const now = new Date();
  dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  // Validate each field; mark invalid ones so the user sees exactly what's missing.
  const rules = {
    name: (v) => v.trim().length >= 2,
    phone: (v) => v.replace(/\D/g, "").length >= 7,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    service: (v) => !!v,
    date: (v) => !!v,
  };
  const check = (el) => {
    const ok = rules[el.name] ? rules[el.name](el.value) : true;
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  Object.keys(rules).forEach((n) => form[n].addEventListener("blur", () => { if (form[n].value) check(form[n]); }));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const bad = Object.keys(rules).filter((n) => !check(form[n]));
    const err = document.getElementById("formError");
    if (bad.length) { err.textContent = t("f.err"); form[bad[0]].focus(); return; }
    err.textContent = "";

    const text = [
      t("wa.intro"),
      `${t("wa.name")}: ${d.name.trim()}`,
      `${t("wa.phone")}: ${d.phone.trim()}`,
      `${t("wa.email")}: ${d.email.trim()}`,
      `${t("wa.service")}: ${d.service}`,
      `${t("wa.date")}: ${d.date}`,
      d.message.trim() ? `${t("wa.msg")}: ${d.message.trim()}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    document.getElementById("formDone").hidden = false;
    form.reset();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
