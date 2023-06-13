// gitprofile.config.js

const config = {
  github: {
    username: 'hmaoprojects', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'hhmao',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'hmao@sas.upenn.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MySQL',
    'Java',
    'R',
    'Matlab',
    'Pytorch',
    'Tensorflow',
    'Streamlit',
    'Numpy',
    'cvxpy',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'School of Engineering and Applied Sciences, University of Pennsylvania',
      degree: 'M.S.E. in Electrical Engineering',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'The Wharton School, University of Pennsylvania',
      degree: 'B.S. in Economics (Statistics + Finance)',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'black',
      'Light',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
};
export default config;
