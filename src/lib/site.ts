export const WHATSAPP_NUMBER = "5511988406930";
export const WHATSAPP_DISPLAY = "(11) 98840-6930";
export const INSTAGRAM_HANDLE = "socialy_webdesign";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

/** Monta o link do WhatsApp já com a mensagem pronta. */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Método", href: "#metodo" },
  { label: "Portfólio", href: "#portfolio" },
] as const;

export const MARQUEE_WORDS = [
  "Estratégia",
  "Performance",
  "Design",
  "SEO",
  "Otimização",
  "Branding",
] as const;

export type Stat = {
  count?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
};

export const STATS: Stat[] = [
  {
    count: 100,
    suffix: "%",
    label: "Desenhado do zero. Template comprado não entra aqui.",
  },
  {
    count: 15,
    suffix: " dias",
    label: "Do briefing ao site no ar, contando só dia útil.",
  },
  {
    text: "Nota A",
    label: "Velocidade medida pelo Lighthouse, o teste do próprio Google.",
  },
];

export const SERVICES = [
  {
    title: "Design exclusivo",
    note: "Seu layout nasce em uma tela em branco. Nenhum outro negócio vai ter a mesma cara que o seu.",
  },
  {
    title: "Site responsivo",
    note: "Funciona no notebook da sua mesa e no celular que seu cliente segura na fila do banco.",
  },
  {
    title: "Alta performance",
    note: "Abre antes do visitante pensar em desistir. Nota A no Lighthouse, não só na conversa.",
  },
  {
    title: "SEO básico",
    note: "Estruturado para o Google entender o que você vende logo na primeira visita dele.",
  },
  {
    title: "Botão de WhatsApp",
    note: "Um toque e o visitante já está digitando para você. Sem formulário no meio do caminho.",
  },
  {
    title: "Formulário que entrega",
    note: "A pessoa preenche, você recebe no WhatsApp. Nada de painel para lembrar de abrir.",
  },
  {
    title: "Google Maps",
    note: "Seu endereço no mapa e a rota traçada em um clique, direto do celular do cliente.",
  },
  {
    title: "Hospedagem",
    note: "Servidor, publicação e renovação por nossa conta. Essa parte você nunca precisa ver.",
  },
  {
    title: "Domínio próprio",
    note: "Registramos o seunegocio.com.br no seu nome e deixamos apontado e funcionando.",
  },
  {
    title: "Certificado SSL",
    note: "Cadeado fechado na barra do navegador. Sem aviso vermelho espantando quem chegou.",
  },
  {
    title: "Analytics",
    note: "Quantas pessoas entraram, de onde vieram e onde clicaram. Em número, não em achismo.",
  },
  {
    title: "Manutenção",
    note: "Atualização, backup e olho no ar enquanto o site estiver com a gente.",
  },
] as const;

export const EDGE = [
  {
    title: "Performance de verdade",
    body: "Site feito em código, com imagem tratada e nada carregando à toa. Tema pronto arrasta dez plugins que você nunca pediu, cobra a conta em segundos de carregamento e o visitante paga essa conta fechando a aba.",
  },
  {
    title: "Foco em conversão",
    body: "Cada seção tem uma tarefa: levar a pessoa um passo mais perto de falar com você. Se uma seção existe só para preencher espaço bonito, ela sai do projeto antes de virar código.",
  },
  {
    title: "Design sob medida",
    body: "Tipografia, cor e ritmo saem do seu posicionamento, não de um layout que já vendemos para outros vinte clientes. Um restaurante de bairro e uma clínica não deveriam parecer a mesma empresa.",
  },
  {
    title: "SEO técnico incluso",
    body: "Meta tags, dados estruturados, sitemap e Core Web Vitals ajustados já na primeira versão. Não é pacote extra que aparece na proposta depois que você se acostumou com o preço.",
  },
  {
    title: "Atendimento direto",
    body: "Você fala com quem está construindo o seu site, no seu WhatsApp. Sem gerente de contas repassando recado, sem ticket que some, sem esperar três dias por uma resposta de duas linhas.",
  },
  {
    title: "Suporte que continua",
    body: "Depois de publicar a gente continua por perto para ajuste, ideia nova e aquela mudança que só apareceu com o site rodando. Entrega não é o dia em que sumimos.",
  },
] as const;

