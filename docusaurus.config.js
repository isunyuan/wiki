// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ORGANIZATION_NAME = 'isunyuan';
const projectName = 'blog';
const TITLE = 'Hola';
const WEB_URL = 'https://blog.isunyuan.com';
const TAGLINE = '开发日常记录';
const GITHUB = `https://github.com/${ORGANIZATION_NAME}`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: TAGLINE,
  favicon: 'img/favicon.ico',
  url: WEB_URL,
  baseUrl: '/',
  organizationName: ORGANIZATION_NAME,
  projectName: projectName,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/blog',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      hideOnScroll: false,
      announcementBar: {
        id: 'support_us',
        content:
          `站点仍在建设中,<a target="_blank" rel="noopener noreferrer" href=${GITHUB}>Github</a>`,
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      algolia: {
        indexName: 'Hola',
        contextualSearch: true,
        appId: 'XF4A8PQXVX',
        apiKey: '22da33383e2e42ed8fe92a2f44efd01d',
      },
      navbar: {
        title: 'Hola',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
          srcDark: 'img/dark-logo.png',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: GITHUB,
            html: '<span class="custom-github"></span>',
            position: 'right',
            target: '_blank',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `<span>©${new Date().getFullYear()}.&nbsp;浙ICP备2022030325号</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
