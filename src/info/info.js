import self from '../img/self.png';

export let colors = ['rgb(94, 140, 186)', 'rgb(86, 47, 111)'];

export const info = {
  firstName: 'Musawenkosi',
  lastName: 'Dube',
  initials: 'MD',
  position: 'a Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the RU',
    },

    {
      emoji: '📧',
      text: 'musabdube@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://facebook.com/musa.dube.7528',
      icon: 'fa fa-facebook',
    },
    {
      link: 'https://instagram.com/musabardube',
      icon: 'fa fa-instagram',
    },
    {
      link: 'https://vk.com/mdube',
      icon: 'fa fa-vk',
    },
    {
      link: 'https://twitter.com/musabardube',
      icon: 'fa fa-twitter',
    },
  ],
  bio: "Hello! I'm Musa, I'm an electronics and nanotechnology engineer. I studied Electronics at St Petersburg Electrotechnical University. I'm also a web developer. I enjoy art and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'matlab',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
  ],
  portfolio: [
    {
      title: 'Available on request',
      live: 'https://github.com/musabdube',
      source: 'https://github.com/musabdube',
    },
  ],
};