export const OFFLINE = [
  {
    title: "O cliente vai no concorrente",
    body: "Ele procurou o seu serviço no Google às onze da noite, você não apareceu e alguém apareceu. A venda aconteceu, só que não foi com você.",
  },
  {
    title: "A dúvida bate antes do contato",
    body: "Todo mundo pesquisa o nome da empresa antes de fechar. Quando não encontra nada, a pergunta que sobra é se você existe mesmo.",
  },
  {
    title: "O Google não te conhece",
    body: "Sem endereço próprio na web, a maior fonte de busca do país não tem o que mostrar sobre o seu negócio para quem está procurando agora.",
  },
  {
    title: "A rede social manda em você",
    body: "Algoritmo muda, conta cai, alcance despenca de um dia para o outro. Enquanto o perfil for a sua única casa, nada disso está na sua mão.",
  },
] as const;

export const METHOD = [
  {
    title: "Briefing",
    body: "Uma conversa para entender o que você vende, para quem, e o que o site precisa resolver na prática.",
  },
  {
    title: "Proposta fechada",
    body: "Escopo, prazo e valor por escrito. O que está incluso e o que não está, tudo na mesma página.",
  },
  {
    title: "Entrada e fila",
    body: "Metade do valor via Pix e seu projeto entra na fila com data marcada para começar.",
  },
  {
    title: "Desenvolvimento",
    body: "Design e código andando juntos. Você recebe atualização durante o processo, não só no fim.",
  },
  {
    title: "Revisões sem limite",
    body: "Ajustamos quantas vezes precisar. Não existe contador de alterações escondido no contrato.",
  },
  {
    title: "Aprovação final",
    body: "Você abre com calma, testa no seu celular, mostra para quem quiser. Nada sobe antes do seu sim.",
  },
  {
    title: "No ar e pagamento",
    body: "Site publicado, domínio ativo, tudo funcionando. Aí sim a metade restante via Pix.",
  },
] as const;

export type Project = {
  name: string;
  segment: string;
  kind: string;
  year: string;
  featured?: boolean;
  /** Endereço do site no ar. Com ele o card vira link. */
  url?: string;
  /** Capa em /public/portfolio, ex: "/portfolio/brasa-mesa.jpg" */
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Brasa & Mesa",
    segment: "Restaurante",
    kind: "Institucional",
    year: "2026",
    featured: true,
    url: "https://brasa-mesa-premium.vercel.app",
    image: "/portfolio/brasa-mesa.jpg",
  },
  {
    name: "Souza & Sanseverino",
    segment: "Advocacia",
    kind: "Institucional",
    year: "2026",
    url: "https://site-souza-sanseverino.vercel.app/",
    image: "/portfolio/souza-sanseverino.jpg",
  },
  {
    name: "Vestra",
    segment: "Educação financeira",
    kind: "Simulador",
    year: "2026",
    url: "https://vestra-simulator.com.br/",
    image: "/portfolio/vestra.jpg",
  },
  {
    name: "Dr. Ricardo Iunis",
    segment: "Pediatria",
    kind: "Institucional",
    year: "2026",
    url: "https://dr-ricardo-sit.vercel.app/",
    image: "/portfolio/dr-ricardo.jpg",
  },
  {
    name: "Iron Peak Performance",
    segment: "Academia",
    kind: "Institucional",
    year: "2026",
    url: "https://iron-peak-digital-dominance.vercel.app",
    image: "/portfolio/iron-peak.jpg",
  },
  {
    name: "Harmonia Imperial",
    segment: "Orquestra",
    kind: "Institucional",
    year: "2025",
    url: "https://imperial-harmony-digital.vercel.app",
    image: "/portfolio/harmonia-imperial.jpg",
  },
  {
    name: "Instituto Matriz",
    segment: "Saúde",
    kind: "Institucional",
    year: "2025",
    url: "https://www.institutomatriz.com.br/",
    image: "/portfolio/instituto-matriz.jpg",
  },
  {
    name: "+Cabelo",
    segment: "Mega hair",
    kind: "Catálogo",
    year: "2026",
    url: "https://site-sandro-six.vercel.app",
    image: "/portfolio/mais-cabelo.jpg",
  },
];

export const FACTS = [
  { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappLink("Olá! Vim pelo site da Socialy.") },
  { label: "Instagram", value: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL },
  { label: "Horário", value: "Segunda a sábado, 14h às 20h" },
  { label: "Pagamento", value: "Pix, metade no fechamento e metade na entrega" },
  { label: "Atendimento", value: "100% remoto, para todo o Brasil" },
] as const;
