const collegeDetails = {
  logo: "mrce.png",
  name: "MRCE",
  title: "Knowledge is Devine",
  subTitle: "MRCE",
  navigation: [
    { name: "About Us", url: "/about-us" },
    { name: "Login", url: "/login" },
  ],
  List: [
    { name: "Club 1", url: "/plexus", image: "plexus.jpg" },
    { name: "Club2", url: "/nss", image: "nss.jpg" },
    { name: "Club3", url: "/innovesta", image: "innovesta.jpg" },
  ],
  members: [
    {
      title: "Our Management",
      list: [
        {
          name: "Malla Reddy",
          description: [
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
          ],
          imgUrl: "reddy.jpg",
        },
        {
          name: "Mahender Reddy",
          description: [
            "Pellentesque habitant morbi tristique senectus",
            "Et netus et malesuada fames",
          ],
          imgUrl: "mahender.jpg",
        },
      ],
    },
    {
      title: "Our Service",
      list: [
        {
          name: "Tech Events",
          description: [
            "Duis aute irure dolor in reprehenderit",
            "In voluptate velit esse cillum",
          ],
          imgUrl: "pcLogo.jpg",
        },
        {
          name: "Non Tech Events",
          description: [
            "Eu fugiat nulla pariatur",
            "Excepteur sint occaecat cupidatat non proident",
          ],
          imgUrl: "rinningLogo.jpg",
        },
      ],
    },
  ],
};
const clubs = [
  {
    name: "NSS",
    title: "Ministry of Youth Addairs and Sports",
    subTitle: "NSS",
    logo: "nss.png",
    search: "nss",
    navigation: [
      { name: "Home", url: "/" },
      { name: "Events", url: "/nss" },
      { name: "Login", url: "/login" },
    ],
    List: [
      { name: "Event 1", url: "/Event1", image: "Event1.jpg" },
      { name: "Event 2", url: "/Event2", image: "Event2.jpg" },
      { name: "Event 3", url: "/Event3", image: "Event3.jpg" },
    ],
    members: [
      {
        title: "Department of Association",
        list: [
          {
            name: "Venkatesh",
            description: [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
            ],
            imgUrl: "venkatesh.jpg",
          },
          {
            name: "Priyanka",
            description: [
              "Pellentesque habitant morbi tristique senectus",
              "Et netus et malesuada fames",
            ],
            imgUrl: "priyanka.jpg",
          },
        ],
      },
      {
        title: "Secretaries",
        list: [
          {
            name: "B Akhilesh",
            description: [
              "Duis aute irure dolor in reprehenderit",
              "In voluptate velit esse cillum",
            ],
            imgUrl: "b_akhilesh.jpg",
          },
          {
            name: "M Hyndhavi",
            description: [
              "Eu fugiat nulla pariatur",
              "Excepteur sint occaecat cupidatat non proident",
            ],
            imgUrl: "m_hyndhavi.jpg",
          },
        ],
      },
    ],
  },
];

const events = [
  {
    name: "Hackathon 2024",
    title: "",
    subTitle: "",
    logo: "hackathon_logo.png",
    search: "hackathon",
    navigation: [
      { name: "About", url: "/about" },
      { name: "Register", url: "/register" },
    ],
    List: [
      { name: "Welcome Message", url: "/welcome", image: "welcome_banner.jpg" },
      { name: "Schedule", url: "/schedule", image: "schedule_banner.jpg" },
      { name: "Prizes", url: "/prizes", image: "prizes_banner.jpg" },
    ],
    events: [
      {
        title: "Opening Ceremony",
        description: [
          "Join us for the opening ceremony of Hackathon 2024.",
          "Keynote speakers, introduction to the event, and more!",
        ],
        date: "2024-07-01",
        time: "09:00 AM",
        location: "Main Hall",
      },
      {
        title: "Workshop: Introduction to Web Development",
        description: [
          "Learn the basics of HTML, CSS, and JavaScript.",
          "No prior experience required.",
        ],
        date: "2024-07-02",
        time: "10:00 AM",
        location: "Workshop Room A",
      },
    ],
    members: [
      {
        title: "Coordinators",
        list: [
          {
            name: "Alice Johnson",
            description: [
              "Experienced hackathon organizer",
              "Passionate about fostering innovation",
            ],
            imgUrl: "alice_johnson.jpg",
          },
          {
            name: "Bob Williams",
            description: [
              "Tech enthusiast with event management skills",
              "Believes in the power of collaboration",
            ],
            imgUrl: "bob_williams.jpg",
          },
        ],
      },
      {
        title: "Volunteers",
        list: [
          {
            name: "Eva Martinez",
            description: [
              "Eager to assist participants throughout the event",
              "Enthusiastic about creating a welcoming atmosphere",
            ],
            imgUrl: "eva_martinez.jpg",
          },
          {
            name: "Sam Patel",
            description: [
              "Organized and detail-oriented",
              "Ready to support the team in any way possible",
            ],
            imgUrl: "sam_patel.jpg",
          },
        ],
      },
    ],
    info: [
      {
        title: "Event Details",
        description: [
          "Hackathon 2024 is a two-day event focused on fostering innovation and collaboration among participants.",
          "Participants will have the opportunity to work on real-world projects, attend workshops, and connect with industry experts.",
        ],
      },
      {
        title: "Venue Information",
        description: [
          "The hackathon will be held at the Tech Hub Convention Center located at 123 Tech Street, Cityville.",
          "Parking is available onsite. Food and beverages will be provided for registered participants.",
        ],
      },
    ],
  },
];

export const getCollegeDetails = () => {
  return collegeDetails;
};

export const getClubByName = (clubName) => {
  return clubs.find((club) => club.search === clubName);
};

export const getEventByName = (eventName) => {
  return events.find((event) => event.search === eventName);
};

export default getCollegeDetails;
