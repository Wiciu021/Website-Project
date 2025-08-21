export const headerData = [
  {
    id: 1,
    label: 'Główna',
    href: '/'
  },
  {
    id: 2,
    label: 'Dla Ucznia',
    children: [
      { id: 21, label: 'Samorząd Uczniowski', href: '/samorzad-uczniowski' },
      { id: 22, label: 'Plan Zajęć', href: '/plan-zajec.pdf' },
      { id: 23, label: 'Zastępstwa', href: '/zastepstwa1.pdf' },
      { id: 24, label: 'Dziennik', href: 'https://www.edu.gdansk.pl/' },
      { id: 25, label: 'Matura', href: '/matura' }
    ]
  },
  {
    id: 3,
    label: 'Dla Rodzica',
    children: [
      { id: 31, label: 'Rada Rodziców', href: '/rada-rodzicow' },
      { id: 32, label: 'Dokumenty Szkolne', href: '/dokumenty-szkolne' },
      { id: 33, label: 'Kalendarz Pracy', href: '/docs-files/Plan-pracy-2024-2025.pdf' },
      { id: 34, label: 'Ubezpieczenie', href: '/ubezpieczenie' },
    ]
  },
  {
    id: 4,
    label: 'O Szkole',
    children: [
      {
        id: 41,
        label: 'Projekty Unijne',
        children: [
          { id: 411, label: 'Erasmus', href: '/projekty-unijne/erasmus' },
        ]
      },
      { id: 42, label: 'Osiągnięcia', href: '/osiagniecia' },
      { id: 43, label: 'Historia', href: '/historia' },
      { id: 44, label: 'Zespół Nauczycieli', href: '/zespol-nauczycieli' },
      { id: 45, label: 'Galeria', href: '/galeria' },
    ]
  },
  {
    id: 5,
    label: 'Rekrutacja',
    children: [
      { id: 51, label: 'Profile Klas', href: '/profile-klas' },
      { id: 52, label: 'Informacje dla Kandydatów', href: '/informacje-dla-kandydatow' },
    ]
  },
  {
    id: 6,
    label: 'Aktualności',
    href: '/aktualnosci'
  },
  {
    id: 7,
    label: 'Kontakt',
    href: '/kontakt'
  }
];

export default headerData;
