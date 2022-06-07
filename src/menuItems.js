export const menuItems = [
  {
    title: "Home",
    url: '/home',
    cName: 'test'
  },
  {
    title: "Services",
    url: '/services',
    cName: 'test',
    submenu: [
      {
        title: "Dog Daycare",
        url: '/dog-daycare',
        cName: 'test'
      },
      {
        title: "Overnight Boarding",
        url: '/overnight-boarding',
        cName: 'test'
      },
      {
        title: "Grooming & Spa Services",
        url: '/grooming-&-spa-services',
        cName: 'test',
        submenu: [
          {
            title: 'Grooming Application',
            url: '/grooming-application',
            cName: 'test',
          }
        ]
      },
    ],
  },
  {
    title: "Fetch Club",
    url: '/fetchclub',
    cName: 'test'
  },
  {
    title: "Fetch Cam",
    url: '/fetchcam',
    cName: 'test'
  },
  {
    title: "About",
    url: '/',
    cName: 'test',
    submenu: [
      {
        title: "Who we are",
        url: '/about',
        cName: 'test'
      },
      {
        title: "Meet the Staff",
        url: '/staff',
        cName: 'test'
      },
      {
        title: "Testimonials",
        url: '/testimonials',
        cName: 'test'
      },
      {
        title: "F.A.Q.",
        url: '/faq',
        cName: 'test'
      },
      {
        title: "Blog",
        url: '/blog',
        cName: 'test'
      }, 
      {
        title: "Photos",
        url: '/photos',
        cName: 'test',
      },
    ],
  },
  {
    title: "Contact",
    url: '/contact',
    cName: 'test'
  }
];