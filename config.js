// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Arunangshu',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '1e6edc9811539a64bc3baab736adad24',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '22.572645',
  defaultLongitude: '88.363892',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Amazon India',
      icon: 'shopping-cart',
      link: 'https://www.amazon.in/',
    },
    {
      id: '2',
      name: 'HDFC Netbanking',
      icon: 'credit-card',
      link: 'https://netbanking.hdfcbank.com/netbanking/',
    },
    {
      id: '3',
      name: 'Google Maps',
      icon: 'map-pin',
      link: 'https://www.google.com/maps',
    },
    {
      id: '4',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Hotstar',
      icon: 'star',
      link: 'https://www.hotstar.com/in/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'list',
  secondListIcon: 'download',

  // Links
  lists: {
    firstList: [
      {
        name: 'NewsNow India',
        link: 'https://www.newsnow.co.uk/h/World+News/Asia/India',
      },
      {
        name: 'BBC Sport',
        link: 'https://www.bbc.co.uk/sport',
      },
      {
        name: 'Housing.com',
        link: 'https://housing.com/',
      },
      {
        name: 'Soinny',
        link: 'https://www.spinny.com/',
      },
    ],
    secondList: [
      {
        name: 'Bitsearch',
        link: 'https://bitsearch.to/',
      },
      {
        name: 'Z-Library',
        link: 'https://1lib.in/',
      },
      {
        name: 'ITAD',
        link: 'https://isthereanydeal.com/#/',
      },
      {
        name: 'Soccer Streams',
        link: 'https://soccerstreams-100.tv/',
      },
    ],
  },
};
