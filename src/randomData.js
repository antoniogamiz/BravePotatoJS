import mock1 from "./theme/img/mock-portrait-1.jpg";
import mock2 from "./theme/img/mock-portrait-2.jpg";
import mock3 from "./theme/img/mock-portrait-3.jpg";
import mock4 from "./theme/img/mock-portrait-4.jpg";

import popIcon from "./theme/img/popular.svg";
import latIcon from "./theme/img/stopwatch.svg";
import genIcon from "./theme/img/price-tag.svg";

import logoFont from "./theme/img/image.png";
import logo from "./theme/img/cradle.svg";
import userIcon from "./theme/img/avatar.svg";

// mock portraits
let portraits = [mock1, mock2, mock3, mock4, mock1, mock2, mock3, mock4];
export { mock1, mock2, mock3, mock4, portraits };

// titlebars icons
export { popIcon, latIcon, genIcon };

// main images + userIcon
export { logoFont, logo, userIcon };

let items_ = [
  {
    title: "One Piece",
    chapters: [
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      }
    ],
    src: mock1,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
  },
  {
    title: "One Piece",
    chapters: [
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      }
    ],
    src: mock2,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
  },
  {
    title: "One Piece",
    chapters: [
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      }
    ],
    src: mock3,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
  },
  {
    title: "One Piece",
    chapters: [
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      },
      {
        name: "Chapter 129801 One piece es lo mejor",
        date: "11-30 23:51"
      }
    ],
    src: mock4,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
  }
];

let genres = [
  "All",
  "Action",
  "Adult",
  "Adventure",
  "Comedy",
  "Ecchi",
  "Fantasy",
  "Gender bender",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Manhua",
  "Manhwa",
  "Martial arts",
  "Mature",
  "Mecha",
  "Medical",
  "Mystery",
  "One shot",
  "Psychological",
  "Romance",
  "School life",
  "Schi fi",
  "Seinen",
  "Shoujo",
  "Shoujo ai",
  "Shounen",
  "Shounen ai",
  "Slice of life",
  "Smut",
  "Sports",
  "Supernatural",
  "Tragedy",
  "Webtoons",
  "Yaoi",
  "Yuri"
];

let states = [
  "All",
  "Completed",
  "Ongoing",
  "Drop",
  "Top read",
  "Newest",
  "Latest"
];

let items = [...items_, ...items_, ...items_, ...items_, ...items_, ...items_];

export { items, genres, states };

let chaptersList_ = [
  {
    title: "Chapter 394: Luffy and his epic aventures!",
    views: "483",
    date: "08-25 12:36"
  },
  {
    title: "Chapter 394: Luffy and his epic aventures!",
    views: "483",
    date: "08-25 12:36"
  },
  {
    title: "Chapter 394: Luffy and his epic aventures!",
    views: "483",
    date: "08-25 12:36"
  },
  {
    title: "Chapter 394: Luffy and his epic aventures!",
    views: "483",
    date: "08-25 12:36"
  },
  {
    title: "Chapter 394: Luffy and his epic aventures!",
    views: "483",
    date: "08-25 12:36"
  }
];

let chaptersList = [
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_,
  ...chaptersList_
];

export { chaptersList };
