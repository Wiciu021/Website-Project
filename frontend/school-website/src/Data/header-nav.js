export const headerData = [
  {
    label: 'Strona Główna',
    href: '/'
  },
  {
    label: 'Dla Ucznia',
    children: [
      { label: 'Plan Lekcji', href: '/plan-lekcji' },
      { label: 'Zastępstwa', href: '/zastepstwa' },
      { label: 'Samorząd Uczniowski', href: '/samorzad' },
      { label: 'Projekty i Konkursy', href: '/projekty' },
    ]
  },
  {
    label: 'Dla Rodzica',
    children: [
      { label: 'Informacje', href: '/dla-rodzica' },
      { label: 'Terminarz Spotkań', href: '/terminarz' },
    ]
  },
  {
    label: 'O Szkole',
    children: [
      { label: 'Historia', href: '/historia' },
      { label: 'Dyrekcja i Nauczyciele', href: '/zespol' },
      { label: 'Patron', href: '/patron' },
    ]
  },
  {
    label: 'Rekrutacja',
    href: '/rekrutacja'
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

export default headerData