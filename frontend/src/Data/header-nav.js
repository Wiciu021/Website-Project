export const headerData = [
  {
    label: 'Główna',
    href: '/'
  },
  {
    label: 'Dla Ucznia',
    children: [
      { label: 'Samorząd Uczniowski', href: '/samorzad-uczniowski' },
      { label: 'Plan Zajęć', href: '/plan-zajec' },
      { label: 'Zastępstwa', href: '/zastepstwa' },
      { label: 'Dziennik', href: '/dziennik' },
    ]
  },
  {
    label: 'Dla Rodzica',
    children: [
      { label: 'Rada Rodziców', href: '/rada-rodzicow' },
      { label: 'Dokumenty Szkolne', href: '/dokumenty-szkolne' },
      { label: 'Kalendarz Pracy', href: '/kalendarz-pracy' },
      { label: 'Ubezpieczenie', href: '/ubezpieczenie' },
    ]
  },
  {
    label: 'O Szkole',
    children: [
      {
        label: 'Projekty Unijne',
        children: [
          { label: 'Erasmus', href: '/projekty-unijne/erasmus' },
        ]
      },
      { label: 'Osiągnięcia', href: '/osiagniecia' },
      { label: 'Historia', href: '/historia' },
      { label: 'Zespół Nauczycieli', href: '/zespol-nauczycieli' },
      { label: 'Galeria', href: '/galeria' },
    ]
  },
  {
    label: 'Rekrutacja',
    children: [
      { label: 'Profile Klas', href: '/profile-klas' },
      { label: 'Informacje dla Kandydatów', href: '/informacje-dla-kandydatow' },
    ]
  },
  {
    label: 'Aktualności',
    href: '/aktualnosci'
  },
  {
    label: 'Kontakt',
    href: '/kontakt'
  }
];

export default headerData;