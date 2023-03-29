import { SectionDownloadAppProps } from "@/components/SectionDownloadApp/SectionDownloadApp";
import { SectionFAQProps } from "@/components/SectionFAQ/SectionFAQ";
import { SectionFeaturesProps } from "@/components/SectionFeatures/SectionFeatures";
import { SectionHeroType } from "@/components/SectionHero/SectionHero";
import { SectionShedulingType } from "@/components/SectionShedulingInfo/SectionShedulingInfo";
import images from "@/img";

export const navLinks = [
  { name: "Features", path: "#" },
  { name: "UseCases", path: "#" },
  { name: "Blog", path: "#" },
  { name: "FAQ", path: "#" },
  { name: "Pricing", path: "#" },
];

export const heroSectionData: SectionHeroType = {
  title: "Small Business Scheduling Software",
  subTitle:
    "Our appointment scheduler allows you to easily manage your appointments, send automated reminders, and customize your availability. Plus, with our intuitive interface and powerful features",

  heroImage: {
    imageUrl: images.image_phone_1_2x,
    alt: "hero image",
    eventItems: {
      left: {
        avatar: images.avatarLeft,
        alt: "",
        name: "Chloe",
        event: "booked Meeting",
        date: "Monday, 2:10 PM",
      },
      right: {
        avatar: images.avatarRight,
        alt: "",
        name: "Joe",
        event: "booked Ad Consultation",
        date: "Tomorrow, 4:30 PM",
      },
    },
  },
  createEventFormData: {
    note: "*You will be able setup event details later",
    eventInputPlaceholder: "Enter event title",
    eventInputName: "eventName",
    timeInputName: "eventTime",
    timeInputPlaceholder: "30 min",
    submitButtonName: "Get your link",
    submitButtonNameMobile: "Get your scheduling link",
  },

  profitsList: [
    {
      id: "1",
      icon: images.icon_timer,
      alt: "icon_timer",
      title: "24/7 booking",
      descr: "Clients can schedule appointments while you are sleeping",
    },
    {
      id: "2",
      icon: images.icon_alert,
      alt: "icon_alert",
      title: "Less no-shows",
      descr: "We will remind your clients about upcoming appointments",
    },
    {
      id: "3",
      icon: images.icon_clipboard_blue,
      alt: "icon_clipboard_blue",
      title: "No empty slots",
      descr: "Waitlist can help you to feel canceled appointments",
    },
    {
      id: "4",
      icon: images.icon_phonebook,
      alt: "icon_phonebook",
      title: "Manage Clients",
      descr: "Store & manage clients info and contacts",
    },
  ],
};

