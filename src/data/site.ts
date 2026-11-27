// =============================================================
//  Conteúdo do site da Machado Films
//  Tudo o que muda com frequência fica aqui: contato, trabalhos,
//  serviços, reels e clientes. Os componentes só leem daqui.
// =============================================================

// TODO: trocar pelo número real (só dígitos, com 55 + DDD)
export const WHATSAPP_NUMBER = '55SEUNUMERO';
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Machado Films e quero solicitar um orçamento.';
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// TODO: trocar pelo @ real
export const INSTAGRAM_URL = 'https://instagram.com/';

export const CITY = 'Ijuí e região · RS';

// Showreel do topo. Quando tiver o vídeo no Vimeo, cole o ID aqui
// (ex.: 'https://vimeo.com/123456789' → '123456789').
export const SHOWREEL_VIMEO_ID = '';

// Faixa de cima do carrossel (cards grandes)
export const worksTop = [
  { title: 'Institucional', tag: 'EMPRESA · 2026', dur: '02:14', tone: 'lime' },
  { title: 'Aftermovie', tag: 'EVENTO · 2026', dur: '01:32', tone: 'amber' },
  { title: 'Lançamento de marca', tag: 'MARCA · 2026', dur: '00:45', tone: 'blue' },
  { title: 'Bastidores', tag: 'MAKING OF · 2025', dur: '01:05', tone: 'violet' },
];

// Faixa de baixo do carrossel (cards menores)
export const worksBottom = [
  { title: 'Reels', tag: 'INSTAGRAM', tone: 'lime' },
  { title: 'Depoimentos', tag: 'CLIENTE', tone: 'amber' },
  { title: 'Produto', tag: 'E-COMMERCE', tone: 'blue' },
  { title: 'Eventos', tag: 'COBERTURA', tone: 'violet' },
  { title: 'Criadores', tag: 'CONTEÚDO', tone: 'olive' },
];

export const services = [
  {
    title: 'Institucionais',
    text: 'A história da sua empresa contada com roteiro, direção e estética de cinema — para o site, apresentações e redes.',
    meta: 'Roteiro · Captação · Edição · Cor',
    icon: 'M3 7h13v10H3zM16 10l5-3v10l-5-3',
  },
  {
    title: 'Aftermovies',
    text: 'A energia do seu evento condensada em poucos minutos, com ritmo, trilha e momentos que as pessoas vão querer reviver.',
    meta: 'Cobertura · Montagem · Trilha',
    icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    title: 'Reels e conteúdo',
    text: 'Vídeos verticais pensados para o feed: gancho forte, edição dinâmica e identidade visual da sua marca.',
    meta: '9:16 · Legendas · Motion',
    icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2',
  },
];

export const steps = [
  { name: 'Roteiro', code: 'MF-101', title: 'Briefing e ideia', text: 'Entendo seu objetivo e transformo em uma história.', pill: 'Planejamento', color: '#7a7a7a' },
  { name: 'Captação', code: 'MF-102', title: 'Dia de gravação', text: 'Direção, luz e câmera com olhar cinematográfico.', pill: 'Em produção', color: '#e0b84a' },
  { name: 'Edição', code: 'MF-103', title: 'Montagem e cor', text: 'Cortes, trilha e colorização. Você aprova cada versão.', pill: 'Em aprovação', color: '#5aa9e6' },
  { name: 'Entrega', code: 'MF-104', title: 'Pronto para publicar', text: 'Arquivos finais em todos os formatos que você precisa.', pill: 'Entregue', color: '#A2CA44' },
];

// Reels: cole o ID do Vimeo em cada um quando tiver
export const reels = [
  { vimeoId: '', label: 'Reel 1', tag: 'REEL 01', tone: 'lime' },
  { vimeoId: '', label: 'Reel 2', tag: 'REEL 02', tone: 'amber' },
  { vimeoId: '', label: 'Reel 3', tag: 'REEL 03', tone: 'blue' },
];

// Logos de clientes: coloque os arquivos em /public/clientes/ e liste aqui
// ex.: { name: 'Empresa X', src: '/clientes/empresa-x.png' }
export const clients: { name: string; src?: string }[] = [
  { name: 'Cliente' }, { name: 'Cliente' }, { name: 'Cliente' },
  { name: 'Cliente' }, { name: 'Cliente' }, { name: 'Cliente' },
];
