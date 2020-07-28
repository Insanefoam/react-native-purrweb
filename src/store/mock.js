const columns = [
  {
    id: 0,
    title: "TODO",
    userId: 0,
  },
  {
    id: 1,
    title: "In progress",
    userId: 0,
  },
  {
    id: 2,
    title: "Testing",
    userId: 0,
  },
  {
    id: 3,
    title: "Done",
    userId: 0,
  },
];

const cards = [
  {
    id: 0,
    title: "Testing card 1",
    description: "Testing description 1",
    checked: true,
    columnId: 0,
    commentsIds: [0, 1],
  },
  {
    id: 1,
    title: "Testing card 2",
    description: "Testing description 1",
    checked: true,
    columnId: 0,
    commentsIds: [2],
  },
  {
    id: 2,
    title: "Testing card 3",
    description: "Testing description 1",
    checked: true,
    columnId: 1,
    commentsIds: [],
  },
];

const comments = [
  {
    id: 0,
    body: "Testing comment 1",
    created: "2020-07-28T05:22:35.317Z",
    userId: 0,
  },
  {
    id: 1,
    body: "Testing comment 2",
    created: "2020-07-28T05:22:35.317Z",
    userId: 0,
  },
  {
    id: 2,
    body: "Testing comment 3",
    created: "2020-07-28T05:22:35.317Z",
    userId: 0,
  },
];

export default { columns, cards, comments };