export const featuresSectionData: SectionFeaturesProps = {
  title: "Features",
  featuresList: {
    list: [
      {
        id: "1",
        icon: images.icon_calendar,
        iconAlt: "icon calendar",
        title: "Appointment Calendar",
        descr:
          "Use free slots feature to get the best time for scheduling new appointment or add breaks to relax",
        imgURL: images.futureImg_1_2x,
        imgAlt: "big calenar demo",
      },
      {
        id: "2",
        icon: images.icon_store,
        iconAlt: "icon store",
        title: "Personal Booking Page for Clients",
        descr:
          "We've taken the best practices from the most popular calendar applications to make our the best",
        imgURL: images.futureImg_2_2x,
        imgAlt: "",
      },
      {
        id: "3",
        icon: images.icon_clipboard,
        iconAlt: "icon clipboard",
        title: "Waitlist",
        descr:
          "Use free slots feature to get the best time for scheduling new appointment or add breaks to relax",
        imgURL: images.futureImg_3_2x,
        imgAlt: "",
      },
      {
        id: "4",
        icon: images.icon_mail_inbox,
        iconAlt: "icon mail inbox",
        title: "Reminders for You and Your Clients",
        descr:
          "Use free slots feature to get the best time for scheduling new appointment or add breaks to relax",
        imgURL: images.futureImg_4_2x,
        imgAlt: "",
      },
    ],
  },
  integrations: {
    title: " Integrate with your workflow",
    subTitle: "Streamline operations and improve efficiency in any industry.",
    list: [
      {
        _id: "1",
        icon: images.icon_google_calendar,
        alt: "icon calendar",
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        _id: "2",
        icon: images.icon_monday_ten,
        alt: "icon monday ten",
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        _id: "3",
        icon: images.icon_zoom,
        alt: "icon zoom",
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        _id: "4",
        icon: images.icon_google_meet,
        alt: "icon google meet",
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
    ],
  },
};

export const shedulingSectionData: SectionShedulingType = {
  title: "Scheduling that adapts to any business",
  subTitle: "Streamline operations and improve efficiency in any industry.",
  list: [
    {
      _id: "1",
      from: "Teacher",
      to: "Student",
      fill: "#62C45B",
      descrList: [
        "Track assignments.",
        " Manage classes.",
        "  Plan lessons.",
        " Track progress.",
        " Monitor grades.",
      ],
    },
    {
      _id: "2",
      from: "Business",
      to: "Client",
      fill: "#EA8C1F",
      descrList: [
        "Track assignments.",
        " Manage classes.",
        "  Plan lessons.",
        " Track progress.",
        " Monitor grades.",
      ],
    },
    {
      _id: "3",
      from: "Expert",
      to: "Folows",
      fill: "#5B6CC4",
      descrList: [
        "Track assignments.",
        " Manage classes.",
        "  Plan lessons.",
        " Track progress.",
        " Monitor grades.",
      ],
    },
    {
      _id: "4",
      from: "Trainer",
      to: "Trainee",
      fill: "#C45B5B",
      descrList: [
        "Track assignments.",
        " Manage classes.",
        "  Plan lessons.",
        " Track progress.",
        " Monitor grades.",
      ],
    },
  ],
};

export const downloadAppSectionData: SectionDownloadAppProps = {
  title: "All you need in 1 App",
  descr:
    "Our appointment scheduler allows you to easily manage your appointments, send automated reminders, and customize your availability. Plus, with our intuitive interface and powerful features",
  heroImage: {
    imageURL: images.iPhone_image_2x,
    alt: "iphone 12 pro",
  },
  downloadAppLinks: [
    { imageURL: images.Google_Play, alt: "get on Play Market", link: "#" },
    { imageURL: images.App_Store, alt: "get on App Store", link: "#" },
  ],
};

export const faqSectionData: SectionFAQProps = {
  title: "FAQ",
  faqList: [
    {
      id: 1,
      title: "What is booking page?",
      descr:
        "We are planning on adding an integration with Google Meet first, which will be followed by Zoom.",
    },
    {
      id: 2,
      title: "Does you have integration with Meet and Zoom?",
      descr:
        "We are planning on adding an integration with Google Meet first, which will be followed by Zoom.",
    },
    {
      id: 4,
      title: "Does you have integration with Google Calendar and iCal?",
      descr:
        "We are planning on adding an integration with Google Meet first, which will be followed by Zoom.",
    },
    {
      id: 5,
      title: "How works waitlist feature?",
      descr:
        "We are planning on adding an integration with Google Meet first, which will be followed by Zoom.",
    },
  ],
};
export type PriceCardProps = {
  isPremium: string;
  title: string;
  subTitle: string;
  price: string;
  sale?: string;
  buttonTitle: string;
  options: string[];
};
export const buyNowSectionData = {
  title: "Small Business Scheduling",
  subTitle:
    "We help to organize tasks, appointments, and events, allowing users to save time and increase productivity",
  descr:
    "We help to organize tasks, appointments, and events, allowing users to save time and increase productivity",
  pricingPeriods: [
    {
      id: "1",
      title: "Week",
      priceCards: [
        {
          isPremium: false,
          title: "free",
          subTitle: "for small businesses",
          price: 0,
          buttonTitle: "start for free",
          options: [
            "Personal Booking Link",
            " 100 Bookings per Month",
            " 1 Event Type",
          ],
        },
        {
          isPremium: true,
          title: "premium",
          subTitle: "for growing businesses",
          price: 6,
          sale: "Save 50%",
          buttonTitle: "start premium",
          options: [
            "Everything from Free package",
            "Unlimited Event Types",
            "Unlimited Clients",
            "Business Statistics",
            "More Integrations",
            "Client Notifications",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Month",
      priceCards: [
        {
          isPremium: false,
          title: "free",
          subTitle: "for small businesses",
          price: 0,
          buttonTitle: "start for free",
          options: [1, 2, 3, 4, 5, 6],
        },
        {
          isPremium: true,
          title: "premium",
          subTitle: "for growing businesses",
          price: 24,
          sale: "Save 50%",
          buttonTitle: "start premium",
          options: [1, 2, 3, 4, 5, 6],
        },
      ],
    },
    {
      id: "3",
      title: "Year",
      priceCards: [
        {
          isPremium: false,
          title: "free",
          subTitle: "for small businesses",
          price: 0,
          buttonTitle: "start for free",
          options: [1, 2, 3, 4, 5, 6],
        },
        {
          isPremium: true,
          title: "premium",
          subTitle: "for growing businesses",
          price: 72,
          sale: "Save 50%",
          buttonTitle: "start premium",
          options: [1, 2, 3, 4, 5, 6],
        },
      ],
    },
  ],
};

export const footerData = {
  company: {
    title: "Calday ltd.",
    company: "Calday ltd.",
  },
  useCases: {
    title: "Use Cases",
    links: [
      { link: "#", name: "Education" },
      { link: "#", name: "Business" },
      { link: "#", name: "Industry 1" },
      { link: "#", name: "Industry 2" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { link: "#", name: "FAQ" },
      { link: "#", name: "Terms & Conditions" },
      { link: "#", name: "Privacy Policy" },
    ],
  },
  blog: {
    title: "Blog",
    links: [
      { link: "#", name: "Article 1" },
      { link: "#", name: "Article 2" },
      { link: "#", name: "Article 3" },
    ],
  },
  contacts: { title: "Contacts", email: "support@calday.app", phone: "" },
  copyright: "© Calday 2023 | All Rights Reserved",
};
