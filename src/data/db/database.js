import Mock from "../mock";

const database = {
  information: {
    name: 'Robert Cullen-Keel',
    aboutContent: "I am a full stack web developer currently located in Durham, NC. I recently graduated from the Bootcamp at UNC Chapel Hill, and I have a keen eye for detail.",
    // age: [],
    phone: '',
    nationality: '',
    language: '',
    email: '',
    // address: 'Durham, North Carolina',
    // freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      instagram: 'https://www.instagram.com/motoroboto/',
      bandcamp: 'https://robertcullen.bandcamp.com/',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/robert-cullen-keel/',
      dribbble: '',
      github: 'https://github.com/motoroboto'
    },
    brandImage: '/portfolio3/images/about-image.jpg',
    aboutImage: '/portfolio3/images/about-image-lg.jpg',
    aboutImageLg: '/portfolio3/images/about-image-lg.jpg',
    cvfile: 'https://motoroboto.github.io/portfolio2eb/assets/atsresume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      // details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      // details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      // details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "ASGM-WFU",
      subtitle: "This site will be used by the ASGM researchers in order to automate the ML workflow. This sleek front end is connected to a very complex and robust AWS backend.",
      imageUrl: "https://raw.githubusercontent.com/motoroboto/portfolio2eb/main/assets/img/project-featured/color.png",
      githubUrl: 'https://github.com/bpgould/ASGMfrontEnd',
      url: 'https://asgmwfu.com/'
    },
    {
      id: 2,
      title: "Workout Tracker",
      subtitle: "A simple fitness tracking web app utilizing a Mongo database with a Mongoose schema.",
      imageUrl: "https://github.com/motoroboto/workouttracker/raw/main/assets/screenshot.png",
      githubUrl: 'https://github.com/motoroboto/workouttracker',
      url: 'https://motorobotofittrack.herokuapp.com/'
    },
    {
      id: 3,
      title: "Magic: the Gathering Pricing Database",
      subtitle: "A page utilizing the Scryfall and ExchangeRates APIs in order to gather a display card information as well as pricing in a variety of differing currencies.",
      imageUrl: "https://github.com/whelant/Project-1/raw/main/assets/screenshot.png",
      githubUrl: 'https://github.com/motoroboto/mtgcurrencyconverter',
      url: 'https://motoroboto.github.io/mtgcurrencyconverter/'
    },
    {
      id: 4,
      title: "Budget Tracker",
      subtitle: "A simple Budget tracking Progressive Web App with offline functionality",
      imageUrl: "https://github.com/motoroboto/budgettracker/raw/main/assets/screenshot.png",
      githubUrl: 'https://github.com/motoroboto/budgettracker',
      url: 'https://motorobotobudgetracker.herokuapp.com/'
    },
    {
      id: 5,
      title: "Eat Da Burger",
      subtitle: "Compile a List of Burgers, mark them as consumed, or delete them",
      imageUrl: "https://github.com/motoroboto/eatdaburger/raw/main/public/assets/img/screenshot.png",
      githubUrl: 'https://github.com/motoroboto/eatdaburger',
      url: 'https://motorobotoeatdaburger.herokuapp.com/'
    },
    {
      id: 6,
      title: "Employee Directory",
      subtitle: "A Searchable Employee Database",
      imageUrl: "https://raw.githubusercontent.com/motoroboto/employeedirectory/master/assets/screenshot.png",
      githubUrl: 'https://github.com/motoroboto/employeedirectory',
      url: 'https://motoroboto.github.io/employeedirectory/'
    },

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2006 - Present",
        position: "Store Manager",
        company: "Sherwin-Williams",
        details: "I Oversaw a growth in annual sales by 15% in a one-year period during a hiring freeze. I Coach, develop and support a team of six, through recruiting and hiring, scheduling, training and delegation of work assignments. Conduct monthly staff performance evaluations to establish career progression plans for key staff retention and reduction of staff turnover. Build, maintain and grow relationships with key customers, contributing to the long-term strength of the business and brand. Execute national promotions and develop local promotions ensuring successful execution to effectively counter local competition. Analyze and interpret market trends affecting sales goals. Regularly complete internal and external purchase orders to maintain inventory levels. Assure prompt payment and reconciliation of vendor invoices"
      }
      // {
      //   id: 2,
      //   year: "2016 - 2018",
      //   position: "Frontend Web Developer",
      //   company: "CBA Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // },
      // {
      //   id: 3,
      //   year: "2014 - 1016",
      //   position: "UI/UX Designer",
      //   company: "Example Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Full Stack Development Bootcamp",
        university: "UNC Chapel Hill",
        details: "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS."
      },
      {
        id: 2,
        year: "2018 - 2020",
        graduation: "Associates in Business Administration",
        university: "Durham Tech",
        details: "The Business Administration curriculum is designed to introduce students to the various aspects of the free enterprise system.Students will be provided with a fundamental knowledge of business functions, processes, and an understanding of business organizations in today's global economy."
      }
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: '252-241-7212',
    emailAddress: 'robert.a.cullen@gmail.com',
    address: "Durham, North Carolina"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});