import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'La Novela',
      href: '/mientras',
    },
    {
      text: 'El Autor',
      href: '/autor',
    },
    {
      text: 'Celina’s Enigma',
      href: '/tour',
    },
    {
      text: 'Extras',
      href: '/unlock',
    },
  ]
};

export const footerData = {
  links: [
    {
      title: 'Explora',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'La Novela', href: getPermalink('/mientras') },
        { text: 'El Autor', href: getPermalink('/autor') },
        { text: 'Celina’s Enigma', href: getPermalink('/tour') },
        { text: 'Extras', href: getPermalink('/unlock') },
      ],
    },
    {
      title: 'La historia',
      links: [
        { text: 'Mientras El Tiempo Se Detenga', href: getPermalink('/mientras') },
        { text: 'Capítulo extra', href: getPermalink('/unlock') },
        { text: 'El tour en Antigua', href: getPermalink('/tour') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Escríbeme', href: getPermalink('/contacto') },
        { text: 'Goodreads', href: 'https://www.goodreads.com/book/show/44767475-mientras-el-tiempo-se-detenga?ac=1&from_search=true&qid=zzxNUQO0qC&rank=1#?ref=nav_brws' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'Goodreads', icon: 'tabler:book', href: 'https://www.goodreads.com/book/show/44767475-mientras-el-tiempo-se-detenga?ac=1&from_search=true&qid=zzxNUQO0qC&rank=1#?ref=nav_brws' },
  ],
  footNote: `
    © ${new Date().getFullYear()}. Marco Rolando Morales Durán. Todos los derechos reservados.
  `,
};
