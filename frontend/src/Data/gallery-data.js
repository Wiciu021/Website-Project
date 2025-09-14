export const galleryData = [
  {
    id: 1,
    folder: 'mclaren',
    title: 'McLaren Collection',
    description: 'The fastest and sleekest McLarens all in one place.',
    img: 'mclaren1', // cover image (first child's img)
    date: '2025-08-01',
    children: [
      { id: 11, img: 'mclaren1' },
      { id: 12, img: 'mclaren2' },
      { id: 13, img: 'mclaren3' },
      { id: 14, img: 'mclaren4' },
      { id: 15, img: 'mclaren5' },
    ],
  },

  {
    id: 2,
    folder: 'ferrari',
    title: 'Ferrari Legends',
    description: 'The prancing horse’s finest moments captured.',
    img: 'ferrari1',
    date: '2025-08-10',
    children: [
      { id: 21, img: 'ferrari1' },
      { id: 22, img: 'ferrari2' },
      { id: 23, img: 'ferrari3' },
      { id: 24, img: 'ferrari4' },
    ],
  },

  {
    id: 3,
    folder: 'koenigsegg',
    title: 'Koenigsegg Power',
    description: 'Engineering madness from Sweden.',
    img: 'koenigsegg1',
    date: '2025-08-18',
    children: [
      { id: 31, img: 'koenigsegg1' },
      { id: 32, img: 'koenigsegg2' },
      { id: 33, img: 'koenigsegg3' },
    ],
  },

  {
    id: 4,
    folder: 'lamborghini',
    title: 'Lamborghini Legends',
    description: 'Unleashing bulls on every street.',
    img: 'lamborghini1',
    date: '2025-08-24',
    children: [
      { id: 41, img: 'lamborghini1' },
      { id: 42, img: 'lamborghini2' },
    ],
  },

  {
    id: 5,
    folder: 'porsche',
    title: 'Porsche Classics',
    description: 'Precision, power, and timeless style.',
    img: 'porsche1',
    date: '2025-08-28',
    children: [
      { id: 51, img: 'porsche1' },
      { id: 52, img: 'porsche2' },
      { id: 53, img: 'porsche3' },
    ],
  },
];

export default galleryData;
